# ウィジェットエリアの編集

指定したウィジェットエリアを編集します。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
PATCH /baser/api/admin/bc-widget-area/widget_areas/{widgetAreaId}.json
```

### パスパラメーター

| パラメーター名   | 型   | 必須  | 内容        |
|-----------|-----|-----|-----------|
| widgetAreaId   | 数値  | ●   |  ウィジェットエリアID       |

### リクエストボディ

| パラメーター名   | 型   | 必須  | 内容        |
|-----------|-----|-----|-----------|
| name   | 文字列  | ●   | ウィジェットエリア名       |
| widgets   | 文字列  | ●   | ウィジェット構成内容       |

## レスポンス例

### レスポンスボディ

```json
{
  "widgetArea": {
    "id": 5,
    "name": "ブログサイドバー",
    "widgets": null,
    "modified": null,
    "created": null,
    "widgets_array": [
    ]
  },
  "message": "ウィジェットエリア「ブログサイドバー」を更新しました。",
  "errors": null
}
```
