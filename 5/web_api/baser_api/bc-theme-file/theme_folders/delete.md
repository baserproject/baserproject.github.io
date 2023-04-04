# テーマフォルダの削除

対象のフォルダを削除します。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
POST /baser/api/admin/bc-theme-file/theme_folders/delete.json
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
  "themeFolder": {
    "fullpath": "/var/www/html/plugins/BcThemeSample/templates/layout/new_folder2",
    "type": "folder",
    "parent": "/var/www/html/plugins/BcThemeSample/templates/layout/",
    "name": "new_folder2",
    "path": null
  },
  "message": "フォルダ「new_folder2」を削除しました。"
}
```
