# アクセス制限設定の削除

指定したアクセス制限設定情報を削除します。

### 実行可能な権限
```
システム管理者以上
```

### リクエスト
```
DELETE baser/api/baser-core/permissions/delete/{permissionId}.json
``` 

### パスパラメーター

| パラメーター名   | 型   | 必須  | 内容                |
|-----------|-----|-----|-------------------|
| permissionId        | 数値  | ●   | アクセス制限設定のID              |

### レスポンス例
#### レスポンスボディ
```json
{
  "permission": {
    "id": 273,
    "no": 273,
    "sort": 273,
    "permission_group_id": 1,
    "name": "編集",
    "user_group_id": 2,
    "url": "/baser/admin/baser-core/content_folders/edit/*",
    "auth": false,
    "method": "POST",
    "status": true,
    "created": "2023-03-13T12:36:43+09:00",
    "modified": "2023-03-13T12:36:43+09:00",
    "permission_group": {
      "id": 1,
      "name": "コンテンツフォルダ管理",
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
  "message": "アクセスルール「編集」を削除しました。"
}
```
