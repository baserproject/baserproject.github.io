# テストカバレッジ

ユニットテストを実行し、PHPUnitとXDebugを利用したカバレッジの確認が可能です。
phpunitを実行する際に閲覧用のhtmlを生成することでブラウザから表示することが出来ます。

## 事前準備

PHPアプリケーション用のdockerコンテナにログインし下記を実施します。  

1. /usr/local/etc/php/conf.d/xdebug.ini の変更

```
xdebug.mode=debug,develop,coverage
```

2. PHPUnitの実行時に引数を指定し生成

```
vendor/bin/phpunit --coverage-html ./webroot/coverage-report
```

3. ブラウザより下記URLにアクセス

https://localhost/coverage-report/index.html