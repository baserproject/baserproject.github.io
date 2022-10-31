# マイグレーション方針

baserCMS４で利用しているCakePHP2 を CakePHP4 に移行するための方針です。  
メンテナンス性の高いコードを実現するためにもご協力お願いします。

　
## 共通

### File / Folder の取り扱い
CakePHP4 から、File、Folder クラスは非推奨となり、SplFileInfo、SplFileObject の利用が推奨されていますが、
baserCMSでは利用箇所が多いため、一旦、そのまま利用してください。

### クラスメンバー変数へのアクセス
メンバー変数への直接アクセスはせず、できる限りセッター、ゲッターを配置するようにしてください。

### コメントヘッダー
- クラスのコメントヘッダーの `@package` は削除します。namespace を記述するようになったためです。

### 管理画面のカレントサイト
管理画面ではツールバーで現在のサイトを切り替える事ができるようになりました。  
そのサイトのデータは次のコードで取得します。

```php
// 例）コントローラーの場合
$site = $this->getRequest()->getAttributes('currentSite');
```
`BcAdminMiddleware` で設定しています。

### フロントページのカレントコンテンツとカレントサイト
baserCMS4までは、`$this->request->params['Content']` で取得していましたが、次のコードに変更となりました。

```php
$content = $this->getRequest()->getAttributes('currentContent');
$site = $this->getRequest()->getAttributes('currentSite');
```
`BcContentsRoute` で確定し、`BcFrontMiddleware` で設定しています。

　
## コントローラー

### 管理画面のコントローラー
`BcAdminAppController` を継承する事で、フォーム認証が実装され、管理画面用のテーマが適用されます。

### フロントページのコントローラー
`BcFrontAppController` を継承する事で、フロントページ用のテーマが適用されます。

### APIのコントローラー
`BcApiController` を継承する事で、JWT認証が実装されます。


### サービスへの移行
ファットコントローラーを防ぐため、ビジネスロジックはサービスへの移行を行います。  
サービスの受取は、DIにより引数に注入する前提としインターフェイスを指定します。

```php
// URLよりのパラメーターは、サービスクラスの次の引数にセットされる
// /baser/admin/baser-core/utilities/log_maintenance/delete
// 上記URLの場合、delete が $mode にセットされる
public function log_maintenance(
    UtilitiesServiceInterface $service,
    UtilitiesAdminServiceInterface $adminService,
    string $mode = '')
{
  
}
```
#### テーブルへの直接アクセス不可
テーブルへは直接アクセスしないようにし、サービスを経由させるようにします。

#### フロントページの公開制限について
公開状態などによる表示制限は、Service クラスでなく、Controller で制御するようにします。  
Service クラスではパラメーターを定義し全て受け入れるように実装します。

```php
// コントローラーのメソッド例
public function view(ContentLinksServiceInterface $service)
{
    $contentLink = $service->get(
        $this->request->getParam('entityId'),
        ['status' => 'publish']
    );
    $this->set(compact('contentLink'));
}

// サービスのメソッド例
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
        'contain' => ['Contents' => ['Sites']],
        'conditions' => $conditions
    ]);
}
```

### AjaxのAPIコントローラーへ移行
Ajaxのリクエスト対象の処理は、API用のコントローラーに移行し、戻り値をJSON化してください。
どうしてもHTMLレンダリングが必要な場合のみ、Admin 用のコントローラーに配置します。

[その他、コントローラーの注意点はこちら](development/migration/controller)

　
## モデル
### サービスへの移行
CakePHP2系のモデルはテーブルへと移行となりますが、ファットモデルを防ぐため、
移行するメソッドのうち、できるだけ対象となるエンティティの処理だけをテーブルにまとめあげ、
外部のテーブルとの連携した処理を行うメソッドは、サービスへの移行を検討します。

### 引数
引数はリクエストを直接受け取るような事をせず、シグネチャをはっきりさせ仕様を明確化します。

### getControlSource() メソッド
サービスに移行します。

[その他、モデルの注意点はこちら](development/migration/model)

　
## サービス
### テスタブルなコードにする
クラスには、テーブル以外のデータ（プロパティ）を持たせず、各メソッドについて簡潔な処理となるようにします。

### サービスの初期化
直接 new する事はせず、Container を経由して取得します。また、サービスの指定は、Interface を指定します。テストの場合も同様です。

DIコンテナを利用して、Interface でサービスクラスを取得する理由は、サービスクラスをいつでも他のクラスに切り替える事ができる事を目的としており、テストもそのまま利用できる事がメリットとなります。Interfaceを利用しなければそれが無意味になってしまいますので注意してください。

#### コントローラーでの指定
アクションメソッドの引数に定義します。複数定義する事ができます。
```php
public function index(
    UsersServiceInterface $service, 
    SiteConfigsServiceInterface $siteConfigsService,
    int $id) {
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
コアプラグインについては、各プラグインではテンプレートは保有せず、全てテーマ内に配置します。
- フロントエンド（BcFront）
- 管理画面（BcAdminThird）

それ以外のプラグインは、各プラグインでテンプレートを保持するようにします。

### ビューで利用するデータの取得
ビューのテンプレートは、できるだけシンプルにするため、データの生成処理などを書かず、コントローラーかもしくはヘルパより取得します。

#### コントローラーから取得
コントローラー内の処理が煩雑にならないよう、対象のサービスクラスを継承した、データ取得用のサービスクラスを準備し、一括で取得しビューに引き渡すようにしましょう。

データ取得用のサービスクラスの名称は、管理画面用の場合は、末尾に `AdminService` を付け、フロントエンド用の場合は、`FrontService` を付けます。

```php
UsersAdminService
UsersFrontService
```
取得用のメソッド名は、先頭に `getViewVarsFor` を付けて統一性を保つようにします。

```php
getViewVarsForAdd
```

```php
// ユーザー管理の新規登録画面の場合
public function add(UsersAdminServiceInterface $adminService)
{
    $this->set($adminService->getViewVarsForAdd());
}
```

#### ヘルパから取得

対象画面でしか利用しないようなデータは、専用のヘルパを準備します。

ヘルパの名称は、管理画面用の場合は、末尾に `AdminHelper` を付け、フロントエンド用の場合は、`FrontHelper` を付けます。

```php
UsersAdminHelper
UsersFrontHelper
```


### ローディング表示について
何かしらの処理を実行し時間がかかる場合には必ずローディングを表示します。  
`$.bcUtil.showLoader()` を利用することでローディングが表示できますが、対象物に `bca-loading` クラスを付与する事で簡単にローディングを表示できます。

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

[その他、ビューの注意点はこちら](development/migration/view)

　
## ヘルパ
[ヘルパーにおける注意点](../development/migration/helper) を参照してください。

　
## ルーティング
[ルーティングにおける注意点](../development/migration/routing) を参照してください。

　
## リクエスト関連
[リクエスト関連における注意点](../development/migration/request) を参照してください。

　
## セッション関連
[セッション関連における注意点](../development/migration/session) を参照してください。

　
## データベース
[データベースにおける注意点](../development/migration/database) を参照してください。

　
## プラグイン
[プラグインにおける注意点](../development/migration/database) を参照してください。

　
## セキュリティコンポーネント
[セキュリティコンポーネントにおける注意点](../development/migration/security) を参照してください。

　　
## Javascript
### 外部ファイル化
全ての Javascript は、画面ごとに外部ファイル化し、webpack で圧縮します。  
[Javascriptの作成](../development/frontend/javascript) についてを参照してください。

　
## CSS
### 外部ファイル化
全ての CSS は、画面ごとに外部ファイル化し、sass で作成してコンパイルします。  
[CSSの作成](../development/frontend/css)についてを参照してください。

　
## ユニットテスト

### 既存のテストが存在する場合
既存のテストが存在する場合は、大きな仕様変更がない限り、既存のテストが動作するように調整します。  
既存のテストの動作しない状態で移行する事はバグを発生させている事と同じです。

### フィクスチャ
CakePHP4.3 より、フィクスチャマネージャーが非推奨になりました。  
新しく作成するコードは、フィクスチャマネージャーではなく、フィクスチャファクトリーを利用して作成します。

参考：[フィクスチャの利用](../test/fixture)
　
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

　
### コメントヘッダー
クラスメソッドについては、phpDocumentor でドキュメントを自動生成する前提とします。
マークダウン記法を前提として、次のルールに則って分かりやすいドキュメントとなるようお願いします。

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

そのほか、テストに関する情報はこちら
- [ユニットテスト](../test/unittest)
- [フィクスチャの利用](../test/fixture)
- [テストカバレッジ](../test/coverage)
- [GitHubActions](../test/github_actions)

　
　
