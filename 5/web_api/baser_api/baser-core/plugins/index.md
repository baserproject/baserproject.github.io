# プラグイン情報の一覧取得

プラグイン情報の一覧を取得します。

### 実行可能な権限
```
システム管理者以上
```

### リクエスト
```
GET /baser/api/baser-core/plugins.json
```
### レスポンス例
#### レスポンスボディ
```json
{
  "plugins": [
    {
      "id": 1,
      "name": "BcSearchIndex",
      "title": "サイト内検索",
      "version": "5.0.0-beta",
      "status": true,
      "db_init": null,
      "priority": 1,
      "created": null,
      "modified": "2023-03-15T17:20:11+09:00",
      "update": false,
      "core": true,
      "permission": 1,
      "registered": true,
      "screenshot": false,
      "type": "CorePlugin",
      "description": "サイト内の横断検索機能",
      "author": "baserCMS User Community",
      "url": "https://basercms.net",
      "installMessage": ""
    },
    ...
  ]
}

```
