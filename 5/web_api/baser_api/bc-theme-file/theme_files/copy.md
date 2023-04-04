# テーマファイルのコピー

指定したファイルをコピーします。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
POST /baser/api/admin/bc-theme-file/theme_files/copy.json
```

### リクエストボディ

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
  "message": "ファイル「base_name_1.php」をコピーしました。",
  "themeFile": {
    "fullpath": "/var/www/html/plugins/BcThemeSample/templates/layout/base_name_1_copy.php",
    "parent": "/var/www/html/plugins/BcThemeSample/templates/layout/",
    "name": "base_name_1_copy.php",
    "base_name": "base_name_1_copy",
    "ext": "php",
    "type": "text",
    "path": null,
    "contents": "this is a content!"
  }
}

```
