# テーマ情報の取得

指定したテーマ情報を取得します。

### 実行可能な権限
```
システム管理者以上
```

### リクエスト
```
GET /baser/api/admin/baser-core/themes/view/{theme}.json
``` 

### パスパラメーター

| パラメーター名         | 型   | 内容       |
|-----------------|-----|----------|
| theme | 数値  |テーマ名 |

### レスポンス例
#### レスポンスボディ
```json
{
  "theme": {
    "name": "BcFront",
    "created": null,
    "version": "5.0.0-beta",
    "status": false,
    "update": false,
    "core": true,
    "permission": 1,
    "registered": false,
    "screenshot": true,
    "type": "Theme",
    "title": "フロントテーマ",
    "description": "デフォルトのフロントテーマです。初期データが２つ入っています。\n■ default：サンプルデータあり版\n■ empty：サンプルデータなし版",
    "author": "baserCMS User Community",
    "url": "https://basercms.net",
    "installMessage": ""
  },
  "message": null
}

```
