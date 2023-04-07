# テーマフォルダの新規追加

新しくフォルダを作成します。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
POST /baser/api/admin/bc-theme-file/theme_folders.json
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
  "message": "フォルダ「/new_folder」を作成しました。",
  "themeFolder": {
    "fullpath": "/var/www/html/plugins/BcThemeSample/templates/layout//new_folder",
    "type": "folder",
    "parent": "/var/www/html/plugins/BcThemeSample/templates/layout/",
    "name": "/new_folder",
    "path": null
  },
  "errors": null
}

```
