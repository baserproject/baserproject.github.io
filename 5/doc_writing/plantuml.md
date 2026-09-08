# PlantUMLの利用方法

baserCMS の開発では、クラス図、ユースケース図、ドメインモデル図などのドキュメントの作成において [PlantUML](https://plantuml.com/ja/) を利用しています。
また、その際のSVGファイルへの変換には `plantuml.jar` を利用しています。

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

### 3. plantuml.jar をダウンロード
プロジェクトディレクトリの直下に `plantuml.jar` を配置します。
```shell
curl -JLO http://sourceforge.net/projects/plantuml/files/plantuml.jar/download
```


## SVGへの変換方法

プロジェクトディレクトリの直下で変換用のスクリプトを実行します。

```shell
# 全ファイルを変換する場合
./bin/build-puml.sh

# 特定のファイルのみ変換する場合
./bin/build-puml.sh {PUMLFILE}
```


## 変更の監視方法

ファイルの変更を監視して自動で変換する場合は、`fswatch` をインストールした上で、監視用のスクリプトを実行します。

```shell
brew install fswatch
./bin/watch-puml.sh
```

ブラウザの自動リロードについては、`docker compose up` で起動する Jekyll のライブリロード機能により行われます。
