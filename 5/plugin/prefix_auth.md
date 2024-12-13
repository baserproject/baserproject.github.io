# プレフィックス認証

baserCMSでは、URLにおける特定の領域（プレフィックス）に対して、設定ファイルで簡単に認証設定を行う事ができます。

 
## 設定ファイル
独自開発のプラグインの場合、次の設定ファイルに設定を記述します。

```shell
/plugins/PluginName/config/setting.php
```

### 設定項目
- `name`: 認証設定名
- `type`: 認証タイプ（ Session | Jwt ）
     セッション認証、または、 JWT 認証を提供。
     どちらにおいても、テーブルにおける ユーザー名とパスワードで識別する。
- `alias`: URLにおけるエイリアス
- `loginRedirect`: 認証後のリダイレクト先のURL
- `loginAction`: ログインページURL
- `logoutAction`: ログアウトページURL
- `username`: ユーザー識別用テーブルにおけるユーザー名。配列での複数指定が可能
- `password`: ユーザー識別用テーブルにおけるパスワード
- `userModel`: ユーザー識別用のテーブル（プラグイン記法）
- `sessionKey`: セッションを利用する場合のセッションキー
- `permissionType`: アクセスルール設定
  - 1.ホワイトリスト: 全て拒否してアクセスルールで許可を設定
  - 2.ブラックリスト: 全て許可してアクセスルールで拒否を設定
- `disabled`: 設定を無効にする場合は true に設定（キーがない場合は有効とみなす）
- `withCorePrefix`: プレフィックスの前に baserのコアプレフィックスを追加するかどうか
- `isRestApi`: REST API かどうか

### 設定例
```php
return [
    'BcPrefixAuth' => [
        // マイページの設定例
        'Mypage' => [
            'name' => __d('baser', 'マイページ'),
            'type' => 'Session',
            'alias' => '/mypage',
            'loginRedirect' => [
                'plugin' => 'PluginName', 
                'prefix' => 'Mypage', 
                'controller' => 'Dashboard', 
                'action' => 'index'
            ],
            'loginAction' => [
                'plugin' => 'PluginName', 
                'prefix' => 'Mypage', 
                'controller' => 'Users', 
                'action' => 'login'
            ],
            'logoutAction' => [
                'plugin' => 'PluginName', 
                'prefix' => 'Mypage', 
                'controller' => 'Users', 
                'action' => 'logout'
            ],
            'username' => ['email', 'name'],
            'password' => 'password',
            'userModel' => 'BaserCore.Users',
            'sessionKey' => 'AuthAdmin',
            'permissionType' => 1,
        ],
        // マイページのAPIの設定例
        'MypageApi' => [
            'name' => __d('baser', 'マイページ'),
            'type' => 'Jwt',
            'alias' => '/mypage-api',
            'username' => ['email', 'name'],
            'password' => 'password',
            'userModel' => 'BaserCore.Users',
            'permissionType' => 1,
            'isRestApi' => true
        ]
    ],
    // アクセスルールにて、ログインページへのアクセスを許可する
    'BcPermission' => [
        'defaultAllows' => [
            '/mypage/plugin-name/users/login'
        ]
    ]
];
```

 
## ユーザーグループとプレフィックスの紐付け
上記の設定ファイルを記述すると、ユーザーグループの編集画面より、各ユーザーグループごとにどのプレフィックスにアクセスができるようにするか設定を行う事ができます。

また、それぞれのプレックスについて、フルアクセスか、限定アクセスかを選択でき、限定アクセスの場合、アクセスルール設定より、詳細な設定が行えます。

ただし、システム管理グループについては、「管理システム」の設定を変更する事はできません。

 
## コントローラーの配置とアクセス

上記のマイページの例では、次のようにプレフィックス用のフォルダを配置し、そこにコントローラーを配置します。

```shell
/plugins/PluginName/src/Controler/Mypage/UsersController.php
```

login メソッドにアクセスする場合は、次のようなURLでアクセスする事となります。

```shell
https://localhost/mypage/plugin-name/users/login
```

 
## REST API
プレフィックス認証の設定において、`type` を `Jwt` に設定すると、RESTful なルーティングと拡張子 .json のルーティングを自動で行います。

```shell
https://localhost/mypage/plugin-name/users/login.json
(GET) https://localhost/mypage/plugin-name/users.json → index アクションにルーティング
(GET) https://localhost/mypage/plugin-name/users/1.json → view アクションにルーティング
(POST) https://localhost/mypage/plugin-name/users/1.json → add アクションにルーティング
(PUT) https://localhost/mypage/plugin-name/users/1.json → edit アクションにルーティング
(DELETE) https://localhost/mypage/plugin-name/users/1.json → edit アクションにルーティング
```

 
## ユーザーの確認
認証におけるユーザーの確認は `UsersTable::findAvailable()` にて実装されています。  
認証条件は次のとおりです。

- パスワードが一致している
- ステータスが有効である
- 現在アクセスしているプレフィックスへのアクセス権を持っている


　
