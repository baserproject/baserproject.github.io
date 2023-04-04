# テーマフォルダの一覧表示

コアテンプレートのファイルとフォルダの一覧を表示します。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
GET /baser/api/admin/bc-theme-file/theme_folders.json
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
    "themeFiles": [
        {
            "fullpath": "/var/www/html/plugins/bc-front/templates/layout/base_name_1.php",
            "parent": "/var/www/html/plugins/bc-front/templates/layout/",
            "name": "base_name_1.php",
            "base_name": "base_name_1",
            "ext": "php",
            "type": "text",
            "path": null,
            "contents": "this is a content!"
        },
        ...
    ],
    "message": null
}
```
