# テーマファイルの編集

対象のファイルを編集します。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
POST /baser/api/admin/bc-theme-file/theme_files/edit.json
```

### リクエストボディ

| パラメーター名   | 型   | 必須  | 内容         |
|-----------|-----|-----|------------|
| theme   | 数値  | ●   | テーマ        |
| type   | 文字列 | ●　  | タイプ        |
| path   | 文字列 | ●　  | パス         |
| plugin   | 数値 | ●   | プラグイン      |
| base_name   | 数値 | ●   | ファイル名      |
| contents   | 数値 | ●   | ファイルのコンテンツ |
| ext   | 数値 | ●   | 拡張子        |

## レスポンス例

### レスポンスボディ

```json
{
  "message": "ファイル「base_name_2.php」を更新しました。",
  "entity": {
    "fullpath": "/var/www/html/plugins/BcThemeSample/templates/layout/base_name_2.php",
    "parent": "/var/www/html/plugins/BcThemeSample/templates/layout/",
    "name": "base_name_2.php",
    "base_name": "base_name_2",
    "ext": "php",
    "type": "text",
    "path": null,
    "contents": "this is a content changed!"
  },
  "errors": null
}

```
