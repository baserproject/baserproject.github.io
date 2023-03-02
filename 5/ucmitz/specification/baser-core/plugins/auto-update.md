# オートアップデート設計書

baserCMSは、ベースシステムとしてテーマやプラグインにてカスタマイズをする事を前提としたパッケージのため、オートアップデート機能の仕様として、全自動で知らぬうちに更新してしまう事は望ましくない。

そのため、baserCMSのオートアップデートの仕様としては、アップデート情報の取得ができ、利用者がアップデート実行ボタンをクリックすることで、プログラムデータの取得や、データベースのマイグレーションを自動実行できるというものにする。

## アップデートで実行すること
- アップデート情報の取得
- プログラムファイルの更新
- データベースの更新
- アップデートスクリプト実行

## 前提条件
- プログラムファイルは、Composer で、バージョンを更新する。
- データベースは、CakePHPのマイグレーションの仕組みを利用する。
- マイグレーション時は、プログラム更新後のマイグレーションファイルが読み込める事が必要なため、別プロセスとして実行が必要。

## アップデート情報の取得
Composer の packagist より RSS で取得

https://packagist.org/feeds/package.baserproject/baser-core.rss

#### 取得条件
サイト基本設定にて、「管理システムのアップデート通知を有効にする」にチェックが入っている事

#### 取得のタイミングとキャッシュ
管理画面を開く際に、`BcAdminAppController::beforeRender` のタイミングで取得し、１日間キャッシュする。

#### 通知の表示
自身のパッケージのバージョンよりも新しいバージョンが存在する場合には、メニューに更新ボタンを表示する。なお、新しいバージョンの数をバッジとして表示する。

## アップデート実行
アップデート実行の際は、Composer を利用するため、PHPのパス情報を必要とする。  
プログラム側で自動取得できる場合は初期値としてセットする。

### プログラムファイルの更新
CakePHPのシェルを利用して 別プロセスとして、Composer を実行するプログラムを作成する。 

`PluginsController::update` → `PluginsService::updateCore` → `ComposerCommand::execute` → `BcComposer::require` 

#### プログラムの配置とリリースパッケージ作成プログラムについて
Composer で更新するためには、baserCMSのプログラムを `/plugins` ではなく、`/vendor` に配置する必要がある。  
ただし、`/vendor` では開発できないため、`/plguins` で開発し、配布の際には、 [リリースパッケージ作成コマンド](../common/create_release) を作成し、`/plugins` 配下を削除して配布する。

また、monorepo-builder の関係で、`composer.json` 内に、`replace` の定義があるが、上記構成を前提とした場合にこれがあると、Composer が正常に動作しないため、
こちらもリリースパッケージ作成コマンドで、削除する。

　
### DBの更新
CakePHPのシェルを利用して 別プロセスとして、Migration を実行するプログラムを作成する。 

`PluginsController::update` → `PluginsService::updateCore` → `UpdateCommand::execute` → `PluginsService::update` → `BcPlugin::migrate` 

#### 実行条件
- composer が完了している事
- 新しいプログラムのマイグレーションファイルが読み込める事

　
### アップデートスクリプト実行
バージョンに応じて設置したアップデートスクリプトを実行する。

`PluginsController::update` → `PluginsService::updateCore` → `UpdateCommand::execute` → `PluginsService::update` → `BcPlugin::execUpdater` 

#### スクリプトの配置
アップデートスクリプトは、次の場所に配置するものとする。
```shell
# version-number は、1.0.1 のようにアップデート対象のバージョンとする
/plugins/{plugin-name}/config/update/{version-number}/updater.php
```

#### ロールバック処理
なお、アップデートスクリプトは、Migration のシェルで実行し、アップデートスクリプトが失敗した場合には、Migration をロールバックする。また、Composer の処理もロールバックさせ、元のバージョンに戻す。

#### スクリプト実行における課題
スクリプトで実行した処理をロールバックする処理を実装していない事。実装方法の検討が必要。


## 現在の処理

BcUpdateFilterMiddleware にてプログラムの変化を確認  
→ 削除する  

/update に移動する事でアップデート画面へ  
→ ルーティングを削除する

データベースのマイグレーションとアップロードプログラムのみ実行  
`PluginsController::updat`e → `PluginsService::update` → `Plugin::update`  
→ Plugin::update を分割する


## 外部プラグインの取り扱い
当面は plugins に手動でインストール


## 外部プラグインの将来的な取り扱い
baserマーケットと連携し、直接プログラムのインストールとアップデートができるようにする事を検討する。

### インストール
baserマーケットでAPIを公開

- プラグイン管理からプラグインを検索
- インストールをクリック
- マーケットにログインしていない場合はログイン画面に遷移
- ログインすると対象プラグインの購入情報を取得
- 購入していない場合はカートに登録
- 購入完了後、プラグインインストール画面に遷移
- インストール実行をクリック
- プラグインをダウンロード
  - composer に対応しているものは、composerで vendorにダウンロード
  - composer に対応していないものは、マーケットから、plugins にダウンロード
- インストール実行

### アップデート
- baserマーケットのAPIでアップデート情報を取得
- アップデートを実行
- マーケットにログインしていない場合はログイン画面に遷移
- ログインすると対象プラグインの購入情報を取得
- 購入していない場合はカートに登録
- 購入完了後、プラグインアップデート画面に遷移
- アップデート実行をクリック
- プラグインをダウンロード
  - composer に対応しているものは、composerで vendorにダウンロード
  - composer に対応していないものは、マーケットから、plugins にダウンロード
- アップデート実行
