# CakePHPのプロジェクトで利用する

CakePHP4で開発しているあなたのアプリケーションで、baserCMS を簡単に導入することができます。
アプリケーションを baserCMS のプラグインとして開発することで、すでに実装されたログイン認証付きの管理画面を簡単に作成することができます。

## 導入手順
### composer でインストール

```shell
# baserCMSコアをインストール
composer require baserproject/baser-core
# サンプル用のデザインテーマをインストール
composer require baserproject/bc-theme-sample
# もしくは、BcColumnテーマをインストール
composer require baserproject/bc-column
```

開発版を取得する場合は、`composer.json` に `"minimum-stability": "dev"` と `"prefer-stable": false` を追加した上で次を実行します。
```shell
# 5.1.x 系の場合
composer require baserproject/baser-core:5.1.x 
```

### プラグインを追加する

次のコマンドを実行すると、`/config/plugins.php` に、BaserCore プラグインを読み込むコードが追加されます。

```shell
bin/cake plugin load BaserCore
```

### インストーラーを起動する

ブラウザで、次のURLにアクセスするとインストーラーが起動しますので、 [インストールを実行する](./index#インストールを実行する)  に従ってインストールを進めます。

https://your-host-name/install

※ インストーラーがうまく起動しない場合は、`/config/app_local.php` が存在するか確認してください。存在しない場合は、`/config/app_local.example.php` をコピーして作成してください。
　
### routes.php を有効化する

baserCMSをインストールすると、コンテンツ管理機能のフロントページにおけるルーティングを動作させるために、`/config/routes.php` が無効になります。 
（何かしら設定を追記しても設定は破棄されます） 

有効化するには、`/config/setting.php` を作成し次のように記述します。

```php
<?php
return [
    'BcApp' => [
        'enableRootRoutes' => true
    ]
];
```
その際、routes.php において、`$builder->fallbacks();` が有効になっていると、コンテンツ管理機能のフロントページにおけるルーティングがうまくいかなくなりますので注意してください。