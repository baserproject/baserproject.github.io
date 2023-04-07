# アクセスルールグループ情報の取得

指定したアクセスルールグループを取得します。

### 実行可能な権限
```
システム管理者以上
```

### リクエスト
```
GET /baser/api/admin/baser-core/permission_groups/{permissionGroupId}.json
``` 

### パスパラメーター

| パラメーター名         | 型   | 内容       |
|-----------------|-----|----------|
| permissionGroupId | 数値  |アクセスグループのID |

### レスポンス例
#### レスポンスボディ
```json
{
  "permissionGroup": {
    "id": 1,
    "name": "コンテンツフォルダ管理",
    "type": "Admin",
    "plugin": "BaserCore",
    "status": true,
    "created": "2023-03-13T12:36:43+09:00",
    "modified": "2023-03-13T12:36:43+09:00"
  },
  "message": null
}
```
