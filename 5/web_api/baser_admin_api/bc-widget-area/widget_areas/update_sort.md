# ウィジェットエリアの並び順更新

指定したウィジェットエリアの並び順を更新します。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
POST /baser/api/admin/bc-widget-area/widget_areas/update_sort/{widgetAreaId}.json
```

### パスパラメーター

| パラメーター名   | 型   | 必須  | 内容        |
|-----------|-----|-----|-----------|
| widgetAreaId   | 数値  | ●   |  ウィジェットエリアID       |

### リクエストボディ

| パラメーター名   | 型   | 必須  | 内容        |
|-----------|-----|-----|-----------|
| sorted_ids   | 文字列  | ●   | ウィジェットID       |

## レスポンス例

### レスポンスボディ

```json
{
  "message": "ウィジェットエリア「標準サイドバー」の並び順を更新しました。",
  "widgetArea": {
    "id": 1,
    "name": "標準サイドバー",
    "widgets": "YTozOntpOjA7YToxOntzOjc6IldpZGdldDIiO2E6OTp7czoyOiJpZCI7czoxOiIyIjtzOjQ6InR5cGUiO3M6MzM6IuODreODvOOCq+ODq+ODiuODk+OCsuODvOOCt+ODp+ODsyI7czo3OiJlbGVtZW50IjtzOjEwOiJsb2NhbF9uYXZpIjtzOjY6InBsdWdpbiI7czo5OiJCYXNlckNvcmUiO3M6NDoic29ydCI7aToyO3M6NDoibmFtZSI7czozMzoi44Ot44O844Kr44Or44OK44OT44Ky44O844K344On44OzIjtzOjU6ImNhY2hlIjtzOjE6IjEiO3M6OToidXNlX3RpdGxlIjtzOjE6IjEiO3M6Njoic3RhdHVzIjtzOjE6IjEiO319aToxO2E6MTp7czo3OiJXaWRnZXQzIjthOjg6e3M6MjoiaWQiO3M6MToiMyI7czo0OiJ0eXBlIjtzOjE4OiLjgrXjgqTjg4jlhoXmpJzntKIiO3M6NzoiZWxlbWVudCI7czo2OiJzZWFyY2giO3M6NjoicGx1Z2luIjtzOjk6IkJhc2VyQ29yZSI7czo0OiJzb3J0IjtpOjM7czo0OiJuYW1lIjtzOjE4OiLjgrXjgqTjg4jlhoXmpJzntKIiO3M6OToidXNlX3RpdGxlIjtzOjE6IjEiO3M6Njoic3RhdHVzIjtzOjE6IjEiO319aToyO2E6MTp7czo3OiJXaWRnZXQ0IjthOjk6e3M6MjoiaWQiO3M6MToiNCI7czo0OiJ0eXBlIjtzOjEyOiLjg4bjgq3jgrnjg4giO3M6NzoiZWxlbWVudCI7czo0OiJ0ZXh0IjtzOjY6InBsdWdpbiI7czo5OiJCYXNlckNvcmUiO3M6NDoic29ydCI7aToxO3M6NDoibmFtZSI7czo5OiLjg6rjg7Pjgq8iO3M6NDoidGV4dCI7czoyNzc6Ijx1bD48bGk+PGEgaHJlZj0iaHR0cHM6Ly9iYXNlcmNtcy5uZXQiIHRhcmdldD0iX2JsYW5rIj5iYXNlckNNU+OCquODleOCo+OCt+ODo+ODqzwvYT48L2xpPjwvdWw+PHA+PHNtYWxsPuOBk+OBrumDqOWIhuOBr+OAgeeuoeeQhueUu+mdouOBriBb6Kit5a6aXSDihpIgW+ODpuODvOODhuOCo+ODquODhuOCo10g4oaSIFvjgqbjgqPjgrjjgqfjg4Pjg4jjgqjjg6rjgqJdIOKGkiBb5qiZ5rqW44K144Kk44OJ44OQ44O8XSDjgojjgornt6jpm4bjgafjgY3jgb7jgZnjgII8L3NtYWxsPjwvcD4iO3M6OToidXNlX3RpdGxlIjtzOjE6IjEiO3M6Njoic3RhdHVzIjtzOjE6IjEiO319fQ==",
    "modified": null,
    "created": "2023-03-29T21:50:37+09:00",
    "widgets_array": [
      {
        "Widget4": {
          "id": "4",
          "type": "テキスト",
          "element": "text",
          "plugin": "BaserCore",
          "sort": 1,
          "name": "リンク",
          "text": "<ul><li><a href=\"https://basercms.net\" target=\"_blank\">baserCMSオフィシャル</a></li></ul><p><small>この部分は、管理画面の [設定] → [ユーティリティ] → [ウィジェットエリア] → [標準サイドバー] より編集できます。</small></p>",
          "use_title": "1",
          "status": "1"
        }
      },
      {
        "Widget2": {
          "id": "2",
          "type": "ローカルナビゲーション",
          "element": "local_navi",
          "plugin": "BaserCore",
          "sort": 2,
          "name": "ローカルナビゲーション",
          "cache": "1",
          "use_title": "1",
          "status": "1"
        }
      },
      {
        "Widget3": {
          "id": "3",
          "type": "サイト内検索",
          "element": "search",
          "plugin": "BaserCore",
          "sort": 3,
          "name": "サイト内検索",
          "use_title": "1",
          "status": "1"
        }
      }
    ]
  },
  "errors": null
}
```
