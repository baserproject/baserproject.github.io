# テーマの削除

指定したテーマ情報を削除します。

### 実行可能な権限
```
システム管理者以上
```

### リクエスト
```
DELETE /baser/api/admin/baser-core/themes/delete/{theme}.json
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
  "message": "テーマ「BcThemeSample2」を削除しました。"
}

```
