# ブログタグの新規追加

新しいブログタグを作成します。


## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
POST /baser/api/admin/bc-blog/blog_tags.json
```

### リクエストボディ

| パラメーター名   | 型   | 必須  | 内容                |
|-----------|-----|-----|-------------------|
| name   | 文字列 | ●   | ブログタグ名  |

## レスポンス例

### レスポンスボディ

```json
{
  "message": "ブログタグ「ベトナム」を追加しました。",
  "blogTag": {
    "name": "ベトナム",
    "created": "2023-03-30T17:27:09+09:00",
    "modified": "2023-03-30T17:27:09+09:00",
    "id": 2
  },
  "errors": null
}

```
