# ユーザーの追加

ユーザーを新しく登録します。

### 実行可能な権限
```
システム管理者（システム管理者の追加はユーパーユーザーのみ）
```
 
### リクエスト
```
POST /baser/api/admin/baser-core/users.json
``` 

### リクエストボディ

| パラメーター名             | 型   | 必須  | 内容                              |
|---------------------|-----|-----|---------------------------------|
| user_groups[_ids][] | 数値  | ●   | ユーザーグループID<br>複数所属させる場合は複数定義する。 |
| real_name_1         | 文字列 | ●   | 本名（姓）                           |
| real_name_2         | 文字列  |     | 本名（名）                           |
| name                | 文字列  |     | アカウント名。ログインで利用可能。|
| email               | 文字列  | ●   | メールアドレス。ログインで利用可能。|
| password_1          | 文字列  | ●   | パスワード                           |
| password_2          | 文字列  | ●   | 確認要パスワード                        |
| nickname | 文字列  |     | ニックネーム                          |

### レスポンス例
#### レスポンスボディ
```json
{
    "message": "ユーザー「佐藤」を追加しました。",
    "user": {
        "id": 4
        "real_name_1": "佐藤",
        "email": "foo1@example.com",
        "password_1": "demodemo",
        "password_2": "demodemo",
        "real_name_2": "二郎",
        "name": "sato",
        "nickname": "jiro",
        "created": "2023-03-14T10:48:12+09:00",
        "modified": "2023-03-14T10:48:12+09:00",
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
                    "user_id": 4,
                    "user_group_id": 1,
                    "created": "2023-03-14T10:48:12+09:00",
                    "modified": "2023-03-14T10:48:12+09:00",
                    "id": 4
                }
            },
            ...
        ]
    },
    "errors": null
}
```
