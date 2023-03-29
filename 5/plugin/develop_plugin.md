# 独自のプラグインを作成する

独自の Webアプリケーションを baserCMS のプラグインとして開発すると、管理システムでの有効化や無効化が行え、インストーラーやアンインストーラーを簡単に実装することができます。
また、本体での処理を横取りするイベント機能を提供しており、本体の振る舞いを変えることもできます。


## プラグインの基本的な作り方
CakePHPのプラグインと同様の方法で作ることができます。  
ただし、baserCMSの管理機能に認識させる前提で開発する場合は、オートローダーの再作成は不要です。baserCMSの管理機能側でオートローダーの設定を自動で行うためです。

- [CakePHP Cookbook 独自プラグインの作成](https://book.cakephp.org/4/ja/plugins.html#plugin-create-your-own)

まずは `bake` コマンドを叩くことから始めましょう。

```shell
bin/cake bake plugin {YourPlugin}
```

プラグインは、`/plugins` フォルダに配置します。

## プラグインを baserCMS に認識させる
独自のプラグインを baserCMS の管理機能に認識させる為には、いくつかのファイルの調整が必要です。

### プラグイン情報ファイルを設置する
`/config.php` を作成し、プラグインの情報を記述します。これによりプラグイン管理で認識できるようになります。

```php
// /plugins/{YourPlugin}/config.php
return [
    // プラグインタイプ: Plugin を含めるとプラグイン管理で認識できる
    'type' => ['Plugin'],
    // タイトル: プラグイン管理に表示
    'title' => 'SPAサンプル',
    // 説明文：プラグイン管理に表示
    'description' => 'SPAのサンプルプラグインです',
    // 作成者: プラグイン管理に表示
    'author' => 'baserCMS User Community',
    // URL: プラグイン管理に表示
    'url' => 'https://basercms.net',
    // インストールメッセージ: インストール時に表示
    'installMessage' => ''
];
```
ちなみに `type` の種類は次の通りとなります。
- Plugin: プラグイン
- CorePlugin: コアプラグイン
- Theme: フロントページ用テーマ
- AdminTheme: 管理画面用テーマ

### BcPluginを継承する
`/src/Plugin.php` にて、`BcPlugin` を継承します。これにより、プラグイン管理でインストールやアンインストールが行えるようになります。

```php
// /plugins/{YourPlugin}/src/Plugin.php
use BaserCore\BcPlugin;
class Plugin extends BcPlugin
{
}
```
### バージョンファイルを作成する
これは必須ではありませんが、baserCMSでは、プラグインのアップデートをサポートしています。  
その際、バージョンファイルをトリガーにアップデート有無の認識を行っていますので、将来的にバージョンアップを予定しているのであれば、バージョンファイルを作成しましょう。

バージョン番号は、ドット（.）で区切った３つの番号で管理します。詳しくは [バージョン番号](../terms/version) をご覧ください。

```shell
# /plugins/{YourPlugin}/VERSION.txt
# 一行目にバージョン番号を記述します。
1.0.0
```

## プラグインを有効化する
管理システムにログインし、プラグイン管理よりインストールを実行します。  

CakePHPでのプラグイン有効化手順である、オートローダーの再作成（`dumpautoload`）や、プラグインロードの記述（`Application::addPlugin()`）は不要です。

インストールが完了すると、プラグインを自動的に読み込みます。

## baserCMS４からの変更点
CakePHP４に対応することにより、アーキテクチャーも大幅に変更となり、テーマやプラグインの作り方も変更となっています。詳細についてはこちらをご覧ください。

- [baserCMS４からの変更点](./core/difference_from_basercms4)

## 管理画面を作成する
https://github.com/baserproject/ucmitz/wiki/ucmitz%E3%82%92%E5%88%A9%E7%94%A8%E3%81%97%E3%81%A6%E7%AE%A1%E7%90%86%E7%94%BB%E9%9D%A2%E3%82%92%E4%BD%9C%E3%82%8B

### 認証

## インストールの処理
https://github.com/baserproject/ucmitz/wiki/ucmitz%E3%81%AE%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3%E3%82%92%E9%96%8B%E7%99%BA%E3%81%99%E3%82%8B#%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E5%87%A6%E7%90%86

### データベースのマイグレーション
https://github.com/baserproject/ucmitz/wiki/ucmitz%E3%81%AE%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3%E3%82%92%E9%96%8B%E7%99%BA%E3%81%99%E3%82%8B#%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB%E3%82%92%E5%88%A9%E7%94%A8%E3%81%99%E3%82%8B%E5%A0%B4%E5%90%88

## アンインストールの処理
https://github.com/baserproject/ucmitz/wiki/ucmitz%E3%81%AE%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3%E3%82%92%E9%96%8B%E7%99%BA%E3%81%99%E3%82%8B#%E3%82%A2%E3%83%B3%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E5%87%A6%E7%90%86


## アップデートの処理
プラグインのアップデート時にマイグレーションやスクリプトの実行を行いたい場合、いくつかのファイルを調整します。

### バージョンファイル
`/VERSION.txt` 内のバージョン番号が、データベースに保管されたバージョン番号よりも大きい場合に、一覧にアップデートボタンを表示する仕様になっており、アップデート時に、マイグレーションの実行とスクリプトの実行を行うようになっています。

バージョン番号を以前のものより大きい数字で定義しておきます。

### アップデートスクリプト
#### 対象バージョン用スクリプト設置フォルダ
`/config/update/` 内にバージョン番号のフォルダを配置すると、対象バージョン用のスクリプトとして認識されます。

```shell
# バージョン 5.0.0 の場合
/config/update/5.0.0/
```

#### アラートメッセージ表示
対象バージョン用スクリプト設置フォルダに `config.php` を配置することでアップデート画面に表示するアラートメッセージを定義することができます。

```php
// /config/update/5.0.0/config.php
<?php
return [
    'updateMessage' => 'アラートメッセージを記述します。'
];
```

#### アップデートスクリプト
対象バージョン用プログラム設置フォルダに `updater.php` を配置することで、アップデート時に実行するスクリプトを定義することができます。
```php
// /config/update/5.0.0/updater.php
<?php
// 例）
$users = TableRegistry::getTableLocator()->get('BaserCore.Users');
$user = $users->find()->where(['id' => 1])->first();
$user->name = 'hoge';
$users->save($user);
```

### データベースのマイグレーション
マイグレーションファイルを設置しておけば自動でマイグレーションを実行します。  
マイグレーションファイル作成方法については次をご覧ください。

- [CakePHP Migrations](https://book.cakephp.org/migrations/3/ja/index.html#)


## サービスクラスの利用
https://github.com/baserproject/ucmitz/wiki/ucmitz%E3%81%AE%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3%E3%82%92%E9%96%8B%E7%99%BA%E3%81%99%E3%82%8B#%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%82%AF%E3%83%A9%E3%82%B9%E3%82%92%E5%88%A9%E7%94%A8%E3%81%99%E3%82%8B%E5%A0%B4%E5%90%88

## APIドキュメント
baserCMSで利用できるAPIについては次をご覧ください。

- [baserCMS API ドキュメント](./api)
- [CakePHP API ドキュメント](https://api.cakephp.org/){target="_blank"}

## プラグイン配布・販売する
プラグインができたら、早速、GitHubや、baserマーケットで公開しましょう。

- [baserマーケット：テーマやプラグインを配布・販売する](../market#テーマやプラグインを配布・販売する)
