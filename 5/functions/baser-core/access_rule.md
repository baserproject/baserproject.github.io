# アクセスルール

アクセスルールとは、管理画面や Web API、フロントページ、独自で開発するマイページなど、各領域に対して、URLとHTTPメソッドベースでアクセスの可否を設定できる機能です。

## 領域について
アクセス設定の対象となる領域は、プレフィックスとして定義します。
詳細については [プレフィックス認証](../../plugin/prefix_auth) をご覧ください。

- Admin: 管理画面
- Api: Web API
- Front: フロントページ
- Mypage: マイページ（プレフィックス例のため、baserCMS本体には実装されていません）

## アクセス基本設定
アクセスルールを有効にするには、ユーザーグループに対して「限定アクセス」を設定する必要があります。  
（初期状態で「システム管理」グループ以外は限定アクセスに設定されています。）
  
Web API を有効にしたり、プレフィックス認証を追加した場合には、ユーザーグループの編集画面にて、プレフィックスごとについてアクセス基本設定として、「フルアクセス」なのか、「限定アクセス」なのかを設定できます。  

限定アクセスを設定した場合のみ、アクセスルールが有効となります。 
また、[プレフィックス認証](../../plugin/prefix_auth) の設定 により、「ホワイトリスト方式」か「ブラックリスト方式」を選択する事ができます。

### ホワイトリスト方式
はじめに全てを拒否し、許可するURLをホワイトリストとして追加していく方式。

### ブラックリスト方式
はじめに全てを許可し、拒否するURLをブラックリストとして追加していく方式。


## アクセスルール
アクセスルールとは、指定したURLパターンについて、許可、また拒否を設定し、アクセスを制御するための最小単位を指します。

### 設定内容
指定した httpメソッドと URLについて、許可、もしくは拒否を設定できます。  
なお、URLについてはワイルドカードが利用できます。

- *：全て
- GET：表示のみ
- POST：表示と編集

```shell
# ワイルドカードの設定例
/baser/admin/baser-core/contents/*
```

### アクセスルールの適用方法

複数の設定を登録することができ、設定順の上位より設定を上書き適用します。

```shell
/baser/admin/ はアクセス不可
/baser/admin/baser-core/users/index はアクセス可
/baser/admin/baser-core/users/delete/1 はアクセス不可
```
上記のような挙動にしたい場合は、次のように設定します。
```shell
/baser/admin/* : 拒否
/baser/admin/baser-core/users/* : 許可
/baser/admin/baser-core/users/delete/* : 拒否
```
その他にもワイルドカードは次のような使い方も可能です。
```shell
# 設定値
/baser/admin/baser-core/sites/*/1/*
# 判定URL
/baser/admin/baser-core/sites/index   # 不可
/baser/admin/baser-core/sites/index/1  # 可
/baser/admin/baser-core/sites/index/1/1  # 可
/baser/admin/baser-core/sites/index/2/1  # 不可
```

### アクセスルール適用時のの挙動
#### URLアクセス
対象のURLにアクセスする際、現在のログインユーザーに設定されたアクセス制限設定を参照し、対象リンクのURLがアクセス可能かどうかを判定します。

アクセス可能な場合は、アクションを実行し、アクセス不可の場合は、ダッシュボードにリダイレクトします。

#### リンク表示切り替え
管理画面内のリンクを表示する際、現在のログインユーザーに設定されたアクセス制限設定を参照し、
対象リンクのURLがアクセス可能かどうかを判定します。

アクセス可能な場合は、リンクを表示し、アクセス不可の場合は、表示しません。  
`BcBaserHelper::link()`、`BcBaserHelper::getLink()` を利用している場合のみ上記処理を適用します。



## アクセスルールグループ
アクセスルールグループとは、アクセスルールをカテゴライズして取りまとめたグループです。

編集画面では、アクセスルールグループにぶら下がる、アクセスルールを全て表示し、各ルールの権限とアクセス可否を一括で保存することができます。

また、アクセスルールグループに利用状態を持ち、アクセスルールグループの利用状態が無効の場合は、配下のルールも全て無効の取り扱いとなります。その際、他のユーザーグループにおいても無効となります。

## アクセスルールの構築と再構築
初期状態のアクセスルールは、baserCMSコアのインストール時、コアプラグインのインストール時、各プラグイン内に設置された、`/config/permission.php` を参照し自動的に構築します。

また、アクセスグループ一覧より、各ユーザーグループごとに、アクセスルールを再構築することもできます。その際、アクセスルールを変更していた場合は初期化されてしまうので注意が必要です。

```php
// /config/permission.php の例
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
設定がプラグインに存在しない場合は、次のURLを自動で登録します。

```shell
/baser/admin/{plugin-name}/*
```

## システムURLの定義
管理画面よりAJAXとして呼び出すAPIについては、設定 `BcPermission.defaultAllows` に登録しておく事で、強制的に制限を解除できます。

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
