# ウィジェットエリアのリスト取得

ウィジェットエリアの一覧を表示します。


## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
GET /baser/api/admin/bc-widget-area/widget_areas/list.json
```

## レスポンス例

### レスポンスボディ

```json
{
  "widgetAreas": {
    "1": "標準サイドバー",
    ...
  }
}
```
