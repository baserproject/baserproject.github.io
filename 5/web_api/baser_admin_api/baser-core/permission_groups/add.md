# アクセスグループの追加

アクセスグループを追加します。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
POST /baser/api/admin/baser-core/permission_groups.json
```

### リクエストボディ

| パラメーター名 | 型    | 必須  | 内容                |
|---------|------|-----|-------------------|
| name　   | 文字列	 | ●   | アクセスルール名               |
| type　   | 文字列	  |    | タイプ               |
| plugin　   | 文字列	  |     | プラグイン               |
| status　   | 真偽値	  |     | 利用状態               |

## レスポンス例

### レスポンスボディ

```json
{
  "message": "ルールグループ「ブログ閲覧」を登録しました。",
  "permissionGroup": {
    "name": "ブログ閲覧",
    "type": "Admin",
    "plugin": "BaserCore",
    "satus": "1",
    "created": "2023-03-28T15:17:22+09:00",
    "modified": "2023-03-28T15:17:22+09:00",
    "id": 57
  },
  "errors": null
}

```
