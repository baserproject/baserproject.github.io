# baserCMS v5.1.0 アップデートガイド

baserCMSのマイナーアップデート「v5.1.0」にアップデートするには、従来とは異なるアップデート手順が必要です。以下の手順に従ってアップデートを行ってください。

大まかには次の手順となります。
1. BcUpdateSupporter をインストールする
2. BcUpdateSupporter で、v5.0.19 改善プログラムを実行する
3. baserCMS v5.0.20 にアップデートする
4. BcUpdateSupporter で、v5.0.20 改善プログラムを実行する
5. baserCMS v5.1.0 にアップデートする
6. プラグインを 5.1系に変換する

なお、baserCMS5.1 は、PHP 8.1 以上が必要となります。事前にPHPのバージョンが対応しているか確認してください。

## 1. BcUpdateSupporter をインストールする
[BcUpdateSupporter](https://market.basercms.net/products/detail.php?product_id=164) は、baserCMSのアップデートにおける課題を解決する重要なプラグインです。v5.1.0 にアップデートするためには、BcUpdateSupporter が必要です。
baserマーケットよりダウンロードし、`/plugins/` フォルダに配置して、管理画面よりインストールします。

インストールすると、設定メニュー内に、アップデートサポーターのメニューが追加されます。提供する機能は次のとおりです。

- アップデートに関する課題の解決
- DBマイグレーションの実行（アップデートがうまくいかない場合に利用）
- アップデートスクリプトの実行（アップデートがうまくいかない場合に利用）

## 2. BcUpdateSupporter で、v5.0.19 改善プログラムを実行する
現在のバージョンが、v5.0.19 の場合は、メニュー「アップデート時の問題」より、BcUpdateSupporter の詳細画面に移動し、5.0.19用の改善プログラムを実行します。
そうでない場合は、次の手順に進んでください。

## 3. baserCMS v5.0.20 にアップデートする
アップデート通知からアップデート画面に移動します。アップデート通知が表示されない場合は、管理画面の「システム基本設定」＞「管理画面設定」＞「アップデート通知」より、「管理システムのアップデート通知を有効にする」にチェックを入れて保存してください。
それでも表示されない場合は、直接URLを入力してアクセスしてください。

```
https://your-host/baser/admin/baser-core/plugins/update
```

最新版をダウンロードし、その後、アップデートを実行します。
※ v5.0.18以下の場合は、最新版ダウンロードボタンは表示されず、直接アップデートを実行します。

実行後、現在のプログラムのバージョンとデータベースのバージョンが　5.0.20以上になっていることを確認します。

## 4. BcUpdateSupporter で、v5.0.20 改善プログラムを実行する
メニュー「アップデート時の問題」より、BcUpdateSupporter の詳細画面に移動し、5.0.20用の改善プログラムを実行します。

## 5. baserCMS v5.1.0 にアップデートする
アップデート画面に移動し、最新版をダウンロードし、その後、アップデートを実行します。

baserCMS5.0系のプラグインは、baserCMS v5.1.0ではそのまま動作しない可能性がありますので、アップデート実行時に、BcUpdateSuppoertプラグインによって、全てのプラグインが無効化されます。

実行後、現在のプログラムのバージョンとデータベースのバージョンが　5.1.0以上になっていることを確認します。

## 6. プラグインを 5.1系に変換する
コアプラグイン以外のbaserCMS v5.0系のプラグインは、baserCMS v5.1.0ではそのまま動作しない可能性があります。

BcAddonMigrator を利用して、5.1系に変換しましょう。

- [5.0系のプラグインを 5.1系 に移行](../plugin/migration_plugin_from_ver50)
