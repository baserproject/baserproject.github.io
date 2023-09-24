# リリースパッケージ作成コマンド設計書

baserCMSのアップデートを Composer で実行する事ができるようにすため、リリース時には、パッケージの構成を変更して配布する必要がある。  

## コマンドの実行方法
Docker コンテナにログインし、次のコマンドを実行する

```shell
cake/bin create release
# もしくは
docker/bin/release.sh
```

## コマンドで実行する事
- git clone で master ブランチの内容を取得
- plugins配下のパッケージの削除
- `Configure::read('BcApp.excludeReleasePackage')` に定義されたファイルの削除
- composer.json を配布パッケージ用に更新
- Zipファイル化

## 前提条件
composer.json を配布用パッケージ用の更新する際、baser-core だけを記述する事で、コアプラグインを全て取得できるようにするため、baser-core 配下の composer.json にコアプラグインを全て依存パッケージとして記述しておく必要がある。

