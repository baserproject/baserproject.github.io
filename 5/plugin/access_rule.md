# アクセスルール

アクセスルールは、認証を前提とした認可です。  
認証が完了したユーザーに紐づくユーザーグループごとに、各コンテンツへのアクセス権限を設定することができます。

## URLアクセス制限
各コンテンツへのアクセス権限は、URLをベースとしており、
`BaserCore/AppController::beforeFilter()` にて、`PermissionsService::check()` を利用して行なっています。
権限がない場合は、Forbidden エラーを発生します。

### 判定方法
アクセス権限の判定方法については、permissions テーブルを参照し、所属するグループが対象URLについて許可となるデータを持っているかどうかで判定します。

### URL形式
permissions に保存する URLについては、ワイルドカードが利用できます。

```shell
# 設定値：/baser/admin/baser-core/sites/*
/baser/admin/baser-core/sites/index   # 可
/baser/admin/baser-core/sites/edit/1  # 可

# 設定値：/baser/admin/baser-core/sites/*/1/*
/baser/admin/baser-core/sites/index   # 不可
/baser/admin/baser-core/sites/index/1  # 可
/baser/admin/baser-core/sites/index/1/1  # 可
/baser/admin/baser-core/sites/index/2/1  # 不可
```

## アクセスルールの自動ビルド
アクセスルール（permissionsテーブル）のデータは、baserCMSのインストール時、または、対象プラグインのインストール時に自動生成する仕様となっています。

## アクセスルールファイル
自動生成においては、各プラグイン内のアクセスルールファイル `/config/permission.php` 内の設定キー `permission` を参照して行いますが、設定がプラグインに存在しない場合は、次のURLを自動で登録し、全て許可する仕様となっています。

```shell
/baser/admin/plugin-name/*
```

機能ごとの細かい制御や、ユーザーの利便性を考えた場合にアクセスルールグループごとに設定できた方が便利ですので、複数画面が存在するプラグインの場合は、できる限りアクセスルールファイルを準備しましょう。

アクセスルールファイルの作成例は次をご覧ください。

```php
// /plugins/YourPlugin/config/setting.php
return [
    'permission' => [
        // アクセスルールグループ識別名
        'UsersAdmin' => [
            // アクセスルールグループタイトル
            'title' => 'ユーザー管理',
            // プラグイン名
            'plugin' => 'BaserCore',
            // タイプ（Admin / Api）
            'type' => 'Admin',
            // アクセスルールのアイテム
            'items' => [
                // アクセスルールの識別名
                'Index' => [
                    // アクセスルールタイトル
                    'title' => '一覧',
                    // アクセス対象のURL
                    'url' => '/baser/admin/baser-core/users/index',
                    // メソッド（* / GET / POST）
                    'method' => '*',
                    // アクセス可否
                    'auth' => false
                ],
                'Add' => [
                    'title' => '新規登録',
                    'url' => '/baser/admin/baser-core/users/add',
                    'method' => 'POST',
                    'auth' => false
                ],
                'Edit' => [
                    'title' => '編集',
                    'url' => '/baser/admin/baser-core/users/edit/*',
                    'method' => 'POST',
                    'auth' => false
                ],
                'EditSelf' => [
                    'title' => '自身の編集',
                    'method' => 'POST',
                    'url' => '/baser/admin/baser-core/users/edit/{loginUserId}',
                    'auth' => true
                ],
                'Delete' => [
                    'title' => '削除',
                    'method' => 'POST',
                    'url' => '/baser/admin/baser-core/users/edit/*',
                    'auth' => false
                ]
            ]
        ]
    ]
];
```

### ログインユーザーID
なお、アクセスルールファイルにおいて、`{loginUserId}` という特殊な文字列を利用することが可能です。
こちらには、ログインしているユーザーのIDが自動的に設定されます。

### 再ビルド
アクセスルールは、管理画面にてグループごとに初期化して、再度、自動ビルドを行う事ができます。


## システムURLの定義
強制的にアクセス権限を与えたいURLについては、設定 `BcPermission.defaultAllows` にシステムURLとして登録しておく事で、強制的に制限を解除できます。

```php
return [
    'BcPermission' => [
        'defaultAllows' => [
            '/baser/admin/baser-core/dashboard/*',
            '/baser/admin/baser-core/dblogs/*',
            '/baser/admin/baser-core/users/logout',
            '/baser/admin/baser-core/users/back_agent'
        ]
    ]    
];
```


