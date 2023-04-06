# カスタムエントリーの単一取得

指定したカスタムエントリーを取得します。

## 実行に必要な権限

```
すべてのユーザー：公開された情報のみ
ログインユーザー以上：全て
```

## リクエスト
```
認証なし場合、
GET /baser/api/bc-custom-content/custom_entries/{customEntryId}.json
認証した場合、
GET /baser/api/admin/bc-custom-content/custom_entries/{customEntryId}.json
```

### クエリパラメーター

| パラメーター名   | 型   | 必須  | 内容                |
|-----------|-----|-----|-------------------|
| custom_table_id            | 数値 |  ● | カスタムテーブルID |

### パスパラメーター

| パラメーター名   | 型   | 必須  | 内容                |
|-----------|-----|-----|-------------------|
| customEntryId        | 数値  | ●   |カスタムエントリーID              |

## レスポンス例

### レスポンスボディ

```json
{
  "entry": {
    "id": 3,
    "custom_table_id": 5,
    "name": "工業",
    "title": "工業",
    "parent_id": null,
    "lft": 1,
    "rght": 2,
    "level": 0,
    "status": false,
    "publish_begin": null,
    "publish_end": null,
    "published": null,
    "creator_id": null,
    "modified": "2023-04-06T13:10:10+09:00",
    "created": "2023-04-06T13:00:12+09:00",
    "custom_table": {
      "id": 5,
      "type": "1",
      "name": "country",
      "title": "国",
      "display_field": "1",
      "has_child": true,
      "created": "2023-04-06T10:30:45+09:00",
      "modified": "2023-04-06T10:30:45+09:00"
    }
  },
  "message": null
}
```
