# カスタムコンテンツの一覧取得

指定してカスタムコンテンツを削除します。

## 実行に必要な権限

```
すべてのユーザー：公開された情報のみ
ログインユーザー以上：全て
```

## リクエスト
```
認証なし場合、
GET baser/api/bc-custom-content/custom_contents.json
認証した場合、
GET baser/api/admin/bc-custom-content/custom_contents.json
```

### クエリパラメーター

| パラメーター名   | 型   | 必須  | 内容                |
|-----------|-----|-----|-------------------|
| status            | 文字列 |  | publish：公開のみ<br>all：全て |
| limit             | 数値  |  |  取得件数                                     |
| page              | 数値  |  | ページ数                                     |
| description   | 文字列 |  |  説明文（あいまい検索）                      |

## レスポンス例

### レスポンスボディ

```json
{
  "customContents": [
    {
      "id": 2,
      "custom_table_id": 5,
      "description": "",
      "template": "default",
      "widget_area": null,
      "list_count": 10,
      "list_order": "id",
      "list_direction": "DESC",
      "created": "2023-04-06T10:48:12+09:00",
      "modified": "2023-04-06T10:48:12+09:00"
    },
    ...
  ]
}
```
