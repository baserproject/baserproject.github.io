# 設定の変更

設定については環境設定とアプリケーション設定の二つの設定があります。

## 環境設定

環境に依存する設定を変更する事ができます。   
Composerインストール時に、`.env.example` を元に、`.env` を生成し、そのファイルを参照します。
例えば、本番環境はデバッグオフで、開発環境でデバッグオンにするなど、環境ごとに違う設定値のファイルを利用する事を想定しています。

設定値を読み込むには次のメソッドを利用します。

```php
// 第２引数は定義されていない場合の初期値
env('SSL_URL', 'https://localhost/');
// boolean型の場合は、filter_var() を利用する事で boolean として取り扱える
filter_var(env('DEBUG', true), FILTER_VALIDATE_BOOLEAN)
```

主に利用する設定は次のとおりです。

- **DEBUG**: デバッグモード。画面にデバッグ情報を表示する場合に `true` を設定します。
- **INSTALL_MODE**: インストールモード。インストーラーを実行したい場合に `true` に設定します。インストールを実行するには、`/config/install.php` が削除されている必要があります。 
- **USE_DEBUG_KIT**: CakePHPの DebugKit プラグインを利用する場合いんは `true`に設定します。
- **SITE_URL**: サイトのURLを設定します。インストール時に自動設定します。  
  （例）http://localhost/
- **SSL_URL**: SSLのURLを設定します。インストール時に自動設定します。  
  （例）https://localhost/
- **ADMIN_SSL**: 管理画面についてSSLを強制する場合に `true` に設定します。
- **ADMIN_PREFIX**: 管理画面のURLのプレフィックスを変更する場合に設定します。デフォルトは `admin` となり、`/baser/admin` が管理画面のURLになります。
- **BASER_CORE_PREFIX**: baserCMSコアのプレフィックスとなり、主に管理画面のURLで利用されます。デフォルトは `baser` となり、`/baser/admin` が管理画面のURLになります。
- **SQL_LOG**: SQL発行ログをログに出力する場合に `true` に設定します。
- **USE_CORE_API**: コアが提供する Web API を利用する場合に `true` に設定します。
- **USE_CORE_ADMIN_API**: コアが提供する認証が必要な Web API を利用するする場合に `true` に設定します。
- **SHOW_TEST_METHOD**: ユニットテスト実行時にクラスメソッド名を表示する場合に `true` に設定します。

## アプリケーション設定

アプリケーションの設定値は、BaserCore も含め、各プラグイン内の `/config/setting.php` に定義しており、アプリケーション内で、次のメソッドで読み込む事ができます。

```php
Cake\Core\Configure::read('BcApp.title');
```

### アプリケーション設定を外部より書き換える

アプリケーション設定は、アプリケーション直下の `/config/setting.php` もしくは、独自で開発するプラグイン内の `/config/setting.php` にて書き換える事ができます。

```php
// フロント認証を有効にする場合
// /config/setting.php
return [
    'BcPrefixAuth' => [
        'Front' => [
            'disabled' => false
        ]
    ]
];
```


　
