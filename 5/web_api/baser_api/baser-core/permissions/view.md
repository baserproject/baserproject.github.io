# アクセス制限設定情報の取得

アクセス制限設定情報を取得します。

### 実行可能な権限
```
システム管理者以上
```

### リクエスト
```
GET /baser/api/baser-core/permissions/{permissionId}.json
``` 

### パスパラメーター

| パラメーター名         | 型   | 内容       |
|-----------------|-----|----------|
| permissionId | 数値  |アクセス制限設定のID |

### レスポンス例
#### レスポンスボディ
```json
{
  "permission": {
    "id": 2,
    "no": 2,
    "sort": 2,
    "permission_group_id": 2,
    "name": "一覧",
    "user_group_id": 2,
    "url": "/baser/admin/baser-core/contents/index",
    "auth": true,
    "method": "*",
    "status": true,
    "created": "2023-03-13T12:36:43+09:00",
    "modified": "2023-03-13T12:36:43+09:00",
    "permission_group": {
      "id": 2,
      "name": "コンテンツ管理",
      "type": "Admin",
      "plugin": "BaserCore",
      "status": true,
      "created": "2023-03-13T12:36:43+09:00",
      "modified": "2023-03-13T12:36:43+09:00"
    },
    "user_group": {
      "id": 2,
      "name": "operators",
      "title": "サイト運営",
      "auth_prefix": "Admin",
      "auth_prefix_settings": "{\"Admin\":{\"type\":\"2\"},\"Api\":{\"type\":\"2\"}}",
      "use_move_contents": false,
      "modified": null,
      "created": "2023-03-13T12:36:40+09:00"
    }
  },
  "message": null
}

```
