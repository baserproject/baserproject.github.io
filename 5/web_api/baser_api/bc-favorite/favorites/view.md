# お気に入りの単一情報の取得

指定したお気に入りを取得します。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
GET /baser/api/bc-favorite/favorites/{favoriteId}.json
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
    "name": "クレジット",
    "url": "javascript:$.bcCredit.show();",
    "sort": 1,
    "created": null,
    "modified": null
  },
  "message": null
}

```
