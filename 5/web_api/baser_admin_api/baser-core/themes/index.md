# テーマ情報の一覧取得

テーマ情報の一覧を取得します。

### 実行可能な権限
```
システム管理者以上
```

### リクエスト
```
GET /baser/api/admin/baser-core/themes.json
```
### レスポンス例
#### レスポンスボディ
```json
{
  "themes": [
    {
      "name": "BcThemeSample",
      "created": null,
      "version": "",
      "status": false,
      "update": false,
      "core": false,
      "permission": 1,
      "registered": false,
      "screenshot": true,
      "type": "Theme",
      "title": "サンプルテーマ",
      "description": "制作用のサンプルテーマです。",
      "author": "baserCMS User Community",
      "url": "https://basercms.net",
      "installMessage": ""
    },
    ...
  ]
}


```
