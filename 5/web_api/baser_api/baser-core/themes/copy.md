# テーマのコピー

指定したテーマ情報をコピーします。

### 実行可能な権限
```
システム管理者以上
```

### リクエスト
```
POST /baser/api/baser-core/themes/copy/{theme}.json
``` 

### パスパラメーター

| パラメーター名   | 型   | 必須  | 内容   |
|-----------|-----|-----|------|
| theme        | 文字列  | ●   | テーマ名 |

### レスポンス例
#### レスポンスボディ
```json
{
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
  "message": "テーマ「BcThemeSample2」をコピーしました。"
}

```
