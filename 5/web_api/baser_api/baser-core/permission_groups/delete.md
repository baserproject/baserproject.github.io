# アクセスグループの削除

指定したアクセスグループ情報を削除します。

### 実行可能な権限
```
システム管理者以上
```

### リクエスト
```
DELETE baser/api/baser-core/permission_groups/{permissionGroupsId}.json
``` 

### パスパラメーター

| パラメーター名   | 型   | 必須  | 内容                |
|-----------|-----|-----|-------------------|
| permissionGroupsId        | 数値  | ●   | アクセスグループのID              |

### レスポンス例
#### レスポンスボディ
```json
{
  "permissionGroup": {
    "id": 57,
    "name": "ブログ閲覧",
    "type": "Admin",
    "plugin": "BaserCore",
    "status": true,
    "created": "2023-03-28T15:17:22+09:00",
    "modified": "2023-03-28T15:17:22+09:00"
  },
  "message": "ルールグループ「ブログ閲覧」を削除しました。"
}

```
