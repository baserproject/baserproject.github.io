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
