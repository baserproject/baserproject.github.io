# マイグレーション方針


　　
## File / Folder の取り扱い
CakePHP4 から、File、Folder クラスは非推奨となり、SplFileInfo、SplFileObject の利用が推奨されていますが、baserCMSでは利用箇所が多いため、一旦、そのまま利用してください。

　
## クラスメンバー変数へのアクセス
メンバー変数への直接アクセスはせず、セッター、ゲッターを配置するようにしてください。

　
## ビューで利用するデータの取得
ビューのテンプレートは、できるだけシンプルにするため、データの生成処理などを書かず、コントローラーかもしくはヘルパより取得します。

### コントローラーから取得
コントローラー内の処理が煩雑にならないよう、対象のサービスクラスを継承した、データ取得用のサービスクラスを準備し、一括で取得しビューに引き渡すようにしましょう。

データ取得用のサービスクラスの名称は、管理画面用の場合は、末尾に `AdminService` を付け、フロントエンド用の場合は、`FrontService` を付けます。

```php
UsersAdminService
UsersFrontService
```
取得用のメソッド名は、先頭に `getViewVarsFor` を付けて統一性を保つようにします。

```php
getViewVarsForAdd
```

```php
// ユーザー管理の新規登録画面の場合
public function add(UsersAdminServiceInterface $usersService)
{
    $this->set($usersService->getViewVarsForAdd());
}
```

### ヘルパから取得

対象画面でしか利用しないようなデータは、専用のヘルパを準備します。

ヘルパの名称は、管理画面用の場合は、末尾に `AdminHelper` を付け、フロントエンド用の場合は、`FrontHelper` を付けます。

```php
UsersAdminHelper
UsersFrontHelper
```

　
## モデルからサービスへの移行

モデルはテーブルへと移行となりますが、できるだけ対象となるエンティティの処理だけをテーブルにまとめあげるため、移行するメソッドのうち、外部のテーブルの処理を行うメソッドは、サービスへの移行を検討します。

　
## AjaxのAPIコントローラーへ移行

Ajaxのリクエスト対象の処理は、API用のコントローラーに移行するようにしてください。
