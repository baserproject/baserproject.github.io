# データベースの構造変更

テーブルへのカラム追加や削除等、データベースの構造を変更した場合には、設置済のbaserCMSのアップデートに対応する為、「マイグレーションファイル」の準備が必要です。  
なお、開発方針として、次のリリースがマイナーアップデート以上の場合にデータベースの構造変更を行う事ができます。

## マイグレーションファイル
マイグレーションファイルとは、データベースのテーブル構造や構造の変更を表現するクラスファイルで、`BaserCore\Database\Migration\BcMigration`
クラスを継承して実装します。

```php
class AddAuthPrefixSettingsToUserGroups extends BcMigration {
```

### マイグレーションファイルの生成コマンド

データベースのテーブルからマイグレーションファイルを作成する場合はコマンドで実行します。下記コマンドを実行すると、`/plugins/{YourPlugin}/config/Migrations/` 内に自動生成します。

```shell
bin/cake bake migration_snapshot {MigrationName} --plugin {YourPlugin}
```

なお、マイグレーション名については、次の命名規則で決定します。

- テーブル追加： Create{TableName}
- テーブル削除： Drop{TableName}
- カラム追加： Add{ColumnName}To{TableName}
- カラム削除： Drop{ColumnName}From{TableName}
- カラム変更： Change{ColumnName}In{TableName}

```shell
例） ユーザーグループテーブルに「auth_prefix_settings」フィールドを追加
AddAuthPrefixSettingsToUserGroups
```

### 初期データのメンテナンス
カラムの追加、削除を行う場合、インストール時に利用する初期データファイルのメンテナンスが必要となりますのでご注意ください。


