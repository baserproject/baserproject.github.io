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

## 用語
コンテンツマネージャーでは、管理対象のコンテンツのデータと、親IDやツリー上の位置、タイトル、URLなどのツリー情報を含むコンテンツのデータを１対１で紐付けて管理します。

その際、次の用語で呼ぶことにします。

- **管理対象コンテンツ**: ツリー構造で管理したい、自身がプラグインで実装するコンテンツ（DBテーブルは独自で実装する）
- **ツリーコンテンツ**: ツリー情報を含むコンテンツ（DBテーブルは `contents` を利用）
 
## 開発の流れ

- [ツリーインターフェイスへの表示](#ツリーインターフェイスへの表示)
- [新規登録機能の実装](#新規登録機能の実装)
- [編集機能の実装](#編集機能の実装)
- [フロントページ表示機能の実装](#フロントページ表示機能の実装)
- [プレビュー機能の実装](#プレビュー機能の実装)
- [コピー機能の実装](#コピー機能の実装)
- [物理削除機能の実装](#物理削除機能の実装)

 
## ツリーインターフェイスへの表示
### 設定ファイルを準備

作成しているプラグイン内の `config/setting.php` に、コンテンツマネージャーに認識させるための設定を `BcContents.items` 内に記述します。  
`routes` 内には、各アクションについてのリンクを配列形式で定義します。  

なお、削除については、「ゴミ箱に入れる」としてCMS側が論理削除機能を提供しますが、別途、物理削除機能の実装が必要となります。

```php
// /plugins/YourPlugin/config/setting.php
return [
    'BcContents' => [
        'items' => [
            // プラグイン名
            'BcBlog' => [ 
                // 提供するコンテンツ名
                'BlogContent' => [ 
                    // 提供するコンテンツのタイトル
                    'title' => 'ブログ', 
                    // 複数設置可能かどうか
                    'multiple' => true, 
                    // プレビュー機能を提供するかどうか
                    'preview' => true, 
                    // アイコンのクラス名
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
                        // 新規追加（必須、Ajaxとして実装します）
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
                        // コピー（Ajaxとして実装します）
                        'copy' => [
                            'prefix' => 'Api',
                            'plugin' => 'BcBlog',
                            'controller' => 'BlogContents',
                            'action' => 'copy'
                        ],
                        // ダブルクリック時の遷移先
                        // 定義がない場合は編集画面に遷移します
                        'dblclick' => [
                            'prefix' => 'Admin',
                            'plugin' => 'BcBlog',
                            'controller' => 'BlogPosts',
                            'action' => 'index'
                        ]
                    ]
                ]
            ]
        ]
    ]
]
```

 
### アイコンのCSSを定義
[管理画面CSS自動読み込み機能](./admin_css_auto_load) を参考に、アイコンのCSSを定義します。  
ない場合は、CMSのデフォルトのアイコンとなります。

```css
// ツリー上のアイコン
.jstree-proton .bca-icon--blog {
    color: #7faa00;
}
// 右クリックメニューのアイコン
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
新規登録機能は、ツリーインターフェイスからAJAXとして呼び出されるため、Web APIとして実装しますが、まず、対象コンテンツのテーブルクラスと、ContentsTable を紐付けます。

### BcContentsBehaviorの定義
管理対象コンテンツのテーブルクラスの `initialize` メソッドで、`BcContentsBehavior` を追加します。

```php
// plugins/YourPlugin/src/Model/Table/YourTable.php
public function initialize(array $config): void
{
    parent::initialize($config);
    $this->addBehavior('BaserCore.BcContents');
}
```

### コントローラーの定義
コントローラーは、`BcApiController` を継承します。

```php
// plugins/YourPlugin/src/Controller/Api/Admin/YourController.php
use BaserCore\Controller\Api\BcApiController;
class BlogContentsController extends BcApiController
{
    public function add()
    {
    
    }
}
```

上記メソッドを呼び出す際、`$this->getRequest->getData()` の中に `content` をキーとして次の配列を送信します。

- **parent_id**: 親のコンテンツID
- **title**: 登録時に入力したタイトル
- **plugin**: プラグイン名
- **type**: コンテンツタイプ
- **site_id**: サイトID
- **alias_id**: エイリアスID（空）
- **entity_id**: 実体ID（空）

上記データは、管理対象コンテンツのデータをエンティティ化する際にそのまま含めておきます。そうすると 管理対象コンテンツを保存する際、`content` 内のデータは、テーブルクラスに追加した BcContentsBehavior によって、`contents` テーブルに自動的に保存します。

```php
$blogContent = $blogContentsTable->newEntities($this->getRequest()->getData);
$blogContentsTable->save($blogContent);
```

We APIの返却値として、`content`、`message`、`errors` を返却する事で、ツリー構造インターフェイスが正常に動作します。

```php
// plugins/YourPlugin/src/Controller/Api/Admin/YourController.php
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
編集機能は、コントローラーで、`BcAdminAppController` を継承して、管理システム内に実装しますが、タイトルや公開状態など、`contents` テーブルへの保存機能を自動実装するために、`BcAdminContentsComponent` を追加します。

```php
// plugins/YourPlugin/src/Controller/Api/Admin/YourController.php
class BlogContentsController extends BcAdminAppController
{
    public function initialize(): void
    {
        parent::initialize();
        $this->loadComponent('BaserCore.BcAdminContents', [
            'entityVarName' => 'blogContent'
        ]);
    }

    public function edit(int $id)
    {
    
    }
}
```

`BcAdminContentsComponent` をロードする際には、`entityVarName` として、管理対象コンテンツのエンティティをビューテンプレートに引き渡すキー名を定義しておきます。

なお、`BcAdminContentsComponent` は、次の機能の自動実装を提供します。

- ツリーコンテンツのエンティティの基本入力欄を表示（URL、タイトル、公開状態など）
- ツリーコンテンツのエンティティのオプション入力欄を表示（アイキャッチ、作成者、レイアウトテンプレートなど）
- 関連コンテンツの表示と作成
- その他情報の表示（コンテンツID、実体IDなど）

フォームから送信したデータの中に、新規登録時同様、`content` キー内に、ツリーコンテンツの情報が入りますが、そのままエンティティ化して、対象コンテンツのテーブルクラスにて保存します。そうすると `content` キー内のデータは、テーブルクラスに追加した BcContentsBehavior によって自動的に保存します。

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
// plugins/YourPlugin/src/Controller/YourController.php
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

### コンテンツ情報の参照
フロントページでは、リクエスト情報から現在のページのツリーコンテンツ情報とサイト情報などを取得できます。
```php
// 実体ID（ブログコンテンツの場合、ブログコンテンツID）
$entityId = $this->getRequest()->getParam('entityId');
// 現在の Content エンティティ
$currentContent = $this->getRequest()->getAttribute('currentContent');
// 現在の Site エンティティ
$currentSite = $this->getRequest()->getAttribute('currentSite');
```

ただし管理対象コンテンツのページではなく、そこにぶら下がる子コンテンツ（例えば、ブログコンテンツにおけるブログ記事）において参照できるようにする場合には工夫が必要です。  
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
`BcFrontContentsComponent` を読み込んだ場合、パンくずを自動生成してくれますが、管理対象コンテンツにぶら下がる子コンテンツ（例えば、ブログコンテンツにおけるブログ記事）において、
管理対象コンテンツを親としてパンくずに配置して欲しい場合があります。

例えば、ブログ記事において、ブログコンテンツのタイトルを親として配置したい場合などです。

```shell
HOME > NEWS > 記事タイトル 
````

この場合、`BcFrontContentsComponent` を読み込む際に、次の設定を追加する事で、上記の内容を実現する事ができます。

```php
// plugins/YourPlugin/src/Controller/YourController.php
$this->loadComponent('BaserCore.BcFrontContents', ['viewContentCrumb' => true]);
```

 
## プレビュー機能の実装
プレビュー機能では、非公開状態や、保存前の状態にて、編集画面内に入力した内容でフロントページの表示を確認する事ができます。  
その際、プレビュー対象のURLとして、コンテンツマネージャーAPIが生成するURLを自動的に設定します。

実際の実装方法については、[プレビュー](./preview) を参考にします。

 
## コピー機能の実装
コピー機能は、ツリーインターフェイスから AJAXで呼び出されるため、Web APIとして実装します。

`$this->getRequest->getData()` の中に次の配列を送信します。

- **parent_id**: コピー元の親のコンテンツID
- **title**: コピー後の仮のタイトル
- **site_id**: コピー元のサイトID
- **content_id**: コピー元のコンテンツID
- **entity_id**: コピー元の実体ID

こちらの情報元に、コピー処理を実装します。

なお、その際、ツリーコンテンツのコピーも実装が必要です。ツリーコンテンツのエンティティを生成する場合は、`content` キーの配下に、最低限、次のフィールドを含めます。

- **name**: URL上でのコンテンツ名
- **parent_id**: 親のコンテンツID
- **title**: タイトル
- **author_id**: 作成者（コピー実施時のログインユーザーIDにする）
- **site_id**: サイトID
- **description**: 説明文
- **eyecatch**: アイキャッチ

保存の際は、新規登録と同様の構成でエンティティ化して管理対象コンテンツのテーブルクラスにて保存します。そうすると `content` は、テーブルに追加した BcContentsBehavior によって自動的に保存します。

```php
// plugins/YourPlugin/src/Model/Table/YourTable.php
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

### サイト間コピー時のコンテンツフォルダ生成
コピー処理は、一覧からだけでなく、コンテンツ編集画面の関連コンテンツ部分のサイト間コピー機能から利用される場合があります。  
その際、関連サイトの同階層にコンテンツフォルダが存在しないとエラーとなります。  
それに備え、保存前に同階層にコンテンツフォルダがあるかを確認し、なければ生成しておく必要があります。

`ContentsTable::copyContentFolderPath()` を利用します。このメソッドは新しくコンテンツフォルダを作成した場合も
作成しなかった場合も適切な親となるコンテンツフォルダのIDを返却しますのでそちらを利用してコピー処理を実装します。

```php
// plugins/YourPlugin/src/Model/Table/YourTable.php
// 例）
if ($oldSiteId !== $newSiteId) {
    $newBlogContet->content->parent_id = $this->Contents->copyContentFolderPath(
        $oldBlogContent->content->url, 
        $newSiteId
    );
}
```

Web APIの返却値として、`content`、`message`、`errors` を返却する事で、ツリー構造インターフェイスが正常に動作します。

```php
// plugins/YourPlugin/src/Controller/Api/Admin/YourController.php
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

コンテンツマネージャーAPIは、まず、サービスクラスが提供されているかを確認し、なければ、テーブルクラスでの削除を試みます。
それでもなければ、`ContentsService::hardDelete()` を実行します。

つまり、物理削除を実装するには、Table::delete() を利用するか、サービスクラスを実装する必要があるということです。

```php
// サービスクラスの削除メソッドのの命名規則
{PluginName}\Service\{TableName}ServiceInterface::delete(int $entityId): bool
// テーブルクラスの命名規則
{PluginName}\Model\Table\{TableName}Table::delete(Content $entity): bool
```

なお、ツリーコンテンツのDBデータの物理削除は、テーブルクラスに追加した `BcContentBehavior` が自動的に行いますので実装は不要です。
　

