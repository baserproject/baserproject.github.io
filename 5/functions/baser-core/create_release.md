# リリースパッケージ作成コマンド

baserCMSのアップデートを Composer で実行する事ができるようにすため、リリース時には、パッケージの構成を変更して配布する必要があります。  

## コマンドの実行方法
Docker コンテナにログインし、次のコマンドを実行します。

```shell
bin/cake create release
```

実行が完了すると、`/tmp/basercms.zip` としてパッケージを保存します。 

## コマンドでの実行内容
- git clone で master ブランチの内容を取得
- plugins配下のパッケージの削除
- `Configure::read('BcApp.excludeReleasePackage')` に定義されたファイルの削除
- composer.json を配布パッケージ用に更新
- Zipファイル化

