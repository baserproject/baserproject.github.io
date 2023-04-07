# カスタムテーブルの一覧取得

カスタムテーブルの一覧を取得します。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
GET /baser/api/admin/bc-custom-content/custom_tables.json
```

## レスポンス例

### レスポンスボディ

```json
{
  "customTables": [
    {
      "id": 1,
      "type": "1",
      "name": "recruit",
      "title": "求人情報",
      "display_field": "title",
      "has_child": false,
      "created": null,
      "modified": null
    },
    ...
  ]
}
```
