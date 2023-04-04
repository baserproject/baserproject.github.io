# テーマフォルダの表示

対象のフォルダを表示します。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
GET /baser/api/admin/bc-theme-file/theme_folders/view.json
```

### クエリパラメーター

| パラメーター名   | 型   | 必須  | 内容        |
|-----------|-----|-----|-----------|
| theme   | 数値  | ●   | テーマ       |
| type   | 文字列 | ●　  | タイプ       |
| path   | 文字列 | ●　  | パス        |
| plugin   | 数値 | ●   | プラグイン     |

## レスポンス例

### レスポンスボディ

```json
{
    "entity": {
        "fullpath": "/var/www/html/plugins/BcThemeSample/templates/layout",
        "type": "folder",
        "parent": "/var/www/html/plugins/BcThemeSample/templates/",
        "name": "layout",
        "path": null
    },
    "message": null
}
```
