# PlantUMLの利用方法

baserCMS の開発では、クラス図、ユースケース図、ドメインモデル図などのドキュメントの作成において [PlantUML](https://plantuml.com/ja/) を利用しています。
また、その際のSVGファイルへ監視と自動変換に Gulp を利用しています。

変換の際は、`src/puml/` 配下に作成した `puml`ファイルを元に、ドキュメントルート配下の同階層に出力します 

```shell
/src/puml/5/svg/use_case/sample.puml
↓
/5/svg/use_case/sample.svg
```
 
## 環境構築方法

### 1. Javaをインストール
まず、Javaをインストールします。
https://java.com/ja/

### 2. Graphviz をインストール
次にグラフ画像に変換するツールである Graphvizをインストールします。
```shell
# Mac環境
brew install graphviz
sudo ln -s /opt/homebrew/bin/dot /usr/local/bin/dot
```
### 3. gulp、gulp-puml をインストール
プロジェクトディレクトリの直下で npm を使ってインストールします。
```shell
npm install
```

 
## gulp での監視方法

ドキュメントルートに移動して gulp コマンドを実行します。

```shell
gulp
```

