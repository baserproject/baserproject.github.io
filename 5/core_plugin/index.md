# コアプラグインの開発

## Composer によるパッケージの追加
### 統合的なパッケージ管理
[パッケージ構成](../package/index) に記載しているとおり、baserCMSではモノレポによる統合的なパッケージ管理を採用しています。  

子パッケージの `composer.json` 記述したパッケージは、`monorepo-builder` により、親パッケージの `composer.json` にまとめあげることができ、`vendor` ディレクトリも親の `vendor` で統合的に管理することができます。

そのため、子パッケージの `composer.lock` と `vendor` ディレクトリは利用しません。（.gitignore で除外済です）

### 子パッケージの composer.json の構成をまとめあげる
パッケージを追加する場合は、子パッケージの `composer.json` に記述します。

子パッケージの `composer.json` を変更した場合は、次のコマンドを実行して親パッケージにまとめあげる必要があります。

```shell
vendor/bin/monorepo-builder merge
```

### パッケージを追加する
パッケージを実施に追加する際は、親パッケージの `composer.json` に子パッケージの定義内容がまとめ上げられていることを前提として、親パッケージの composer.json に対してコマンドを実行します。
 
```shell
composer update
```
