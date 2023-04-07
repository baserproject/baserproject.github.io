# カスタムテーブルのリスト取得

カスタムテーブルのリストを取得します。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
GET /baser/api/admin/bc-custom-content/custom_tables/list.json
```

## レスポンス例

### レスポンスボディ

```json
{
  "customTables": {
    "1": "求人情報",
    ...
  }
}
```
