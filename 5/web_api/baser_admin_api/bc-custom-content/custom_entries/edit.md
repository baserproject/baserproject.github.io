# カスタムエントリーの編集

指定したカスタムエントリーを編集します。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
PATCH /baser/api/admin/bc-custom-content/custom_entries/{customEntryId}.json
```

### クエリパラメーター

| パラメーター名   | 型   | 必須  | 内容                |
|-----------|-----|-----|-------------------|
| custom_table_id            | 数値 |  ● | カスタムテーブルID |

### パスパラメーター

| パラメーター名   | 型   | 必須  | 内容                |
|-----------|-----|-----|-------------------|
| customEntryId        | 数値  | ●   |カスタムエントリーID              |

### リクエストボディ

| パラメーター名   | 型   | 必須  | 内容                |
|-----------|-----|-----|-------------------|
| custom_table_id   | 数値 |  ●    | カスタムテーブルID              |
| parent_id   | 数値 |  ●    | 親ID              |
| name   | 文字列 |   ●  | カスタムテーブル名              |
| title   | 数値 |   ●  | タイトル              |
| level   | 数値 |     | 階層              |
| lft   | 数値 |     | 右位置              |
| rght   | 数値 |     | 左位置              |
| creator_id   | 数値 |     | 作成者ID              |
| status   | 真偽値 |     | 公開状態              |


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
  "message": "フィールド「工業」を更新しました。",
  "errors": null
}
```
