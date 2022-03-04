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

　
## Ajax処理の変更

管理画面での Ajax処理については、全て REST API に移行します。  
REST API は、Jwt認証を利用しているため、Ajax処理を実装する場合は、$.bcJwt を利用してアクセストークンを付与する必要があります。

```javascript
$.ajax({
    url: $.bcUtil.apiBaseUrl + 'baser-core/plugins/get_market_plugins',
    headers: {
        "Authorization": $.bcJwt.accessToken,
    },
    type: "GET",
    success: function (result) {
        $("#BaserMarket").html(result);
    }
});
```

なお、アクセストークンは、管理画面へのログイン時に取得し、リフレッシュトークンをローカルストレージに保存し、 `admin/startup.js` にて、毎画面ごとにリフレッシュトークンを利用して新しいアクセストークンを取得しています。

　
## BcSecurity.csrfExpires の廃止

CSRFは、SecurityComponent から、CsrfProtectionMiddleware に移行となりました。
それに伴い、baserCMS側から介入できなくなったため、設定値 `BcSecurity.csrfExpires` は廃止となっています。  
デフォルト値はブラウザセッションです。設定したい場合は、Application クラスにて `expiry` で設定します。
