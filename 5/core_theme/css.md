# CSSの作成

CSSの作成では、sass を利用し、gulp で監視します。

 
## 事前準備
事前に Node.js をインストールしておき、npm コマンドが利用できるようにしておきます。  
gulp と sass が動作するように、npm でライブラリをインストールします。

```shell
npm install
```

 
## ファイル監視
gulpによる監視は、 npm workspace を利用するため、アプリケーションルートで次のコマンドを実行します。

```shell
npm run dev -w plugins/[プラグイン名]
```

監視対象は、`src/css/` 配下の sass ファイルとなります。 監視対象のファイルを更新すると、/webroot/css/ 配下のディレクトリ構造を維持した同階層にコンパイルします。

```shell
# ソース・ファイル
src/css/style.scss
# コンパイル先のファイル
webroot/css/style.css
```

