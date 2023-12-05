# baser CLI ガイド

baserCMSでは、開発を効率化するためコマンドラインインターフェイス（CLI）におけるいくつかのコマンドを提供しています。必要に応じてご利用ください。


## インストール関連
baserCMS本体のインストールに関するコマンドです。

### インストールチェック
インストールできる環境かどうかのチェックを行います。  
実行結果を標準出力に表示します。

```shell
bin/cake install check
```

### インストール実行
データベースのユーザー名、パスワードなどを指定してインストールを実行します。

```shell
bin/cake install https://localhost [管理者メールアドレス] [管理者パスワード] [データベース名] --host bc-db --username root --password root
```

オプション

| オプション        | 内容                                                             |
|--------------|----------------------------------------------------------------|
| --datasource | データベースタイプ ( mysql or postgresql or sqlite )<br>指定しない場合は「mysql」 |
| --host       | データベースのホスト名。MySQL、PostgreSQLの場合に必須。                            |
| --username   | データベースのユーザー名。MySQL、PostgreSQLの場合に必須。                           |
| --password   | データベースのパスワード。MySQL、PostgreSQLの場合に必須。                           |
| --prefix     | データベースのテーブル名に付けるプレフィックス。                                       |
| --port       | データベースのポート番号。                                                  |
| --baseurl    | ベースとなるURL、サブフォルダに設置する場合に利用。<br>指定しない場合は、「/」                    |
| --sitename   | サイト名。指定しない場合は、「My Site」                                        |
| --data       | 初期データパターン。指定しない場合は、「BcFront.default」                           |

### インストーラーのセットアップ
再インストールなどをスムーズにするため、インストーラーを実行するためのセットアップを実行します。主に次の処理を行います。

- `/config/.env` の `INSTALL_MODE` を `true` に変更
- `/config/install.php` を削除

```shell
bin/cake setup install
```

### オフィシャルのダウンロードパッケージを利用する場合の注意事項
オフィシャルの[ダウンロードパッケージ](https://basercms.net/download) を利用する場合、インストールを実行する前に、baserCMSのコアプラグインを composer でインストールする必要があります。配置後に、まず、次のコマンドを実行してください。  
※ baserCMS本体の開発が目的でない場合はオフィシャルのダウンロードパッケージの利用を推奨しています。

```shell
# composer によるコアプラグインのインストール
composer install
# 環境設定ファイルの準備
cp config/.env.example config/.env
```

### 環境がSSLでない場合の注意事項
管理画面にアクセスする際、デフォルト状態では、SSL通信が前提となっており、http でアクセスするとエラーとなってしまいます。  
SSL通信でない場合は、`/config/.env` を編集します。

```shell
# 次の設定値を false に設定
export ADMIN_SSL="true"
```

## ユニットテスト関連
PHPUnitにおけるユニットテストに関するコマンドです。

### テストのセットアップ
テストを実行するためのセットアップを実行します。主に次の処理を行います。

- `/config/.env` の `DEBUG` を `true` に変更
- `/config/.env` の `USE_CORE_API` を `true` に変更
- `/config/.env` の `USE_CORE_ADMIN_API` を `true` に変更

```shell
bin/cake setup test
```

### ユニットテストの実行
こちらは、PHPUnitのコマンドになります。

```shell
vendor/bin/phpunit
```


## アップデート関連
baserCMS本体のアップデートのためのコマンドです。主に、ブラウザアプリケーション側から実行する事を想定されたコマンドで、そのほかであまり実行用途はないかもしれません。

### Composer実行

baserCMSのバージョンを指定して require する事ができます。  

```shell
bin/cake composer [baserCMSのバージョン番号]
```

### アップデーター実行

現在のbaserCMSのソースコードのバージョンに合わせて、マイグレーションの実行と、アップデートスクリプトが存在する場合にはスクリプトの実行を行います。  

```shell
bin/cake update
```

## リリース関連
baserCMS本体のリリース時に利用するコマンドです。

### リリースパッケージ作成
baserCMSを Composer でアップデートすることができる構成として、リリースパッケージを作成し zip 化します。

```shell
bin/cake create release
```
作成したパッケージは、 `/tmp/basercms.zip` として保存します。


## Composerで利用できるコマンド

上記のコマンドの組み合わせで Composer に次のコマンドを登録しています。  
GitHubActions で利用しています。

### インストール
インストールのセットアップを行い、インストールを実行します。
```shell
composer run-script install
```

### ユニットテスト
テストのセットアップを行い、テストを実行します。
```shell
composer run-script test
```

