# ウィジェットエリアのタイトル更新

指定したウィジェットエリアのタイトルを編集します。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
POST /baser/api/admin/bc-widget-area/widget_areas/update_title/{widgetAreaId}.json
```

### パスパラメーター

| パラメーター名   | 型   | 必須  | 内容        |
|-----------|-----|-----|-----------|
| widgetAreaId   | 数値  | ●   |  ウィジェットエリアID       |

### リクエストボディ

| パラメーター名   | 型   | 必須  | 内容        |
|-----------|-----|-----|-----------|
| name   | 文字列  | ●   | ウィジェットエリア名       |

## レスポンス例

### レスポンスボディ

```json
{
  "message": "ウィジェットエリア「ブログサイドバー」を更新しました。",
  "widgetArea": {
    "id": 5,
    "name": "ブログサイドバー",
    "widgets": null,
    "modified": null,
    "created": null,
    "widgets_array": [
    ]
  },
  "errors": null
}
```
