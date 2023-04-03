# ユーザーグループの追加

ユーザーグループを新しく登録します。

### 実行可能な権限
```
システム管理者（システム管理者の追加はユーパーユーザーのみ）
```

### リクエスト
```
POST /baser/api/admin/baser-core/user_groups.json
``` 

### クエリパラメーター

| パラメーター名           | 型 | 内容          |
|-------------------| --- |-------------|
| exclude_admin            | 真偽値 | ユーパーユーザーを除外 |
| order             | 文字列 | 並び替え        |

### レスポンス例
#### レスポンスボディ
```json
{
  "userGroups": [
    {
      "id": 1,
      "name": "admin edit",
      "title": "アドミン",
      "auth_prefix": "Admin",
      "auth_prefix_settings": "",
      "use_move_contents": true,
      "modified": "2023-03-29T17:00:58+09:00",
      "created": "2023-03-29T16:37:42+09:00"
    },
    ...
  ]
}

```
