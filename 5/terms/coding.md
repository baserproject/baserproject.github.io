# コーディング規約

基本的には、 [PSR-12 coding style guide](https://www.php-fig.org/psr/psr-12/){:target="_blank"} および、 [CakePHP コーディング規約 - 4.x](https://book.cakephp.org/4/ja/contributing/cakephp-coding-conventions.html) に従って頂くものとし、加えて次のルールにも従ってください。

## 共通


### メソッド間
メソッドとメソッドの間では１行の空行を入れます。

## コメントヘッダー
### ファイルヘッダー

各ファイルの最上位に記述します。
```php
/**
 * baserCMS :  Based Website Development Project <https://basercms.net>
 * Copyright (c) NPO baser foundation <https://baserfoundation.org/>
 *
 * @copyright     Copyright (c) NPO baser foundation
 * @link          https://basercms.net baserCMS Project
 * @since         5.0.0
 * @license       http://basercms.net/license/index.html MIT License
 */
```
 
### クラスヘッダー

クラスの先頭にはクラスヘッダーをつけます。
```php
/**
 * Class SitesController
 */
class SitesController extends BcAdminAppController {}
```

### メソッドヘッダー

メソッドの先頭にはメソッドヘッダーをつけます。
```php
/**
 * サイト一覧を表示する
 * 
 * @param SiteManageServiceInterface $siteManage
 * @checked
 * @noTodo
 * @unitTest
 */
public function index(SiteManageServiceInterface $siteManage){}
```

### ドキュメントを自動生成
クラスメソッドについては、phpDocumentor でドキュメントを自動生成する前提とします。
メソッドヘッダーは、マークダウン記法を前提として、次のルールに則って分かりやすいドキュメントとなるようお願いします。

- １行目をタイトルとし、詳細内容との間には１行空けます。
- 段落ごとに１行空け、見やすくなるように工夫します。
- 見出しは `###` からとします。
- 詳細内容とアノテーションの間には１行空けます。
- `@param` における `$options` のように複数のオプションを持つ場合は、オプションキーと詳細を記述します。その際、初期値の設定がある場合は明記します。
 
```php
// 例
/**
 * プラグインをアップロードする
 *
 * POSTデータにて キー`file` で Zipファイルをアップロードとすると、
 * /plugins/ 内に、Zipファイルを展開して配置する。
 *
 * ### エラー
 * post_max_size　を超えた場合、サーバーに設定されているサイズ制限を超えた場合、
 * Zipファイルの展開に失敗した場合は、Exception を発生。
 *
 * ### リネーム処理
 * 展開後のフォルダー名はアッパーキャメルケースにリネームする。
 * 既に /plugins/ 内に同名のプラグインが存在する場合には、数字付きのディレクトリ名（PluginName2）にリネームする。
 * 数字付きのディレクトリ名にリネームする際、プラグイン内の Plugin クラスの namespace もリネームする。
 *
 * @param array $postData
 * @param array $options
 *  - key: キーの名称（初期値: null）
 *  - excludes: 除外対象（初期値: []）
 * @return string Zip を展開したフォルダ名
 * @checked
 * @noTodo
 * @throws BcException
 */
```

## マーキング
クラスメソッドやビューファイルの実装時、および新規ファイル追加時には、ヘッダーコメントにアノテーションでマーキングをします。

```
@checked : コードの精査が完了している
@noTodo : Todo が発生しない
@unitTest : unitTest が実装済である
```

これにより進行管理表に自動反映し、進捗状況をわかるようにしています。

- [baserCMS-進行管理](https://docs.google.com/spreadsheets/d/1EGxMk-dy8WIg2NmgOKsS_fBXqDB6oJky9M0mB7TADEk/edit#gid=938641024)

なお、クラスの冒頭にアノテーションのインポートが必要となりますので忘れないようにしてください。

```php
use BaserCore\Annotation\UnitTest;
use BaserCore\Annotation\NoTodo;
use BaserCore\Annotation\Checked;
```
　
マーキングの例
```php
// 例）
use BaserCore\Annotation\UnitTest;
use BaserCore\Annotation\NoTodo;
use BaserCore\Annotation\Checked;

class BcBaserHelper extends Cake\View\Helper 
{
    /**
     * コンテンツを特定する文字列を出力する
     *
     * URL を元に、第一階層までの文字列をキャメルケースで取得する
     * ※ 利用例、出力例については BcBaserHelper::getContentsName() を参照
     *
     * @param bool $detail 詳細モード true にした場合は、ページごとに一意となる文字列をキャメルケースで出力する（初期値 : false）
     * @param array $options オプション（初期値 : array()）
     *    ※ オプションの詳細については、BcBaserHelper::getContentsName() を参照
     * @return void
     * @checked
     * @noTodo
     */
```

なお、 baserCMS 進行管理に、メモを反映したい場合には、 Note アノテーションが利用できます。
```php
// 例
use BaserCore\Annotation\Note;

class BcBaserHelper extends Cake\View\Helper 
{
    /**
     * Contents Before Move
     *
     * @note(value="固定ページを実装するまではTODO消化できない")
     */
```


## CakePHPのコード修正時のコメント
CakePHPのコードを修正するには、[CakePHPのクラスを上書きする](../core/index#cakephpのクラスを上書きする) を参考に書き換えますが、その際、次のルールに則り、コメントによるマーキングを行ってください。

また、修正理由はできるだけ細かく記載をします。  
これは、CakePHPがバージョンアップした際、baserCMSをそのCakePHPのバージョンに対応する際の重要な手がかりとなる為です。

### コードを追加する場合
```php
// CUSTOMIZE ADD YYYY/MM/DD 修正者名
// 修正内容の説明
// >>>
追加コード
// <<<
```

### コードを編集する場合
```php
// CUSTOMIZE MODIFY YYYY/MM/DD 修正者名
// 修正内容の説明
// >>>
// 元のコード
// ---
修正後のコード
// <<<
```

### コードを削除する場合
```php
// CUSTOMIZE DELETE YYYY/MM/DD 修正者名
// 修正内容の説明
// >>>
// 元のコード
// <<<
```

## リクエスト
### データ送信
データの変更を伴う処理について、原則 POST送信を要求するものとします。
### 検索クエリ
検索を伴う処理について、原則 GET送信を要求するものとします。

## マイグレーションファイル
マイグレーションファイルは、１テーブル１つ作成するようにしてください。  
なお、マイグレーションファイルの命名規則は次のとおりです。

【命名規則】

- テーブル作成：Create{TableName}
- テーブル削除：Drop{TableName}
- フィールド追加：Add{FieldName}To{TableName}
- フィールド変更：Change{FieldName}On{TableName}
- フィールド削除：Remove{FieldName}From{TableName}

## コントローラー

### プレフィックスと配置
- **フロントエンド**：フロントエンド用のコントローラーは、プレフィックスなしを前提として、Controller フォルダ直下に配置します。
- **管理画面**：管理画面用のコントローラーは、プレフィックスを `Admin` として、`Controller/Admin` フォルダに配置します。
- **API**：API用のコントローラーは、プレフィックスを `Api` として、`Controller/Api` フォルダに配置します。

なお、フロントエンドのコントローラーについて、プレフィックスを`Front` としない理由は、プレフィックスを付与した場合、テンプレートの配置においても、`templates/Front` に配置せなばならず、テーマ制作の際にわかりづらくなるためです。

　
### 親コントローラーの継承
#### 管理画面のコントローラー
`BcAdminAppController` を継承します。  
フォーム認証が実装され、管理画面用のテーマが適用されます。

#### フロントページのコントローラー
`BcFrontAppController` を継承します。  
フロントページ用のテーマが適用されます。

#### baser APIのコントローラー
`BcApiController` を継承します。  
戻り値がJSONとなります。

#### baser Admin APIのコントローラー
`BcAdminApiController` を継承します。  
戻り値がJSONとなり、JWT認証が実装されます。

　
### サービスの利用
ファットコントローラー、ファットモデルを防ぐため、ビジネスロジックはサービスに実装します。サービスの受取は、DIにより引数に注入する前提としインターフェイスを指定します。

また、コントローラーからテーブルへはできるだけ直接アクセスしないようにし、サービスを経由させるようにします。

```php
public function edit(UsersInterface $service,)
{
    $user = $service->get();
}
```

### Web API

#### 返却値
APIの返却値については、新規登録、更新、削除においても、基本的に対象リソースのエンティティを返却します。  
また、`message` と `errors` も一緒に返却するようにしてください。  
なお、コンテンツ管理機能を実装している場合は、対象エンティティに関連づくコンテンツエンティティも返却します。

```php
$this->set([
    'page' => $page, // 対象リソースのエンティティ
    'content' => $page->content, // 関連づくコンテンツ
    'message' => $message, // 通知メッセージ
    'errors' => $page->getErrors() // バリデーションエラーの際の各フィールドのエラー情報
]);
$this->viewBuilder()->setOption('serialize', [
    'page',
    'content',
    'message',
    'errors'
]);
```
　
#### baser API の公開制限について
公開状態などによる表示制限は、Service クラスでなく、Controller で制御するようにします。  
Service クラスではパラメーターによって処理を切り替えれるように実装します。

```php
// コントローラーのメソッド例
// status パラメーターについてはアクセスを拒否し、publish を強制的に適用する
public function view(ContentLinksServiceInterface $service)
{
    $queryParams = $this->getRequest()->getQueryParams();
    if(isset($queryParams['status'])) {
        if(!$this->Authentication->getIdentity()) throw new ForbiddenException();
    }
    $contentLink = $service->get(
        $this->request->getParam('entityId'),
        array_merge(['status' => 'publish'], $queryParams)
    );
    $this->set(compact('contentLink'));
}

// サービスのメソッド例
// パラメーターによって処理を切り替える
public function get($id, $options = [])
{
    $options = array_merge([
        'status' => ''
    ], $options);
    $conditions = [];
    if($options['status'] === 'publish') {
        $conditions = $this->ContentLinks->Contents->getConditionAllowPublish();
    }
    return $this->ContentLinks->get($id, [
        'conditions' => $conditions
    ]);
}
```

#### データベース操作の例外処理

データベース操作時の例外では、`PersistenceFailedException` と `Throwable` を利用して、例外を漏れなくキャッチします。  
`BcException` では、全ての例外はキャッチできません。ただし、処理側で意図した上で `BcException` を投げる場合もありますので、その際は、都度、適した例外処理を行います。

```php
try {
    // 成功
    $service->create($this->getRequest()->getData());
    $message = __d('baser', 'XXX を追加しました。');
} catch (PersistenceFailedException $e) {
    // 入力エラーの場合、PersistenceFailedException が throw される
    // $e->getEntity() で、エラー情報付きのエンティティを取得する
    // 想定内のエラーとしてステータスを 400 とする
    $this->setResponse($this->response->withStatus(400));
    $entity = $e->getEntity();
    $message = __d('baser', "入力エラーです。内容を修正してください。");
} catch (Throwable $e) {
    // 何が起きているか分からない場合は、Throwable でキャッチする
    // 想定外のエラーとしてステータスを 500 とする
    $this->setResponse($this->response->withStatus(500));
    $message = __d('baser', 'データベース処理中にエラーが発生しました。' . $e->getMessage());
}
```

### AJAXの実装について
基本的に、Ajaxのリクエスト対象の処理は、API用のコントローラーとして作成し、JSONとして戻り値作成します。
どうしても、HTMLレンダリングの結果を戻り値として必要な場合のみ、通常のコントローラーに配置します。


## テーブル
テーブルはレポジトリとして利用し、ビジネスロジックはサービスクラスに実装します。
対象テーブルに関する処理だけをテーブルに実装し、外部のテーブルとの連携した処理は、サービスに実装してください。


## サービス
### テスタブルなコードにする
クラスには、テーブル以外の状態（プロパティ）をできるだけ持たせず、各メソッドについて簡潔な処理となるようにします。

### サービスの初期化
直接 new する事はせず、Container を経由して取得します。また、サービスの指定は、Interface を指定します。テストの場合も同様です。

DIコンテナを利用して、Interface でサービスクラスを取得する理由は、サービスクラスをいつでも他のクラスに切り替える事ができる事を目的としており、テストもそのまま利用できる事がメリットとなります。Interfaceを利用しなければそれが無意味になってしまいますので注意してください。

#### コントローラーでの指定
アクションメソッドの引数に定義します。複数定義する事ができます。
```php
// URLパラメーターは、サービスクラスの次の引数にセットされます
// /baser/admin/baser-core/users/index/1
// 上記URLの場合、1 が $id にセットされる
public function index(
    UsersServiceInterface $service, 
    SiteConfigsServiceInterface $siteConfigsService,
    int $id) 
{
}
```
#### それ以外での指定
BcContainerTrait を定義し、呼び出し箇所にて、`$this->getService()` を利用します。
```php
class Sample {
    use BcContainerTrait;
    public function sample()
    {
        $service = $this->getService(UsersServiceInterface::class);
    }
}
```

## ビュー
### テンプレートの配置
コアプラグインについては、各プラグインではテンプレートは保有せず、全てデフォルトテーマ用のプラグイン内に配置します。
- フロントエンド（BcFront）
- 管理画面（BcAdminThird）

それ以外のプラグインは、各プラグインでテンプレートを保持するようにします。

### テンプレート名
テンプレート名はアクション名とできるだけ合わせます。
共通部分がある場合はエレメント化して、それぞれで読み込むようにします。
これはIDEなどで、アクション名でテンプレートを探しやすいようにするためです。

例）アクション名が add / edit の場合
- add.php と edit.php を配置
- 共通部分をエレメント form.php する
- add.php と edit.php より form.php を読み込む

### ビューで利用するデータの取得
ビューのテンプレートは、できるだけシンプルにするため、データの生成処理は直接書かず、コントローラーから引き渡すか、もしくはヘルパより取得します。

#### コントローラーから取得
コントローラー内の処理が煩雑にならないよう、コントローラーの対象のサービスクラスを継承した、データ取得用のサービスクラスを準備し、一括で取得し、ビューに引き渡すようにします。

データ取得用のサービスクラスの名称は、管理画面用の場合は、末尾に `AdminService` を付け、フロントエンド用の場合は、`FrontService` を付けます。

```php
// 例
UsersAdminService
UsersFrontService
```
取得用のメソッド名は、対象のアクション名の先頭に `getViewVarsFor` を付けて統一性を保つようにします。

```php
// ユーザー管理の新規登録画面の場合
// UsersAdminService
public function getViewVarsForAdd()
{
    return [
        'a' => 1,
        'b' => 2
    ];
}
// UsersController
public function add(UsersAdminServiceInterface $adminService)
{
    $this->set($adminService->getViewVarsForAdd());
}
```

### ローディング表示について
何かしらの処理を実行し時間がかかる場合には必ずローディングを表示します。  
Javascript の処理で、`$.bcUtil.showLoader()` を利用することでローディングが表示できますが、対象物に `bca-loading` クラスを付与する事で簡単にローディングを表示できます。

```php
<?php echo $this->BcAdminForm->button(__d('baser', '保存'), [
  'div' => false,
  'class' => 'bca-btn bca-actions__item bca-loading',
  'data-bca-btn-type' => 'save',
  'data-bca-btn-size' => 'lg',
  'data-bca-btn-width' => 'lg'
]) ?>
```
保存ボタンをクリックして画面遷移中にローディングを表示するだけでよいなど、ローディングの非表示処理が必要でない場合は、`bca-loading` を利用してください。

### フォームについて
#### 検索フォーム
検索処理は GET で実装します。  

管理画面の場合は、 `$this->BcAdminForm->create()` のオプションにて `novalidate => true` を設定し、ボタンのタグを次に統一します。
```php
<div class="bca-search__btns-item">
    <?php echo $this->BcAdminForm->button(__d('baser', '検索'), [
        'id' => 'BtnSearchSubmit', 
        'class' => 'bca-btn', 
        'data-bca-btn-type' => 'search'
    ]) ?>
</div>
<div class="bca-search__btns-item">
    <?php echo $this->BcAdminForm->button(__d('baser', 'クリア'), [
        'id' => 'BtnSearchClear', 
        'class' => 'bca-btn', 
        'data-bca-btn-type' => 'clear'
    ]) ?>
</div>
```

#### データ登録、変更フォーム
データの変更を伴う処理はPOST送信とします。

#### データの変更を伴うリンク
リンクにおいてもデータの変更を伴う場合は、POST送信とし、postLink() を利用します。

```php
<?= $this->BcAdminForm->postLink('削除', ['action' => 'delete'])>
```

フォームの中に配置する場合、フォームのネストができないため、オプションに `'block' => true` を指定し、フォームの外側に次のコードを忘れないように記述します。

```php
<?= $this->BcAdminForm->create() ?>
<?= $this->BcAdminForm->postLink(
    '削除', ['action' => 'delete'], 
    ['block' => true]
)>
<?= $this->BcAdminForm->end() ?>
<?= $this->fetch('postLink') ?>
```
　 
## Javascript
### 外部ファイル化
全ての Javascript は、画面ごとに外部ファイル化し、webpack で圧縮します。  
[Javascriptの作成](../core_theme/javascript) についてを参照してください。

 
## CSS
### 外部ファイル化
全ての CSS は、画面ごとに外部ファイル化し、sass で作成してコンパイルします。  
[CSSの作成](../core_theme/frontend/css)についてを参照してください。

 
## ユニットテスト

### フィクスチャ
CakePHP4.3 より、フィクスチャマネージャーが非推奨になりました。  
新しく作成するコードは、フィクスチャマネージャーではなく、フィクスチャファクトリーを利用して作成します。

 
### サービスクラスのテスト
`BcContainerTrait` を利用して、インターフェイスを指定して初期化します。

```php
// 例
class SampleTest
{
    use BcContainerTrait;
    
    public function setUp(): void
    {
        parent::setUp();
        $this->SampleService = $this->getService(SampleServiceInterface::class);
    }
}
```

### setUp メソッドの利用
setUp メソッドは、クラス内の全てのテストで呼び出されるので、処理時間を短縮するため、できるだけ処理を少なくします。

そのため、初期化などを行う対象は、クラス内のほとんどのメソッドから呼び出されるものだけとしてください。

一つのメソッドからしか呼び出されないようなプロパティは、テストメソッドの中で記述してください。

### テストのスキップ
全てのメソッドには原則ユニットテストが必要です。
その際、テストの実装がどうしても間に合わない場合は、 `markTestIncomplete()` を記載しておいてください。その際、アノテーションで、`@unitTest` を付けてはいけません。

```php
$this->markTestIncomplete('Not implemented yet.');
```

 
