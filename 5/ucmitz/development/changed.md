# 全体的な変更点

## プラグインの名称変更
baserCMS4においては、コア（baserCMS本体）は、特別なライブラリの位置づけとして開発され、他のプラグインの区別をするために、 `Core` をいう表記を使っていましたが、
ucmitzでは、CakePHPのプラグインとして開発されているため、プラグイン名 `BaserCore` として取り扱います。

その他、コアプラグインの名称も変更となります。
- Blog → BcBlog
- Mail → BcMail
- Uploader → BcUploader  


## ユーティリティの変更
### BcUtil の変更
`BcUtil` 等を配置していた `lib` を `Utility` に変更しています。

　
### basic.php の変更
basics.php 関数について `BcUtil` に静的メソッドとして統合していきます。   
`getVersion()` → `BcUtil::getVersion()`

　
## Component の変更
### BcReplacePrefixComponent の廃止
UsersController を 管理画面や、マイページなどで使い回すための仕組みでしたが、複雑さを増すため、一旦、廃止としました。

　
## Behavior の変更
### BcCacheBehavior の廃止
BcCacheBehaviorは廃止とします。

　
## Controller の変更
### 管理画面のパンくずリストの廃止

管理画面のパンくずリストは廃止とします。

　
## データの取扱の変更
### site_id の変更
baserCMS4では、メインとなるサイトの設定情報を site_configs に保存していましたが、ucmitz からは、メインサイトの情報も
sites テーブルに保存するようになりました。  
したがって、メインサイトの site_id が、0 から 1 へと変更となっています。
