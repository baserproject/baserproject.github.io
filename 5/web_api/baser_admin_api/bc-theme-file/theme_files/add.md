# テーマファイルの新規追加

新しくファイルを作成します。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
POST /baser/api/admin/bc-theme-file/theme_files.json
```

### リクエストボディ

| パラメーター名   | 型   | 必須  | 内容        |
|-----------|-----|-----|-----------|
| theme   | 数値  | ●   | テーマ       |
| type   | 文字列 | ●　  | タイプ       |
| path   | 文字列 | ●　  | パス        |
| base_name   | 数値 | ●　  | ファイル名     |
| contents   | 数値 | ●　  | ファイルコンテンツ |
| ext   | 数値 | ●   | ファイルの拡張子  |
| plugin   | 数値 | ●   | プラグイン     |
| parent   | 数値 | ●   | 親パス    |

## レスポンス例

### レスポンスボディ

```json
{
  "message": "ファイル「base_name_1.php」を作成しました。",
  "entity": {
    "fullpath": "/var/www/html/plugins/BcThemeSample/templates/layout/base_name_1.php",
    "parent": "/var/www/html/plugins/BcThemeSample/templates/layout/",
    "name": "base_name_1.php",
    "base_name": "base_name_1",
    "ext": "php",
    "type": "text",
    "path": null,
    "contents": "this is a content!"
  },
  "errors": null
}

```
