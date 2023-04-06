# カスタムフィールドのリスト取得

カスタムフィールドのリストを取得します。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
GET /baser/api/admin/bc-custom-content/custom_fields/list.json
```

## レスポンス例

### レスポンスボディ

```json
{
  "customFields": {
    "1": "求人分類",
    ...
  }
}
```
