# 環境設定

.env を利用して環境に依存する設定を変更する事ができます。   

Composer によるライブラリインストール時に、`/config/.env.example` を元に、`/config/.env` を生成し、そのファイル記載されている値を環境変数として参照する仕様となっています。

例えば、本番環境はデバッグモードをオフで、開発環境でデバッグモードをオンにするなど、環境ごとに違う環境変数を利用できるようにする事を想定しています。（もちろん同じでも構いません）

なお、アプリケーションの設定については、[アプリケーション設定](../plugin/application_setting) をご覧ください。

## 環境変数の読み込み
環境変数を読み込むには次のメソッドを利用します。

```php
// 第２引数は定義されていない場合の初期値
env('SSL_URL', 'https://localhost/');
// boolean型の場合は、filter_var() を利用する事で boolean として取り扱える
filter_var(env('DEBUG', true), FILTER_VALIDATE_BOOLEAN)
```

## 利用できる環境変数
主に利用できる環境変数は次のとおりです。

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



### 例）管理画面を http で利用する
baserCMSの管理画面は、https（SSL）でアクセスしないとエラーとなります。  
http でアクセスしたい場合は、`/config/.env` 開いて設定値を変更します。

```shell
#  ADMIN_SSL を false  に設定する
export ADMIN_SSL="false"
```

　

