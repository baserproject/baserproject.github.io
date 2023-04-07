# アップローダープラグインの取得

既存のアップローダープラグイン設定を取得します。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
GET /baser/api/admin/bc-uploader/uploader_categories/view.json
```

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
  }
}
```
