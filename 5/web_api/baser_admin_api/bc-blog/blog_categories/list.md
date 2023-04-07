# ブログカテゴリ一覧の取得

ブログカテゴリの一覧を取得します。

### 実行可能な権限
```
全ての権限  
ただし、認証なし場合は、status が publish の記事のみ取得可とする。
```

### URL
```
認証なし場合、
GET /baser/api/bc-blog/blog_categories.json
認証した場合、
GET /baser/api/admin/bc-blog/blog_categories.json
``` 

### クエリパラメーター

| パラメーター名 | 型 | 内容 |
| --- | --- | --- |
| blog_content_id | 数値 | ブログコンテンツID |

### レスポンス例
#### レスポンスボディ
```json
{
  "blogCategories": {
    "3": "test title",
    ...
  },
  "message": null
}

```
