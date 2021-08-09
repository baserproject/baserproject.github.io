# データベースにおける注意点

## マイグレーションファイルの変更をテータベース構造に反映する

誰かがテータベース構造を変更した場合は、反映するために、コンテナにログインし、migrationの実行を行う必要があります。  
**※CakeSchemaはなくなったので、Console/cake schemaコマンドは使えません**

```
bin/cake migrations migrate --plugin BaserCore
```

　
## 特定のマイグレーションをデータベースに反映する

```
bin/cake bake migration CreateSamples --plugin BaserCore
```
参考: [Migrations/マイグレーションファイルの作成/シンタックス](https://book.cakephp.org/migrations/2/ja/index.html#id5)

そして、plugins/baser-core/config/Schemaのスキーマを参考にカラムを定義してください

　
## 特定のシードをデータベースに反映する

```
bin/cake migrations seed --seed SamplesSeed --plugin BaserCore
```
参考: [Migrations/seed : データベースの初期データ投入](https://book.cakephp.org/migrations/2/ja/index.html#seed)

　
## データベースのデータをFixtureに反映する
```
bin/cake bake fixture -r -f -n 20 -s samples --plugin BaserCore
```

　
## データベースの変更内容をマイグレーションに反映する
```shell
bin/cake bake migration_diff CreateTableName --plugin PluginName   
```
差分がうまく反映されない場合は、baserCMS4のスキーマからマイグレーションを作成してください。

[baserCMS4のスキーマをマイグレーションファイルに変換する方法](https://github.com/baserproject/ucmitz/blob/dev/tools/SchemeCoverter/README.md)

　
## データベースのデータをシードに反映する
```shell
bin/cake bake seed --data TableName --plugin PluginName
```

　
※ 
