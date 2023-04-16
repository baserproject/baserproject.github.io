# コマンドインストール

コンソールにて、１コマンドでbaserCMSをインストールする機能です。

## インストールチェック

インストールできる環境かどうかのチェックを行います。  
実行結果を標準出力に表示します。

```shell
bin/cake install check
```

## インストール実行

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
| --data       | 初期データパターン。指定しない場合は、「BcThemeSample.default」                |


## インストーラーのセットアップ

インストーラーを実行するためのセットアップを実行します。

```shell
bin/cake setup install
```

主に次の処理を行います。

- `/config/.env` の `INSTALL_MODE` を `true` に変更
- `/config/install.php` を削除
