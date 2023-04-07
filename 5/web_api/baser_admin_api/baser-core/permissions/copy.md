# アクセス制限設定のコピー

アクセス制限設定情報をコピーします。

### 実行可能な権限
```
システム管理者以上
```

### リクエスト
```
POST /baser/api/admin/baser-core/permissions/copy/{permissionId}.json
``` 

### パスパラメーター

| パラメーター名   | 型   | 必須  | 内容                |
|-----------|-----|-----|-------------------|
| permissionId        | 数値  | ●   | 実体ID              |

### レスポンス例
#### レスポンスボディ
```json
{
  "message": "アクセスルール「編集」をコピーしました。",
  "permission": {
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
    "id": 273
  },
  "errors": null
}

```
