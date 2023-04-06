# カスタムテーブルの削除

指定したカスタムテーブルを削除します。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
DELETE /baser/api/admin/bc-custom-content/custom_tables/{customTableId}.json
```

### パスパラメーター

| パラメーター名   | 型   | 必須  | 内容                             |
|-----------|-----|-----|--------------------------------|
| customTableId   | 数値  | ●   | カスタムテーブルID                    |


## レスポンス例

### レスポンスボディ

```json
{
  "message": "テーブル「ニュース」を削除しました。",
  "customTable": {
    "id": 6,
    "type": "1",
    "name": "news",
    "title": "ニュース",
    "display_field": "1",
    "has_child": true,
    "created": "2023-04-06T20:43:41+09:00",
    "modified": "2023-04-06T20:43:41+09:00"
  }
}
```
