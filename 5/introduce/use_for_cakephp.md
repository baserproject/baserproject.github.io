# CakePHPのプロジェクトで利用する

CakePHP4で開発しているあなたのアプリケーションで、baserCMS を簡単に導入することができます。
アプリケーションを baserCMS のプラグインとして開発することで、すでに実装されたログイン認証付きの管理画面を簡単に作成することができます。

## 導入手順
### composer でインストール

```shell
composer require baserproject/baser-core
```
開発版を取得する場合は、`composer.json` に `"minimum-stability": "dev"` を追加した上で次を実行します。
```shell
composer require baserproject/baser-core:^5.0-dev --with-all-dependencies
```

### Application にプラグインを追加する

次のコマンドを実行すると、`Application::bootstrap()` に、BaserCore プラグインを読み込むコードが追加されます。

```shell
bin/cake plugin load BaserCore
```

### インストーラーを起動する

ブラウザで、次のURLにアクセスするとインストーラーが起動しますので、 [インストールを実行する](./index#インストールを実行する)  に従ってインストールを進めます。

https://your-host-name/install

※ インストーラーがうまく起動しない場合は、app_local.php が存在するか確認してください。存在しない場合は、app_local.default.php をコピーして作成してください。
　

