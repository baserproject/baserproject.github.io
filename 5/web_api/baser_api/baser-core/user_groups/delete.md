# ユーザーグループの削除

指定したユーザーグループ情報を削除します。

### 実行可能な権限
```
システム管理者以上
```

### リクエスト
```
DELETE baser/api/admin/baser-core/user_groups/{userGroupId}.json
``` 

### パスパラメーター

| パラメーター名   | 型   | 必須  | 内容                |
|-----------|-----|-----|-------------------|
| userGroupId        | 数値  | ●   | ユーザーグループID              |

### レスポンス例
#### レスポンスボディ
```json
{
    "userGroup": {
        "id": 4,
        "name": "admins_copy",
        "title": "システム管理_copy",
        "auth_prefix": "Admin,Api",
        "auth_prefix_settings": "",
        "use_move_contents": true,
        "modified": "2023-03-29T16:55:59+09:00",
        "created": "2023-03-29T16:55:59+09:00",
        "users": [
        ]
    },
    "message": "ユーザー: admins_copy を削除しました。"
}

```
