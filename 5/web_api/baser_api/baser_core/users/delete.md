# ユーザーの削除

指定したユーザー情報を削除します。

### 実行可能な権限
```
システム管理者（システム管理者の削除はユーパーユーザーのみ）
```
 
### リクエスト
```
DELETE /baser/api/baser-core/users/{userId}.json
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
        "id": 4,
        "name": "sato",
        "real_name_1": "佐藤",
        "real_name_2": "二郎",
        "email": "foo1@example.com",
        "nickname": "jiro",
        "created": "2023-03-14T10:48:12+09:00",
        "modified": "2023-03-14T10:48:12+09:00",
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
                    "id": 4,
                    "user_id": 4,
                    "user_group_id": 1,
                    "created": "2023-03-14T10:48:12+09:00",
                    "modified": "2023-03-14T10:48:12+09:00"
                }
            }
        ]
    },
    "message": "ユーザー: 佐藤 を削除しました。"
}
```
