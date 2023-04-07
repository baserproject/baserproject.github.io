# ユーザー情報の取得

ユーザー情報を取得します。

### 実行可能な権限
```
システム管理者
```
 
### リクエスト
```
GET /baser/api/admin/baser-core/users/{userId}.json
``` 

### パスパラメーター

| パラメーター名       | 型   | 内容                   |
|---------------|-----|----------------------|
| userId        | 数値  | ユーザーのID              |

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
        "created": "2023-03-21T12:43:06+09:00",
        "modified": "2023-03-21T12:43:06+09:00",
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
                "created": "2023-03-21T12:43:05+09:00",
                "_joinData": {
                    "id": 1,
                    "user_id": 1,
                    "user_group_id": 1,
                    "created": null,
                    "modified": null
                }
            },
            ...
        ]
    },
    "message": null
}
```
