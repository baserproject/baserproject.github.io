# アップローダープラグインの編集

既存のアップローダープラグイン設定を編集します。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
POST /baser/api/admin/bc-uploader/uploader_categories/edit.json
```

### リクエストボディ

| パラメーター名   | 型   | 必須  | 内容        |
|-----------|-----|-----|-----------|
| name   | 文字列  | ●   | 設定名       |
| value   | 文字列  | ●   | 設定値       |

## レスポンス例

### レスポンスボディ

```json
{
  "uploaderConfig": {
    "large_width": "100",
    "large_height": "500",
    "midium_width": "300",
    "midium_height": "300",
    "small_width": "150",
    "small_height": "150",
    "small_thumb": "1",
    "mobile_large_width": "240",
    "mobile_large_height": "240",
    "mobile_small_width": "100",
    "mobile_small_height": "100",
    "mobile_small_thumb": "1",
    "use_permission": "0",
    "layout_type": "panel"
  },
  "message": "アップローダープラグインを保存しました。",
  "errors": null
}
```
