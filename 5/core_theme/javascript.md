# Javascriptの作成

Javascript の開発は、Gulp でファイルを監視し Webpack を利用して開発します。
 
## 事前準備
事前に Node.js をインストールしておき、npm コマンドが利用できるようにしておきます。  
gulp と Webpack が動作するように、npm でライブラリをインストールします。

```shell
npm install
```
※ node v16.8.0 で動作確認
 
## ファイル監視
gulpによる監視は、 npm workspace を利用するため、アプリケーションルートで次のコマンドを実行します。

```shell
npm run dev -w plugins/[プラグイン名]
```

監視対象は、`src/js/` 配下の Javascript ファイルとなります。 監視対象のファイルを更新すると、/webroot/css/ 配下のディレクトリ構造を維持した同階層に、`bundle` というサフィックス付のファイルにコンパイルします。

```shell
# ソース・ファイル
src/js/admin/statup.js
# コンパイル先のファイル
webroot/js/admin/statup.bundle.js
```

## ライブラリの導入方針
外部ライブラリはできるだけ、npm でインストールして利用します。
npm でインストールできないものは、`webroot/js/vendor/` フォルダに配置して import や require で読み込みます。  
外部ライブラリは、自動で `webroot/js/admin/vendor.bundle.js` に出力します。

## 共通処理
全ての画面で読み込む共通処理などは、`webroot/js/src/admin/common.js` を利用します。  
共通処理は、自動で `webroot/js/admin/common.bundle.js` に出力します。
 
## jQueryの利用について
`bootstrap` の読み込みにおいて jQueryが必要となるため、`package.json` に定義していますが、こちらを利用する場合に、`vendor` に配置した jQuery プラグインがうまく動作しません。
  
どうやら、プラグインで読み込む `$` と、endpoint で参照する `$` が別のインスタンスを指している様子。
解決方法が分からないため、vendor に配置した jquery を、テンプレートから直接読み込んでいます。



