# カスタムエントリーの一覧取得

カスタムエントリーの一覧取得します。

## 実行に必要な権限

```
すべてのユーザー：公開された情報のみ
ログインユーザー以上：全て
```

## リクエスト
```
認証なし場合、
GET baser/api/bc-custom-content/custom_entries.json
認証した場合、
GET baser/api/admin/bc-custom-content/custom_entries.json
```

### クエリパラメーター

| パラメーター名   | 型   | 必須  | 内容                     |
|-----------|-----|-----|------------------------|
| custom_table_id            | 数値 |  ● | カスタムテーブルID |
| status            | 文字列 |  | publish：公開のみ<br>all：全て |
| limit             | 数値  |  | 取得件数                   |
| page              | 数値  |  | ページ数                   |
| title   | 文字列 |  | タイトル（あいまい検索）           |
| creator_id   | 文字列 |  | 作成者                    |

## レスポンス例

### レスポンスボディ

```json
{
  "entries": [
    {
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
    ...
  ],
  "message": null
}

```
