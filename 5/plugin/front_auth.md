# フロントページ認証

baserCMSでは、フロントエンドのWebページに簡単に認証をかけることができます。  
ここでは認証をかけ、アクセスルールと、ログインユーザーを登録する手順を説明します。

## 設定ファイル変更
設定ファイルにてフロント認証を有効化します。

```php
// /plugins/YourPlugin/config/setting.php
return [
    'BcPrefixAuth' => [
        'Front' => [
            'disabled' => false
        ]
    ]
];
```

この状態で、ブラックリスト方式で認証がかかった状態となります。  
初期状態では拒否設定が何もないのでフルアクセスする事ができます。

ホワイトリスト方式にするには、`permissionType` を `1` に変更します。
この場合、フロントページにアクセスすると、ログインページにリダイレクトします。

```php
// /plugins/YourPlugin/config/setting.php
return [
    'BcPrefixAuth' => [
        'Front' => [
            'permissionType' => 1
        ]
    ]
];
```

なお、`BcPrefixAuth` の詳細設定については、 [プレフィックス認証](./prefix_auth) を参考にしてください。

## アクセスルールの追加
管理画面のメニューにて、ユーザー管理 → アクセスルールグループ と移動します。  

ユーザーグループを「ゲスト」に切り替えます。

その上で、デフォルトで、「フロントページ その他」というグループが登録されていますので、編集画面に遷移します。  

「ルール」の「新規追加」ボタンより、アクセスルールを追加します。

ブラックリスト方式を前提として、例えば、`/news/*` というURLを、アクセスを「拒否」として登録すると、非ログインの状態にて、該当ページがフロントページのグローバルメニューより無くなります。 

## ユーザーグループの登録

管理画面のメニューにて、ユーザーグループ管理に遷移し、フロントにログインする事ができるユーザーグループを作成します。

作成の際、「認証プレフィックス設定」にて、「フロントページ」にチェックを入れ、「フルアクセス」を選択します。


## ユーザーの登録
管理画面のメニューにて、ユーザー管理に遷移し、フロントにログインする事ができるユーザーを作成します。  
作成の際、先程作成したユーザーグループに所属させます。


## ログイン
フロントページ用のログイン画面に移動します。

```shell
# ログインページのURL
https://your-domain/baser-core/users/login
```

作成したユーザーの情報を入力しログインを実行します。

先程、`/news/*` として拒否登録し、グローバルメニューより無くなったものが表示されている事を確認します。

　
