# 既知の問題点

## 並べ替えボタンのCSSについて

クラス `btn-direction bca-table-listup__a` を付与しなければ、CSSが反映されませんが、並べ替えの A タグにクラスを付与できない仕様となってしまっています。
CSS側を調整する必要があります。

 
## Vue.js の読み込みについて

メニューの表示に Vue を利用しており、利用する javascript ファイルにて、node_modules より読み込みたいところですが、そちらで読み込むと何故かメニューが表示されません。
ダウンロードしたものを配置してそちらを読み込むと表示できます。
