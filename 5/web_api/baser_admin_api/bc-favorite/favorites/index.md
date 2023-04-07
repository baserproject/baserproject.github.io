# お気に入りの一覧の取得

お気に入りの一覧を取得します。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
GET /baser/api/admin/bc-favorite/favorites/get_favorite_box_opened.json
```
## レスポンス例

### レスポンスボディ

```json
{
  "favorites": [
    {
      "id": 1,
      "user_id": 1,
      "name": "クレジット",
      "url": "javascript:$.bcCredit.show();",
      "sort": 1,
      "created": null,
      "modified": null
    },
   ...
  ]
}
```
