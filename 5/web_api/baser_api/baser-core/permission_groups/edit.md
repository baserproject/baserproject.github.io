# アクセスグループのの編集

指定したアクセスグループの情報を編集します。

### 実行可能な権限
```
システム管理者以上
```

### リクエスト
```
PATCH baser/api/admin/baser-core/permission_groups/{permissionGroupsId}.json
``` 

### パスパラメーター

| パラメーター名         | 型   | 内容        |
|-----------------|-----|-----------|
| permissionGroupsId | 数値  | アクセスグループのID |

### リクエストボディ

| パラメーター名 | 型    | 必須  | 内容                |
|---------|------|-----|-------------------|
| name　   | 文字列	 | ●   | アクセスルール名               |
| type　   | 文字列	  |    | タイプ               |
| plugin　   | 文字列	  |     | プラグイン               |
| status　   | 真偽値	  |     | 利用状態               |

### レスポンス例
#### レスポンスボディ
```json
{
  "permissionGroup": {
    "id": 58,
    "name": "ブログ閲覧",
    "type": "Admin",
    "plugin": "BaserCore",
    "status": true,
    "created": "2023-03-28T15:21:50+09:00",
    "modified": "2023-03-28T15:21:50+09:00"
  },
  "message": "ルールグループ「ブログ閲覧」を更新しました。",
  "errors": null
}

```
