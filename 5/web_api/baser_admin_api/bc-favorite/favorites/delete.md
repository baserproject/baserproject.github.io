# お気に入りの削除

指定したお気に入りを削除します。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
DELETE /baser/api/admin/bc-favorite/favorites/{favoriteId}.json
```

### パスパラメーター

| パラメーター名   | 型   | 必須  | 内容                |
|-----------|-----|-----|-------------------|
| favoriteId        | 数値  | ●   | お気に入りID              |

## レスポンス例

### レスポンスボディ

```json
{
  "favorite": {
    "id": 1,
    "user_id": 1,
    "name": "お問い合わせ",
    "url": "/contact",
    "sort": 1,
    "created": "2023-03-31T17:17:00+09:00",
    "modified": "2023-03-31T17:17:00+09:00"
  },
  "message": "お気に入り: お問い合わせ を削除しました。",
  "errors": null
}


```
