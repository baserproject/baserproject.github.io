# ユーザー一覧の取得

ユーザー情報の一覧を取得します。

### 実行可能な権限
```
システム管理者
```
 
### リクエスト
```
GET /baser/api/baser-core/users.json
``` 

### クエリパラメーター

| パラメーター名       | 型 | 内容                                 |
|---------------| --- |------------------------------------|
| status        | 文字列 | 【未実装】available：有効なユーザーのみ<br>all：全て |
| limit         | 数値 | 取得件数                               |
| page          | 数値 | ページ数                               |
| user_group_id | 数値 | ユーザーグループID                         |
| name          | 文字列 | アカウント名（あいまい検索）                     |
| email         | 文字列 | 【未実装】メールアドレス（あいまい検索）               |

### レスポンス例
#### レスポンスボディ
```json
{
    "users": [
        {
            "id": 1,
            "name": "",
            "real_name_1": "foo",
            "real_name_2": null,
            "email": "foo@example.com",
            "nickname": null,
            "created": "2023-03-13T11:58:55+09:00",
            "modified": "2023-03-13T11:58:55+09:00",
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
            ]
        }
    ]
}
```
