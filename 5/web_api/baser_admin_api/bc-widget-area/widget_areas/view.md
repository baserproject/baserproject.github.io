# ウィジェットエリアの単一取得

指定したウィジェットエリア情報を表示します。


## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
GET /baser/api/admin/bc-widget-area/widget_areas/{widgetAreaId}.json
```

### パスパラメーター

| パラメーター名   | 型   | 必須  | 内容        |
|-----------|-----|-----|-----------|
| widgetAreaId   | 数値  | ●   |  ウィジェットエリアID       |

## レスポンス例

### レスポンスボディ

```json
{
  "widgetArea": {
    "id": 5,
    "name": "ブログサイドバー",
    "widgets": "YToyOntpOjA7YToxOntzOjc6IldpZGdldDQiO2E6OTp7czoyOiJpZCI7czoxOiI0IjtzOjQ6InR5cGUiO3M6MTI6IuODhuOCreOCueODiCI7czo3OiJlbGVtZW50IjtzOjQ6InRleHQiO3M6NjoicGx1Z2luIjtzOjk6IkJhc2VyQ29yZSI7czo0OiJzb3J0IjtzOjE6IjEiO3M6NDoibmFtZSI7czo5OiLjg6rjg7Pjgq8iO3M6NDoidGV4dCI7czoyODE6Ijx1bD48bGk+PGEgaHJlZj1cImh0dHBzOi8vYmFzZXJjbXMubmV0XCIgdGFyZ2V0PVwiX2JsYW5rXCI+YmFzZXJDTVPjgqrjg5XjgqPjgrfjg6Pjg6s8L2E+PC9saT48L3VsPjxwPjxzbWFsbD7jgZPjga7pg6jliIbjga/jgIHnrqHnkIbnlLvpnaLjga4gW+ioreWuml0g4oaSIFvjg6bjg7zjg4bjgqPjg6rjg4bjgqNdIOKGkiBb44Km44Kj44K444Kn44OD44OI44Ko44Oq44KiXSDihpIgW+aomea6luOCteOCpOODieODkOODvF0g44KI44KK57eo6ZuG44Gn44GN44G+44GZ44CCPC9zbWFsbD48L3A+IjtzOjk6InVzZV90aXRsZSI7czoxOiIxIjtzOjY6InN0YXR1cyI7czoxOiIxIjt9fWk6MTthOjE6e3M6NzoiV2lkZ2V0NCI7YTo4OntzOjQ6InR5cGUiO3M6MTI6IuODhuOCreOCueODiCI7czo3OiJlbGVtZW50IjtzOjQ6InRleHQiO3M6NjoicGx1Z2luIjtzOjk6IkJhc2VyQ29yZSI7czo0OiJzb3J0IjtzOjE6IjEiO3M6NDoibmFtZSI7czo5OiLjg6rjg7Pjgq8iO3M6NDoidGV4dCI7czoyODE6Ijx1bD48bGk+PGEgaHJlZj1cImh0dHBzOi8vYmFzZXJjbXMubmV0XCIgdGFyZ2V0PVwiX2JsYW5rXCI+YmFzZXJDTVPjgqrjg5XjgqPjgrfjg6Pjg6s8L2E+PC9saT48L3VsPjxwPjxzbWFsbD7jgZPjga7pg6jliIbjga/jgIHnrqHnkIbnlLvpnaLjga4gW+ioreWuml0g4oaSIFvjg6bjg7zjg4bjgqPjg6rjg4bjgqNdIOKGkiBb44Km44Kj44K444Kn44OD44OI44Ko44Oq44KiXSDihpIgW+aomea6luOCteOCpOODieODkOODvF0g44KI44KK57eo6ZuG44Gn44GN44G+44GZ44CCPC9zbWFsbD48L3A+IjtzOjk6InVzZV90aXRsZSI7czoxOiIxIjtzOjY6InN0YXR1cyI7czoxOiIxIjt9fX0=",
    "modified": null,
    "created": null,
    "widgets_array": [
      {
        "Widget4": {
          "id": "4",
          "type": "テキスト",
          "element": "text",
          "plugin": "BaserCore",
          "sort": "1",
          "name": "リンク",
          "text": "<ul><li><a href=\\\"https://basercms.net\\\" target=\\\"_blank\\\">baserCMSオフィシャル</a></li></ul><p><small>この部分は、管理画面の [設定] → [ユーティリティ] → [ウィジェットエリア] → [標準サイドバー] より編集できます。</small></p>",
          "use_title": "1",
          "status": "1"
        }
      },
      ...
    ]
  },
  "message": null
}
```
