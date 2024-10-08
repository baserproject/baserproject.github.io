# baserCMS v5.1.1 アップデートガイド

baserCMSのパッチアップデート「v5.1.1」にアップデートするには、アップデーターに問題があり、従来とは異なるアップデート手順が必要です。以下の手順に従ってアップデートを行ってください。

大まかには次の手順となります。
1. BcUpdateSupporter をインストールする
2. BcUpdateSupporter で、v5.1.0 改善プログラムを実行する
3. baserCMS v5.1.1 にアップデートする

## 1. BcUpdateSupporter をインストールする
[BcUpdateSupporter](https://market.basercms.net/products/detail.php?product_id=164) は、baserCMSのアップデートにおける課題を解決する重要なプラグインです。v5.1.1 にアップデートするためには、BcUpdateSupporter が必要です。
baserマーケットよりダウンロードし、`/plugins/` フォルダに配置して、管理画面よりインストールします。

インストールすると、設定メニュー内に、アップデートサポーターのメニューが追加されます。提供する機能は次のとおりです。

- アップデートに関する課題の解決
- DBマイグレーションの実行（アップデートがうまくいかない場合に利用）
- アップデートスクリプトの実行（アップデートがうまくいかない場合に利用）

## 2. BcUpdateSupporter で、v5.1.0 改善プログラムを実行する
メニュー「アップデート時の問題」より、BcUpdateSupporter の詳細画面に移動し、5.1.0用の改善プログラムを実行します。

## 3. baserCMS v5.1.1 にアップデートする
アップデート通知からアップデート画面に移動します。アップデート通知が表示されない場合は、管理画面の「システム基本設定」＞「管理画面設定」＞「アップデート通知」より、「管理システムのアップデート通知を有効にする」にチェックを入れて保存してください。
それでも表示されない場合は、直接URLを入力してアクセスしてください。

```
https://your-host/baser/admin/baser-core/plugins/update
```

最新版をダウンロードし、その後、アップデートを実行します。

実行後、現在のプログラムのバージョンとデータベースのバージョンが　5.1.1になっていることを確認します。
