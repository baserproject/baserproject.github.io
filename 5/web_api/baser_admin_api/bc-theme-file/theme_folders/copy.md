# テーマフォルダのコピー

指定したフォルダをコピーします。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
POST /baser/api/admin/bc-theme-file/theme_folders/copy.json
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
    "fullpath": "/var/www/html/plugins/BcThemeSample/templates/layout/new_folder_copy",
    "type": "folder",
    "parent": "/var/www/html/plugins/BcThemeSample/templates/layout/",
    "name": "new_folder_copy",
    "path": null
  },
  "message": "フォルダ「new_folder」をコピーしました。"
}
```
