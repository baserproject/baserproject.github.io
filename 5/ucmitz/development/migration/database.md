# データベースにおける注意点

## ファイルからDBへの反映
誰かがテータベース構造を変更した場合は、反映するために、コンテナにログインし、migrationの実行を行う必要があります。  
**※CakeSchemaはなくなったので、Console/cake schemaコマンドは使えません**

### マイグレーションファイルの変更をDBに反映
```shell
bin/cake migrations migrate -p BaserCore
```

### シードファイルをデータベースに反映する
```shell
bin/cake migrations seed -p BaserCore
# 特定のシードファイルを指定する場合
bin/cake migrations seed --seed SamplesSeed -p BaserCore
```

## DBの内容をファイルに書き出す

### DBの変更内容をマイグレーションファイルに書き出す
```shell
bin/cake migrations dump
bin/cake bake migration_diff CreateTableName -p PluginName   
```

### DBのデータをシードファイルに書き出す
```shell
bin/cake bake seed --data TableName -p PluginName
```
