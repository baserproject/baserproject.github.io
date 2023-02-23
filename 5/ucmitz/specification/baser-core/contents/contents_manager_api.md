# コンテンツマネージャーAPI

コンテンツマネージャーAPIを利用すると、固定ページ、ブログ、メールフォームなどのように自身で作ったコンテンツをツリー構造で俯瞰して管理する事ができます。

 
## URLの決定
コンテンツマネージャーAPIを利用すると、ツリー構造に応じたURLを自動生成し、ルーティングも自動化されます。

```php
// URL例） /service/about 

- / // コンテンツフォルダ
  - service // コンテンツフォルダ 
    - about // 固定ページ
```

 
## 開発の流れ

- [ツリーインターフェイスへの表示](#ツリーインターフェイスへの表示)
- [新規登録機能の実装](#新規登録機能の実装)
- [編集機能の実装](#編集機能の実装)
- [フロントページ表示機能の実装](#フロントページ表示機能の実装)
- [プレビュ機能ーの実装](#プレビュ機能ーの実装)
- [コピ機能ーの実装](#コピ機能ーの実装)
- [物理削除機能の実装](#物理削除機能の実装)

 
## ツリーインターフェイスへの表示
### 設定ファイルを準備

config/setting.php に、コンテンツマネージャーで管理するための設定を `BcContents.items` 内に記述します。  
`routes` 内には、各アクションについてのリンクを配列形式で定義します。  

なお、削除については、「ゴミ箱に入れる」としてCMS側が論理削除機能を提供しますが、別途、物理削除機能の実装が必要となります。

```php
return [
    'BcContents' => [
        'items' => [
            // プラグイン名
            'BcBlog' => [ 
                // 提供するコンテンツ名
                'BlogContent' => [ 
                    // 提供するコンテンツのタイトル
                    'title' => __d('baser', 'ブログ'), 
                    // 複数設置可能かどうか
                    'multiple' => true, 
                    // プレビュー機能を提供するかどうか
                    'preview' => true, 
                    // アイコンのクラス名
                    // 「プラグイン向け管理画面CSS自動読み込み機能」を利用してCSSを定義する
                    'icon' => 'bca-icon--blog',
                    // ルーティング設定
                    'routes' => [
                        // 管理機能（ブログの記事管理など）
                        'manage' => [
                            'prefix' => 'Admin',
                            'plugin' => 'BcBlog',
                            'controller' => 'BlogPosts',
                            'action' => 'index'
                        ],
                        // 新規追加（必須）
                        'add' => [
                            'prefix' => 'Api',
                            'plugin' => 'BcBlog',
                            'controller' => 'BlogContents',
                            'action' => 'add'
                        ],
                        // 編集（必須）
                        'edit' => [
                            'prefix' => 'Admin',
                            'plugin' => 'BcBlog',
                            'controller' => 'BlogContents',
                            'action' => 'edit'
                        ],
                        // フロントビュー
                        'view' => [
                            'plugin' => 'BcBlog',
                            'controller' => 'Blog',
                            'action' => 'index'
                        ],
                        // コピー
                        'copy' => [
                            'prefix' => 'Api',
                            'plugin' => 'BcBlog',
                            'controller' => 'BlogContents',
                            'action' => 'copy'
                        ],
                        // ダブルクリック時の遷移先
                        // 定義がない場合は編集画面に遷移する
                        'dblclick' => [
                            'prefix' => 'Admin',
                            'plugin' => 'BcBlog',
                            'controller' => 'BlogPosts',
                            'action' => 'index'
                        ],
                    ]
                ]
            ]
        ]
    ]
]
```

 
### アイコンのCSSを定義
[プラグイン向け管理画面CSS自動読み込み機能](../common/plugin_admin_css) を参考に、アイコンのCSSを定義します。  
ない場合は、CMSのデフォルトのアイコンとなります。

```css
.jstree-proton .bca-icon--blog {
    color: #7faa00;
}
.jstree-proton-contextmenu .bca-icon--blog {
    color: #7faa00;
}
.bca-icon--blog::before {
    content: "\f15c";
    font-weight: 400;
    font-family: 'Font Awesome 5 Free';
}
```

 
## 新規登録機能の実装
新規登録機能は、ツリーインターフェイスからAJAXとして呼び出されるため、Web APIとして実装しますが、まず、対象コンテンツのテーブルと、ContentsTable を紐付けます。

### BcContentsBehaviorの定義
対象コンテンツのテーブルの `initialize` メソッドで、BcContentsBehavior を追加します。

```php
public function initialize(array $config): void
{
    parent::initialize($config);
    $this->addBehavior('BaserCore.BcContents');
}
```

### コントローラーの定義
コントローラーは、`BcApiController` を継承します。

```php
use BaserCore\Controller\Api\BcApiController;
class BlogContentsController extends BcApiController
{
    public function add()
    {
    
    }
}
```

`$this->getRequest->getData()` の中に `content` をキーとして次の配列を送信します。

- parent_id：親のコンテンツID
- title：登録時に入力したタイトル
- plugin：プラグイン名
- type：コンテンツタイプ
- site_id：サイトID
- alias_id：エイリアスID（空）
- entity_id：実体ID（空）

上記データは、エンティティ化して、対象コンテンツのテーブルにて保存します。そうすると `content` は、テーブルに追加した BcContentsBehavior によって自動的に保存します。

```php
$blogContent = $blogContentsTable->newEntities($this->getRequest()->getData);
$blogContentsTable->save($blogContent);
```

We APIの返却値として、`content`、`message`、`errors` を返却する事で、ツリー構造インターフェイスが正常に動作します。

```php
$this->set([
    'content' => $blogContent->content,
    'message' => $message,
    'errors' => $blogContent->getErrors()
]);
$this->viewBuilder()->setOption('serialize', [
    'content', 
    'message', 
    'errors'
]);
```

 
## 編集機能の実装
編集機能は、コントローラーで、`BcAdminAppController` を継承して、管理画面内に実装しますが、タイトルや公開状態など、
ツリーコンテンツのエンティティの保存機能を自動実装するために、`BcAdminContentsComponent` を追加します。

```php
class BlogContentsController extends BcAdminAppController
{
    public function initialize(): void
    {
        parent::initialize();
        $this->loadComponent('BaserCore.BcAdminContents', ['entityVarName' => 'blogContent']);
    }

    public function edit(int $id)
    {
    
    }
}
```

`BcAdminContentsComponent` は、次の機能の自動実装を提供します。

- ツリーコンテンツのエンティティの基本入力欄を表示（URL、タイトル、公開状態など）
- ツリーコンテンツのエンティティのオプション入力欄を表示（アイキャッチ、作成者、レイアウトテンプレートなど）
- 関連コンテンツの表示と作成
- その他情報の表示（コンテンツID、実体IDなど）

フォームから送信されたデータは、エンティティ化して、対象コンテンツのテーブルにて保存します。そうすると `content` は、テーブルに追加した BcContentsBehavior によって自動的に保存します。

```php
$blogContent = $blogContentsTable->patchEntity(
    $blogContentsTable->get($id), 
    $this->getRequest()->getData
);
$blogContentsTable->save($blogContent);
```

 
## フロントページ表示機能の実装
フロントページは、コントローラーで、`BcFrontAppController` を継承して実装しますが、タイトルや説明文、パンくずなど、ツリーコンテンツのエンティティによる機能を自動実装するために、`BcFrontContentsComponent` を追加します。

```php
class BlogController extends BcAdminAppController
{
    public function initialize(): void
    {
        parent::initialize();
        $this->loadComponent('BaserCore.BcFrontContents');
    }

    public function index()
    {
    
    }
}
```

なお、現在のページに関連するツリーコンテンツ関連の情報は次のようにして取得できます。

```php
// 実体ID（ブログコンテンツの場合、ブログコンテンツID）
$entityId = $this->getRequest()->getParam('entityId');
// 現在の Content エンティティ
$currentContent = $this->getRequest()->getAttribute('currentContent');
// 現在の Site エンティティ
$currentSite = $this->getRequest()->getAttribute('currentSite');
```

### コンテンツ情報の参照
フロントサイドでは、リクエスト情報から現在のページのコンテンツ情報とサイト情報を取得できます。
```php
$content = $this->getRequest()->getAttribute('currentContent');
$site = $this->getRequest()->getAttribute('currentSite');
```

ただしコンテンツ管理対象のコンテンツのページではなく、そこにぶら下がる子コンテンツにおいて参照できるようにする場合には工夫が必要です。  
次のように `ContentsService` を利用してリクエストにセットする必要があります。
そうすると上記と同様に `getAttribute` メソッドで取得できるようになります。

```php
$contentsService = $this->getService(ContentsServiceInterface::class);
$request = $contentsService->setCurrentToRequest(
    'BcBlog.BlogContent',   // コンテンツ管理に定義しているコンテンツ名
    $blogContentId,         // コンテンツに紐づくエンティティの主キー
    $this->getRequest()     // 現在のリクエスト
);
```

### パンくず表示における注意点
`BcFrontContentsComponent` を読み込んだ場合、パンくずを自動生成してくれますが、コンテンツ管理対象のコンテンツにぶら下がる子コンテンツにおいて、
コンテンツ管理対象のコンテンツを親としてパンくずに配置して欲しい場合があります。

例えば、ブログ記事において、ブログコンテンツのタイトルを親として配置したい場合などです。

```shell
HOME > NEWS > 記事タイトル 
````

この場合、`BcFrontContentsComponent` を読み込む際に、設定を追加する事で、上記の内容を実現する事ができます。

```php
$this->loadComponent('BaserCore.BcFrontContents', ['viewContentCrumb' => true]);
```

 
## プレビュ機能ーの実装
プレビュー機能は、非公開状態や、保存前の状態にて、編集画面内に入力した内容での、フロントページの表示を確認する事ができます。  
プレビュー対象のURLは、コンテンツマネージャーAPIが生成するURLを自動的に設定します。

実際の実装方法については、[プレビュー機能設計書](../common/preview) を参考にします。

 
## コピ機能ーの実装
コピー機能は、ツリーインターフェイスから AJAXで呼び出されるため、Web APIとして実装します。

`$this->getRequest->getData()` の中に次の配列を送信します。

- parent_id：コピー元の親のコンテンツID
- title：コピー後の仮のタイトル
- site_id：コピー元のサイトID
- content_id：コピー元のコンテンツID
- entity_id：コピー元の実体ID

こちらの情報元に、コピー処理を実装します。なお、ツリーコンテンツのコピーも実装が必要です。

ツリーコンテンツのエンティティを生成する場合は、最低限次のフィールドを含めます。

- name：URL上でのコンテンツ名
- parent_id：親のコンテンツID
- title：タイトル
- author_id：作成者（コピー実施時のログインユーザーIDにする）
- site_id：サイトID
- description：説明文
- eyecatch：アイキャッチ

保存の際は、新規登録と同様の構成でエンティティ化して対象コンテンツのテーブルにて保存します。そうすると `content` は、テーブルに追加した BcContentsBehavior によって自動的に保存します。

```php
$blogContent = $blogContentsTable->newEntities([
        'description' // ブログコンテンツのフィールド
        'content' => [  // ツリーコンテンツ
            'name' => $name,
            'parent_id' => $newParentId,
            'title' => $newTitle,
            'author_id' => $newAuthorId,
            'site_id' => $newSiteId,
			'description' => $data->content->description,
			'eyecatch' => $data->content->eyecatch
        ]
    ]   
);
$blogContentsTable->save($blogContent);
```

### アイキャッチのコピー方法
未実装

### サイト間コピー時向けたコンテンツフォルダ生成
コピー処理は、一覧からだけでなく、コンテンツ編集画面の関連コンテンツ部分のサイト間コピー機能から利用される場合があります。  
その際、関連サイトの同階層にコンテンツフォルダが存在しないとエラーとなります。  
それに備え、保存前に同階層にコンテンツフォルダがあるかを確認し、なければ生成しておく必要があります。

`ContentsTable::copyContentFolderPath()` を利用します。このメソッドは新しくコンテンツフォルダを作成した場合も
作成しなかった場合も適切な親となるコンテンツフォルダのIDを返却します。

```php
// ContentsTable::copyContentFolderPath(string $url, int $newSiteId)
// 例）
if ($oldSiteId !== $newSiteId) {
    $newBlogContet->content->parent_id = $this->Contents->copyContentFolderPath($oldBlogContent->content->url, $newSiteId);
}
```

Web APIの返却値として、`content`、`message`、`errors` を返却する事で、ツリー構造インターフェイスが正常に動作します。

```php
$this->set([
    'content' => $blogContent->content,
    'message' => $message,
    'errors' => $blogContent->getErrors()
]);
$this->viewBuilder()->setOption('serialize', [
    'content', 
    'message', 
    'errors'
]);
```

 
## 物理削除機能の実装
ゴミ箱に入れたコンテンツは、ゴミ箱を空にする事で物理的な削除となりますが、その際の処理に備え、物理削除機能を実装しておきます。

コンテンツマネージャーAPIは、まず、サービスクラスが提供されているかを確認し、なければ、テーブルクラスの削除を試みます。
それでもなければ、`ContentsService::hardDelete()` を実行します。

```php
// サービスクラスの削除メソッドのの命名規則
{PluginName}\Service\{TableName}ServiceInterface::delete(int $entityId): bool
// テーブルクラスの命名規則
{PluginName}\Model\Table\{TableName}Table::delete(Content $entity): bool
```

削除処理のカスタマイズを行う場合は、Table::delete() をオーバーライドして実装するか、サービスクラスを実装します。

なお、ツリーコンテンツ側の物理削除は、テーブルに追加した `BcContentBehavior` が自動的に行います。
　
