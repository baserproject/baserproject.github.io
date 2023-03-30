# ブログカテゴリの削除

指定したブログカテゴリを削除します。

### 実行可能な権限
```
システム管理者以上
```

### リクエスト
```
DELETE /baser/api/bc-blog/blog_categories/{blogCategoryId}.json
``` 

### パスパラメーター

| パラメーター名   | 型   | 必須  | 内容                |
|-----------|-----|-----|-------------------|
| blogCategoryId        | 数値  | ●   | カテゴリID              |

### レスポンス例
#### レスポンスボディ
```json
{
  "blogCategory": {
    "id": 4,
    "blog_content_id": 1,
    "no": 4,
    "name": "blog-category-api",
    "title": "test title",
    "status": null,
    "parent_id": 0,
    "lft": 7,
    "rght": 8,
    "created": "2023-03-30T15:18:07+09:00",
    "modified": "2023-03-30T15:18:07+09:00"
  },
  "message": "ブログカテゴリー「blog-category-api」を削除しました。"
}

```
