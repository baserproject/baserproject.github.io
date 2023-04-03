# アクセス制限設定の編集

指定したアクセス制限設定情報を編集します。

### 実行可能な権限
```
システム管理者以上
```

### リクエスト
```
PATCH baser/api/admin/baser-core/permissions/{permissionId}.json
``` 

### パスパラメーター

| パラメーター名         | 型   | 内容        |
|-----------------|-----|-----------|
| permissionId | 数値  | アクセス制限設定のID |

### リクエストボディ

| パラメーター名   | 型   | 必須  | 内容                |
|-----------|-----|-----|-------------------|
| name　   | 文字列	 | ●   | 設定名               |
| user_group_id　   | 数字	  | ●   | ユーザーグループ               |
| no　   | 数字	  |     | 設定No               |
| sort　   | 数字	  |     | 並び順               |
| auth　   | 数字	  |     | アクセス権                |
| method　   | 文字列	  |     | メソッド               |
| status　   | 数字	  |     | 利用状態               |
| permission_group_id　   | 数字	  |     | アクセスルールグループID               |
| url　   | 数字	  |     | 対象URL               |

### レスポンス例
#### レスポンスボディ
```json
{
  "permission": {
    "id": 272,
    "no": 272,
    "sort": 272,
    "permission_group_id": 5,
    "name": "閲覧可",
    "user_group_id": 2,
    "url": "/*",
    "auth": false,
    "method": "*",
    "status": true,
    "created": "2023-03-28T13:21:54+09:00",
    "modified": "2023-03-28T13:37:07+09:00",
    "permission_group": {
      "id": 5,
      "name": "アクセスルール管理",
      "type": "Admin",
      "plugin": "BaserCore",
      "status": true,
      "created": "2023-03-13T12:36:43+09:00",
      "modified": "2023-03-13T12:36:43+09:00"
    },
    "user_group": {
      "id": 1,
      "name": "admins",
      "title": "システム管理",
      "auth_prefix": "Admin,Api",
      "auth_prefix_settings": "",
      "use_move_contents": true,
      "modified": null,
      "created": "2023-03-13T12:36:40+09:00"
    }
  },
  "message": "アクセスルール「閲覧可」を更新しました。",
  "errors": null
}
```
