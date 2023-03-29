# ユーザーグループの編集

ユーザーグループを編集します。

### 実行可能な権限
```
システム管理者（システム管理者の追加はユーパーユーザーのみ）
```

### リクエスト
```
POST /baser/api/baser-core/user_groups/{userGroupId}.json
``` 

### パスパラメーター

| パラメーター名             | 型   | 必須  | 内容                              |
|---------------------|-----|-----|---------------------------------|
| userGroupId | 数値  | ●   | ユーザーグループID |

### リクエストボディ

| パラメーター名             | 型   | 必須  | 内容                              |
|---------------------|-----|-----|---------------------------------|
| name | 文字列  |     | ユーザーグループ名 |
| title         | 文字列 |     | 表示名                           |

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
  "message": "ユーザーグループ「admin edit」を更新しました。",
  "errors": null
}

```
