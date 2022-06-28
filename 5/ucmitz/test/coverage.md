# テストカバレッジ

ユニットテストを実行し、PHPUnitとXDebugを利用したカバレッジの確認が可能です。
phpunitを実行する際に閲覧用のhtmlを生成することでブラウザから表示することが出来ます。

## 事前準備
PHPアプリケーション用のdockerコンテナにログインし下記を実施します。  

/usr/local/etc/php/conf.d/xdebug.ini の変更

```
xdebug.mode=debug,develop,coverage
```

PHPUnitの実行時に引数を指定し生成

```
vendor/bin/phpunit --coverage-html ./webroot/coverage-report
```

## 確認
ブラウザより下記URLにアクセスし確認が可能です。  
https://localhost/coverage-report/index.html