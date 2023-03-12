# 提供コマンド

## BaserCore

### テストのセットアップ

テストを実行するためのセットアップを実行します。主に次の処理を行います。

- DEBUG を `true` に変更
- USE_CORE_API を `true` に変更
- USE_CORE_ADMIN_API を `true` に変更

```shell
bin/cake setup test
```

### インストーラーのセットアップ

インストーラーを実行するためのセットアップを実行します。主に次の処理を行います。

- INSTALL_MODE を `true` に変更
- /config/install.php を削除
-

```shell
bin/cake setup install
```

### リリースパッケージ作成

baserCMSを Composer でアップデートすることができる構成として、リリースパッケージを作成し zip 化します。
/tmp/basercms.zip として保存します。

```shell
bin/cake create release
```

### Composer実行

baserCMSのバージョンを指定して require する事ができます。  
アプリケーション側から実行する事を想定されたコマンドで、あまり実行用途はありません。

```shell
bin/cake composer [baserCMSのバージョン番号]
```

### アップデーター実行

現在のbaserCMSのソースコードのバージョンに合わせて、マイグレーションの実行と、アップデートスクリプトが存在する場合にはスクリプトの実行を行います。  
アプリケーション側から実行する事を想定されたコマンドで、あまり実行用途はありません。

```shell
bin/cake update
```

## BcInstaller

### インストールチェック

インストールできる環境かどうかのチェックを行います。  
実行結果を標準出力に表示します。

```shell
bin/cake install check
```

### インストール実行

データベースのユーザー名、パスワードなどを指定してインストールを実行します。

```shell
bin/cake install https://localhost [管理者メールアドレス] [管理者パスワード] [データベース名] --host bc5-db --username root --password root
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


## Composerで利用できるコマンド

上記のコマンドの組み合わせで Composer に次のコマンドを登録しています。  
GitHubActions で利用しています。

### ユニットテスト
テストのセットアップを行い、テストを実行します。
```shell
composer run-script test
```

### インストール
インストールのセットアップを行い、インストールを実行します。
```shell
composer run-script install
```
