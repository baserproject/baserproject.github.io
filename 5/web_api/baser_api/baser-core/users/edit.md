# ユーザーの編集

指定したユーザー情報を編集します。

### 実行可能な権限
```
システム管理者（自身を除くシステム管理者の編集はユーパーユーザーのみ）
```
 
### リクエスト
```
PATCH /baser/api/baser-core/users/{userId}.json
``` 

### パスパラメーター

| パラメーター名       | 型   | 内容                   |
|---------------|-----|----------------------|
| userId        | 数値  | ユーザーのID              |

### リクエストボディ

| パラメーター名             | 型   | 必須  | 内容                              |
|---------------------|-----|-----|---------------------------------|
| user_groups[_ids][] | 数値  | ●   | ユーザーグループID<br>複数所属させる場合は複数定義する。 |
| real_name_1         | 文字列 | ●   | 本名（姓）                           |
| real_name_2         | 文字列  |     | 本名（名）                           |
| name                | 文字列  |     | アカウント名。ログインで利用可能。               |
| email               | 文字列  | ●   | メールアドレス。ログインで利用可能。              |
| password_1          | 文字列  | ●   | パスワード                           |
| password_2          | 文字列  | ●   | 確認要パスワード                        |
| nickname            | 文字列  |     | ニックネーム                          |

### レスポンス例
#### レスポンスボディ
```json
{
    "user": {
        "id": 1,
        "name": "",
        "real_name_1": "foo",
        "real_name_2": null,
        "email": "foo@example.com",
        "nickname": null,
        "created": "2023-03-13T11:58:55+09:00",
        "modified": "2023-03-14T10:56:20+09:00",
        "status": true,
        "user_groups": [
            {
                "id": 1,
                "name": "admins",
                "title": "システム管理",
                "auth_prefix": "Admin,Api",
                "auth_prefix_settings": "",
                "use_move_contents": true,
                "modified": null,
                "created": "2023-03-13T11:58:55+09:00",
                "_joinData": {
                    "id": 1,
                    "user_id": 1,
                    "user_group_id": 1,
                    "created": null,
                    "modified": null
                }
            }
        ],
        "login_user_id": "1"
    },
    "message": "ユーザー「foo」を更新しました。",
    "errors": null
}
```
