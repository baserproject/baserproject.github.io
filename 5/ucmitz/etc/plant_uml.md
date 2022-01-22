# PlantUMLの利用方法

ドキュメントの作成において、クラス図、ユースケース図、ドメインモデル図にPlantUMLを利用しています。
また、その際のSVGファイルへの変換に Gulp を利用しています。

変換の際は、`src/puml/` 配下に作成した `puml`ファイルを元に、ドキュメントルート配下の同階層に出力します 

```shell
/src/puml/5/ucmitz/svg/use_case/sample.puml
↓
/5/ucmitz/svg/use_case/sample.svg
```
　
## 環境構築

### Javaをインストール
まず、Javaをインストールします。
https://java.com/ja/

### Graphviz をインストール
次にグラフ画像に変換するツールである Graphvizをインストールします。
```shell
# Mac環境
brew install graphviz
sudo ln -s /opt/homebrew/bin/dot /usr/local/bin/dot
```
### gulp、gulp-puml をインストール
プロジェクトディレクトリの直下で npm を使ってインストールします。
```shell
npm install
```

　
## gulp で監視
```shell
gulp
```
