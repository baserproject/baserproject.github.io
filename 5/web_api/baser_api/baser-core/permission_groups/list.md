# アクセスルールグループのリスト

アクセスグループ情報をリストします。

### 実行可能な権限
```
システム管理者以上
```

### リクエスト
```
GET /baser/api/baser-core/permission_groups/list.json
```

### レスポンス例
#### レスポンスボディ
```json
{
  "permissionGroups": {
    "1": "コンテンツフォルダ管理",
    ...
  }
}
```
