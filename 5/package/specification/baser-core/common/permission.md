# アクセスルール設計

## 認証
管理画面、APIともに、認証を必要とする事を前提として、認証が不要なメソッドについては、都度、コントローラーの `beforeFilter()` にて定義する。

```php
$this->Authentication->allowUnauthenticated(['view']);
```

 
## アクセス対象の定義
- URL：管理画面、または、APIのエンドポイント
- パラメーター：APIにおけるリクエストパラメーター

 
## URLアクセス制限
URLにおけるアクセス制限については、`BaserCore/AppController::beforeFilter()` にて、`PermissionsService::check()` を利用して行う。    
ログインしている事を前提とし、ユーザーグループごとの権限を判定する仕組みとし、権限がない場合は、Forbidden エラーを発生する。

### 判定方法
アクセス権限の判定方法については、permissions テーブルを参照し、所属するグループが対象URLについて許可となるデータを持っているかどうかで判定する。

### URL形式
permissions に保存する URLについては、ワイルドカードの利用を可とする。

```shell
# 設定値
/baser/admin/baser-core/sites/*
# 判定URL
/baser/admin/baser-core/sites/index   # 可
/baser/admin/baser-core/sites/edit/1  # 可

# 設定値
/baser/admin/baser-core/sites/*/1/*
# 判定URL
/baser/admin/baser-core/sites/index   # 不可
/baser/admin/baser-core/sites/index/1  # 可
/baser/admin/baser-core/sites/index/1/1  # 可
/baser/admin/baser-core/sites/index/2/1  # 不可
```

### アクセスルールの自動ビルド
アクセスルール（permissions）のデータは、baserCMSのインストール時、または、対象プラグインのインストール時に自動生成する。  
自動生成においては、`config/permission.php` 内の設定 `permission` を参照して行う。  

```php
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
設定がプラグインに存在しない場合は、次のURLを自動で登録する。

```shell
/baser/admin/plugin-name/*
```

また、グループごとに初期化して再度、自動ビルドを行う事ができる。

### システムURLの定義
管理画面よりAJAXとして呼び出すAPIについては、設定`BcPermission.defaultAllows` に登録しておく事で、強制的に制限を解除できる。

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
 
## パラメーターアクセス制限
パラメーターにおけるアクセス制限については、コントローラーの各メソッドごとに定義をします。  
権限がない場合は、Forbidden エラーを発生する。

 
## APIの利用設定について
`config/.env` 内の設定 `USE_CORE_API` によって、利用するかしないかの設定を可能とする。  
デフォルトはオフとする。

