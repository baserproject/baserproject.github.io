# マイグレーション方針

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

### フロントのカレントコンテンツとカレントサイト
baserCMS4までは、`$this->request->params['Content']` で取得していましたが、次のコードに変更となりました。

```php
$content = $this->getRequest()->getAttributes('currentContent');
$site = $this->getRequest()->getAttributes('currentSite');
```
`BcContentsRoute` で確定し、`BcFrontMiddleware` で設定しています。

　
## コントローラー
### サービスへの移行
ファットコントローラーを防ぐため、ビジネスロジックはサービスへの移行を行います。  
サービスの受取は、DIにより引数に注入する前提としインターフェイスを指定します。

```php
// URLよりのパラメーターは、サービスクラスの次の引数にセットされる
// /baser/admin/baser-core/utilities/log_maintenance/delete
// 上記URLの場合、delete が $mode にセットされる
public function log_maintenance(
    UtilitiesServiceInterface      $service,
    UtilitiesAdminServiceInterface $adminService,
    string                         $mode = '')
{
  
}
```
### テーブルへの直接アクセス不可
テーブルへは直接アクセスしないようにし、サービスを経由させるようにします。

### AjaxのAPIコントローラーへ移行
Ajaxのリクエスト対象の処理は、API用のコントローラーに移行し、戻り値をJSON化してください。
どうしてもHTMLレンダリングが必要な場合のみ、Admin 用のコントローラーに配置します。

　
## モデル
### サービスへの移行
CakePHP2系のモデルはテーブルへと移行となりますが、ファットモデルを防ぐため、
移行するメソッドのうち、できるだけ対象となるエンティティの処理だけをテーブルにまとめあげ、
外部のテーブルとの連携した処理を行うメソッドは、サービスへの移行を検討します。
### 引数
引数はリクエストを直接受け取るような事をせず、シグネチャをはっきりさせ仕様を明確化します。
### getControlSource() メソッド
サービスに移行します。

　
## サービス
### テスタブルなコードにする
クラスには、テーブル以外のデータ（プロパティ）を持たせず、各メソッドについて簡潔な処理となるようにします。

### サービスの初期化
直接 new する事はせず、Container を経由して取得します。また、サービスの指定は、Interface を指定します。テストの場合も同様です。

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

　
## Javascript
### 外部ファイル化
全ての Javascript は、画面ごとに外部ファイル化し、webpack で圧縮します。  
[Javascriptの作成](../development/frontend/javascript) についてを参照してください。

　
## CSS
### 外部ファイル化
全ての CSS は、画面ごとに外部ファイル化し、sass で作成してコンパイルします。  
[CSSの作成](../development/frontend/css)についてを参照してください。

　
## ユニットテスト

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
