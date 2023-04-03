# ユーザーグループの取得

ユーザーグループ情報を取得します。

### 実行可能な権限
```
システム管理者以上
```

### リクエスト
```
GET /baser/api/admin/baser-core/user_groups/{userGroupId}.json
``` 

### パスパラメーター

| パラメーター名             | 型   | 必須  | 内容                              |
|---------------------|-----|-----|---------------------------------|
| userGroupId | 数値  | ●   | ユーザーグループID |

### レスポンス例
#### レスポンスボディ
```json
{
    "userGroup": {
        "id": 1,
        "name": "admin edit",
        "title": "アドミン",
        "auth_prefix": "Admin",
        "auth_prefix_settings": "",
        "use_move_contents": true,
        "modified": "2023-03-29T17:00:58+09:00",
        "created": "2023-03-29T16:37:42+09:00",
        "users": [
            {
                "id": 1,
                "name": "",
                "real_name_1": "foo",
                "real_name_2": null,
                "email": "foo@example.com",
                "nickname": null,
                "created": "2023-03-13T12:36:41+09:00",
                "modified": "2023-03-13T12:36:41+09:00",
                "status": true,
                "_joinData": {
                    "id": 1,
                    "user_id": 1,
                    "user_group_id": 1,
                    "created": null,
                    "modified": null
                }
            }
        ]
    },
    "message": null
}

```
