# テーマファイルの画像のサムネイル表示

対象の画像のサムネイルを表示します。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
GET /baser/api/admin/bc-theme-file/theme_files/img_thumb.json
```

### クエリパラメーター

| パラメーター名   | 型   | 必須  | 内容    |
|-----------|-----|-----|-------|
| theme   | 数値  | ●   | テーマ   |
| type   | 文字列 | ●　  | タイプ   |
| path   | 文字列 | ●　  | パス    |
| plugin   | 数値 | ●   | プラグイン |
| height   | 数値 | ●   | 高さ    |
| width   | 数値 | ●   | 横     |

## レスポンス例

### レスポンスボディ

```json
{
  "imgThumb": "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",
  "message": null,
  "errors": null
}

```
