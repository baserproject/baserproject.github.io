# ユーザーグループのコピー

ユーザーグループをコピーします。

### 実行可能な権限
```
システム管理者（システム管理者の追加はユーパーユーザーのみ）
```

### リクエスト
```
POST /baser/api/baser-core/user_groups/copy/{userGroupId}.json
``` 

### パスパラメーター

| パラメーター名             | 型   | 必須  | 内容         |
|---------------------|-----|-----|------------|
| userGroupId | 数値  | ●   | ユーザーグループID |

### レスポンス例
#### レスポンスボディ
```json
{
  "message": "ユーザーグループ「admins」をコピーしました。",
  "userGroup": {
    "name": "admins_copy",
    "title": "システム管理_copy",
    "auth_prefix": "Admin,Api",
    "auth_prefix_settings": "",
    "use_move_contents": true,
    "created": "2023-03-29T16:55:59+09:00",
    "modified": "2023-03-29T16:55:59+09:00",
    "id": 4
  }
}

```
