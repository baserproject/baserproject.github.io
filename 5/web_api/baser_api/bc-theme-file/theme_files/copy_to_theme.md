# テーマファイルの現在のテーマにコピー

対象のファイルを現在のテーマの同階層にコピーします

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
POST /baser/api/admin/bc-theme-file/theme_files/copy_to_theme.json
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
  "message": "コアファイル base_name_1.php を テーマ BcFront の次のパスとしてコピーしました。\\n/plugins/bc-front/templates/layout/base_name_1.php。",
  "entity": null
}

```
