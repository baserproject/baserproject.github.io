# アクセス制限設定の追加

アクセス制限設定を追加します。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
POST /baser/api/admin/baser-core/permissions.json
```

### リクエストボディ

| パラメーター名 | 型    | 必須  | 内容                |
|---------|------|-----|-------------------|
| name　   | 文字列	 | ●   | 設定名               |
| user_group_id　   | 数字	  | ●   | ユーザーグループ               |
| no　   | 数字	  |     | 設定No               |
| sort　   | 数字	  |     | 並び順               |
| auth　   | 数字	  |     | アクセス権                |
| method　   | 文字列	  |     | メソッド               |
| status　   | 真偽値	  |     | 利用状態               |
| permission_group_id　   | 数字	  |     | アクセスルールグループID               |
| url　   | 数字	  |     | 対象URL               |
## レスポンス例

### レスポンスボディ

```json
{
  "message": "新規アクセスルール「閲覧のみ」を追加しました。",
  "permission": {
    "name": "閲覧のみ",
    "user_group_id": 1,
    "permission_group_id": 5,
    "url": "/*",
    "no": 272,
    "sort": 272,
    "auth": false,
    "method": "*",
    "status": true,
    "created": "2023-03-28T13:21:54+09:00",
    "modified": "2023-03-28T13:21:54+09:00",
    "id": 272
  },
  "errors": null
}
```
