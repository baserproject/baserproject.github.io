# アクセスグループの取得

アクセスグループ情報の一覧を取得します。

### 実行可能な権限
```
システム管理者以上
```
 
### リクエスト
```
GET /baser/api/admin/baser-core/permission_groups.json
```

### クエリパラメーター

| パラメーター名   | 型   | 必須  | 内容                |
|-----------|-----|-----|-------------------|
| user_group_id        | 数値  | ●   | ユーザーグループID              |


### レスポンス例
#### レスポンスボディ
```json
{
  "permissionGroups": [
    {
      "id": 1,
      "name": "コンテンツフォルダ管理",
      "type": "Admin",
      "plugin": "BaserCore",
      "status": true,
      "created": "2023-03-13T12:36:43+09:00",
      "modified": "2023-03-13T12:36:43+09:00"
    },
    ...
  ]
}

```
