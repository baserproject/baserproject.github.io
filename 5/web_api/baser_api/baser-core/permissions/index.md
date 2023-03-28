# アクセス制限設定の取得

アクセス制限設定情報の一覧を取得します。

### 実行可能な権限
```
システム管理者以上
```
 
### リクエスト
```
GET /baser/api/baser-core/permissions/index/{permissionGroupId}.json
``` 

### パスパラメーター

| パラメーター名   | 型   | 必須  | 内容         |
|-----------|-----|-----|------------|
| permissionGroupId        | 数値  | ●   | ユーザーグループID |

### クエリパラメーター

| パラメーター名           | 型 | 内容              |
|-------------------| --- |-----------------|
| permission_group_id            | 数値 | アクセスルールグループID   |
| permission_group_type             | 文字列 | アクセスルールグループのタイプ |

### レスポンス例
#### レスポンスボディ
```json
{
  "permissions": [
    {
      "id": 269,
      "no": 269,
      "sort": 269,
      "permission_group_id": null,
      "name": "閲覧のみ",
      "user_group_id": 1,
      "url": null,
      "auth": false,
      "method": "*",
      "status": true,
      "created": "2023-03-28T13:17:00+09:00",
      "modified": "2023-03-28T13:17:00+09:00"
    },
   ...
```
