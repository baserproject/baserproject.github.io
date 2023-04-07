# ブログカテゴリ一覧の取得

ブログカテゴリの一覧を取得します。

### 実行可能な権限
```
すべてのユーザー：公開された情報のみ
```

### URL
```
GET /baser/api/bc-blog/blog_categories.json
``` 

### クエリパラメーター

| パラメーター名 | 型 | 内容 |
| --- | --- | --- |
| blog_content_id | 数値 | ブログコンテンツID |
| status | 文字列 | publish：公開状態の記事のみ<br>all：全て |

### レスポンス例
#### レスポンスボディ
```json
{
  "blogCategories": [
    {
      "id": 1,
      "blog_content_id": 2,
      "no": 1,
      "name": "release",
      "title": "プレスリリース",
      "status": true,
      "parent_id": null,
      "lft": 1,
      "rght": 2,
      "created": "2023-03-29T21:50:36+09:00",
      "modified": "2023-03-30T16:02:15+09:00"
    },
    ...
  ],
  "message": null
}

```
