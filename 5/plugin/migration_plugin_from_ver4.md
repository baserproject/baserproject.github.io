# baserCMS４のプラグインを変換

ここでは [BcAddonMigrator](https://github.com/baserproject/BcAddonMigrator) を利用して、baserCMS４のプラグインを baserCMS５用に変換する手順を説明します。

## BcAddonMigratorプラグインについて
BcAddonMigratorプラグインは、baserCMS４から、baserCMS５への移行をサポートするプラグインです。

baserCMS５では、かなりの大きな仕様変更が入っており、完全に自動変換することはできませんが、BcAddonMigratorプラグインを利用することで、手作業で変更する負担をかなり軽減することができます。

## プラグインをZIP化する
OSの機能やツールを使って既存のプラグインをZIP化します。

## 新しい環境を準備する
既存のサイトをそのままbaserCMS５系にアップグレードすることはできません。新しい環境にbaserCMS５をインストールしておく必要があります。

- [インストールガイド](./introduce/index)

## BcAddonMigratorプラグインをインストール
[GitHub](https://github.com/baserproject/BcAddonMigrator){:target="_blank"} 、または、[baserマーケット](https://market.basercms.net/products/detail.php?product_id=158){:target="_blank"} 、もしくは、[composer](https://packagist.org/packages/baserproject/bc-addon-migrator){:target="_blank"} より、BcAddonMigratorプラグインを取得し、新しい環境の `/plugins/` フォルダに配置します。

その後、プラグイン管理よりインストールを実行します。

## プラグインを変換する
プラグイン一覧より、BcAddonMigratorプラグインの右側にある歯車マークををクリックします。

既存の環境のZip化したプラグインをアップロードすると変換が始まります。baserCMS５用への変換が完了するとダウンロードボタンが表示されますのでダウンロードします。

### BcAddonMigrator5.1.0以降の変更点
baserCMS5.1系より、`/src/Plugin.php` の名称が `{YourPluginName}Plugin.php` 形式に変更されたため、対象プラグインの Plugin クラスの名称によって変換処理を振り分けるようになりました。

- Plugin.php が存在しない：4系のプラグインと判断し全ての変換処理を実行
- Plugin.php が存在する：5.0系のプラグインと判断し、5.0系 → 5.1系の変換処理のみ実行
- {YourPluginName}Plugin.php が存在する：5.1系のプラグインと判断し、何もしない

### 問題が発生した場合
問題が発生した場合は、[ユーザーズフォーラム](https://forum.basercms.net/) に報告するか、[GitHubのIssue](https://github.com/baserproject/BcAddonMigrator/issues) を作成してください。

## プラグインをインストールする
新しい環境の、`/plugins/` に、ダウンロードしたプラグインを解凍して、配置します。

その後、管理システムの「プラグイン管理」よりインストールします。

## 動作確認
動作を確認して問題がなければ、これで、baserCMS４のプラグインをbaserCMS５用の環境に移行することができました。お疲れ様でした。

問題が発生していたら、プラグインを問題の内容に合わせて修正します。
以下に、手動による調整についてポイントを記載しています。

## フィードプラグインの廃止
残念ながらフィードプラグインは、baserCMS５では廃止となりました。利用されていた場合は、別のライブラリをご利用ください。

## インストール用スキーマの移行
インストール用のスキーマは、マイグレーションの仕組みへと変更となりました。
スキーマファイルをマイグレーションファイルへと変換する必要があります。自動変換の仕組みはありませんので次のページを参考に手動で変換してください。

- [CakePHP Migrations](https://book.cakephp.org/migrations/3/ja/index.html){:target="_blank"}

プラグイン配下の `/config/Migrations/` に、変換したマイグレーションファイルを配置しておくと、プラグインのインストール時に自動でマイグレーションが実行されます。

## 初期化処理の移行
プラグインのインストール時に実行されていた `/config/init.php` は廃止になりました。`/src/Plugin.php` の install メソッドへ移行します。

```php
class Plugin extends \BaserCore\BcPlugin
{
    public function install($options = [])
    {
        // 初期化処理を記述
    }
}
```

## 設定ファイルの移行
`/config/setting.php` は、`$config` の定義でなく 配列をリターンするように変更となりました。

```php
return [
    'BcBlog' => [
        'setting1' => 'value1',
    ]
];
```

## コントローラーのadmin系メソッド
管理システムで利用する `admin` プレフィックス付きのメソッドは、namespace が `Controller/Admin` に変更となったため、BcAddonMigratorプラグインでは、メソッドを自動で移動しています。

```php
// 変更前
// /Controller/UsersController.php
class UsersController extends AppController
{
    public function admin_index()
    {
        // 管理システムのユーザー一覧
    }
}
// 変更後
// /Controller/Admin/UsersController.php
class UsersController extends BcAdminAppController
{
    public function index()
    {
        // 管理システムのユーザー一覧
    }
}
```

ただし、メソッド内で呼び出しているメソッドは自動で移動できませんので、必要に応じて移動してください。

## データベースのカラム名変更
[DB設計書](../package/database) を参考にし、必要に応じてエンティティのプロパティ名の変更を行います。


## find文で利用するモデル名の変更
find文で利用するモデル名は、単数形から複数形へと変更となりました。

```php
// 変更前
$users = $this->User->find('all', [
    'conditions' => ['User.id' => 1]
]);
// 変更後（元の記述方式も使える）
$users = $this->Users->find('all', [
    'conditions' => ['Users.id' => 1]
]);
// 変更後（新しい記述方式）
$users = $this->Users->find()
    ->where(['Users.id' => 1]);
```

- [CakePHP クエリビルダー](https://book.cakephp.org/4/ja/orm/query-builder.html){:target="_blank"}

## 問題が発生した場合
自分で解決できない場合は、[ユーザーズフォーラム](https://forum.basercms.net/) に相談するか、[GitHubのIssue](https://github.com/baserproject/BcAddonMigrator/issues) を作成してください。

## フィードバックしたい場合
例えば、コードの置換処理で追加したいものがある場合は、GitHubでプルリクエストを送信してください。Issueの作成でも構いません。
一緒にコードを育てる事で他の人も喜びます。

こちらも合わせてご覧ください。
- [baserCMS４のテーマを変換](../theme/migration_theme_from_ver4)
- [baserCMS４のデータベースを変換](../migration_db_from_ver4)
- [baserCMS４からの変更点](../core/difference_from_basercms4)