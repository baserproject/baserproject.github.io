# ウィジェットの削除

指定したウィジェットを削除します。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
POST /baser/api/admin/bc-widget-area/widget_areas/delete_widget/{widgetAreaId}/{widgetId}.json
```

### パスパラメーター

| パラメーター名   | 型   | 必須  | 内容        |
|-----------|-----|-----|-----------|
| widgetAreaId   | 数値  | ●   |  ウィジェットエリアID       |
| widgetId   | 数値  | ●   |  ウィジェットID       |

## レスポンス例

### レスポンスボディ

```json
{
  "message": "ウィジェットを削除しました。",
  "widgetArea": {
    "id": 5,
    "name": "ブログサイドバー",
    "widgets": "YToxOntpOjE7YToxOntzOjc6IldpZGdldDQiO2E6ODp7czo0OiJ0eXBlIjtzOjEyOiLjg4bjgq3jgrnjg4giO3M6NzoiZWxlbWVudCI7czo0OiJ0ZXh0IjtzOjY6InBsdWdpbiI7czo5OiJCYXNlckNvcmUiO3M6NDoic29ydCI7czoxOiIxIjtzOjQ6Im5hbWUiO3M6OToi44Oq44Oz44KvIjtzOjQ6InRleHQiO3M6MjgxOiI8dWw+PGxpPjxhIGhyZWY9XCJodHRwczovL2Jhc2VyY21zLm5ldFwiIHRhcmdldD1cIl9ibGFua1wiPmJhc2VyQ01T44Kq44OV44Kj44K344Oj44OrPC9hPjwvbGk+PC91bD48cD48c21hbGw+44GT44Gu6YOo5YiG44Gv44CB566h55CG55S76Z2i44GuIFvoqK3lrppdIOKGkiBb44Om44O844OG44Kj44Oq44OG44KjXSDihpIgW+OCpuOCo+OCuOOCp+ODg+ODiOOCqOODquOCol0g4oaSIFvmqJnmupbjgrXjgqTjg4njg5Djg7xdIOOCiOOCiue3qOmbhuOBp+OBjeOBvuOBmeOAgjwvc21hbGw+PC9wPiI7czo5OiJ1c2VfdGl0bGUiO3M6MToiMSI7czo2OiJzdGF0dXMiO3M6MToiMSI7fX19",
    "modified": null,
    "created": null,
    "widgets_array": [
      {
        "Widget4": {
          "type": "テキスト",
          "element": "text",
          "plugin": "BaserCore",
          "sort": "1",
          "name": "リンク",
          "text": "<ul><li><a href=\\\"https://basercms.net\\\" target=\\\"_blank\\\">baserCMSオフィシャル</a></li></ul><p><small>この部分は、管理画面の [設定] → [ユーティリティ] → [ウィジェットエリア] → [標準サイドバー] より編集できます。</small></p>",
          "use_title": "1",
          "status": "1"
        }
      }
    ]
  }
}
```
