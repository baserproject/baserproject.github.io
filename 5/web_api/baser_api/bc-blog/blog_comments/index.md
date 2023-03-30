# ブログコメント一覧の取得

ブログコメントの一覧を取得します。

### 実行可能な権限
```
全ての権限  
ただし、認証なし場合は、status が publish の記事のみ取得可とする。
```

### URL
```
GET /baser/api/bc-blog/blog_comments.json
``` 

### クエリパラメーター

### クエリパラメーター

| パラメーター名 | 型 | 内容                          |
| --- | --- |-----------------------------|
| status | 文字列 | publish：公開状態の記事のみ<br>all：全て |
| limit | 数値 | 取得件数                        |
| blog_post_id | 数値 | ブログポストID                    |

### レスポンス例
#### レスポンスボディ
```json
{
  "blogComments": [
    {
      "id": 1,
      "blog_content_id": 1,
      "blog_post_id": 1,
      "no": 1,
      "status": true,
      "name": "ベトナムくん",
      "email": "",
      "url": "",
      "message": "最高！",
      "created": "2023-03-30T19:33:00+09:00",
      "modified": "2023-03-30T19:33:00+09:00"
    },
    ...
  ]
}

```
