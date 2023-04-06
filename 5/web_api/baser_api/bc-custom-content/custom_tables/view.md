# カスタムテーブルの単一取得

指定したカスタムテーブルを取得します。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
GET /baser/api/admin/bc-custom-content/custom_tables/{customTableId}.json
```

### パスパラメーター

| パラメーター名   | 型   | 必須  | 内容                             |
|-----------|-----|-----|--------------------------------|
| customTableId   | 数値  | ●   | カスタムテーブルID                    |

## レスポンス例

### レスポンスボディ

```json
{
  "message": null,
  "customTable": {
    "id": 5,
    "type": "1",
    "name": "news",
    "title": "ニュース",
    "display_field": "1",
    "has_child": true,
    "created": "2023-04-06T10:30:45+09:00",
    "modified": "2023-04-06T20:49:01+09:00"
  }
}
```
