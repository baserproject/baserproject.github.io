# テーマの新規追加

新しいテーマをアップロードします。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
POST /baser/api/baser-core/themes/apply/{siteId}/{theme}.json
```

### パスパラメーター

| パラメーター名 | 型    | 必須  | 内容    |
|---------|------|-----|-------|
| siteId　   | 数値	  | ●   | サイトID |
| theme　   | 文字列	 | ●   | テーマ名  |

## レスポンス例

### レスポンスボディ

```json
{
  "message": "テーマ「BcThemeSample2」を適用しました。",
  "theme": {
    "name": "BcThemeSample2",
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
  "siteId": 1,
  "errors": null
}
```
