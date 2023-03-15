# ユーザー情報の取得

ユーザー情報を取得します。

### 実行可能な権限
```
システム管理者
```
 
### リクエスト
```
GET /baser/api/baser-core/users/{userId}.json
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
        "created": "2023-03-13T11:58:55+09:00",
        "modified": "2023-03-13T11:58:55+09:00",
        "status": true,
    },
    "message": null
}
```
