# テーマフォルダの編集

対象のフォルダを編集します。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
POST /baser/api/admin/bc-theme-file/theme_folders/edit.json
```

### リクエストボディ

| パラメーター名   | 型   | 必須  | 内容    |
|-----------|-----|-----|-------|
| theme   | 数値  | ●   | テーマ   |
| type   | 文字列 | ●　  | タイプ   |
| path   | 文字列 | ●　  | パス    |
| plugin   | 数値 | ●   | プラグイン |
| name   | 数値 | ●   | フォルダ名 |

## レスポンス例

### レスポンスボディ

```json
{
  "message": "フォルダ名を「edit_folder」に変更しました。",
  "themeFolder": {
    "fullpath": "/var/www/html/plugins/BcThemeSample/templates/layout/edit_folder",
    "type": "folder",
    "parent": "/var/www/html/plugins/BcThemeSample/templates/layout/",
    "name": "edit_folder",
    "path": null
  },
  "errors": null
}
```
