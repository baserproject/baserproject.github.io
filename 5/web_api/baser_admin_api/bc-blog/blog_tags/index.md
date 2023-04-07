# ブログタグ一覧の取得

ブログタグの一覧を取得します。

### 実行可能な権限
```
全ての権限  
```

### URL
```
認証なし場合、
GET /baser/api/bc-blog/blog_tags.json
認証した場合、
GET /baser/api/admin/bc-blog/blog_tags.json
``` 

### クエリパラメーター

| パラメーター名 | 型 | 内容             |
| --- | --- |----------------|
| siteId | 数値 | サイトID          |
| contentId | 数値 | コンテンツID        |
| contentUrl | 文字列 | コンテンツURL       |
| name | 文字列 | ブログタグ名（あいまい検索） |

### レスポンス例
#### レスポンスボディ
```json
{
  "blogTags": [
    {
      "id": 1,
      "name": "vietnam",
      "created": "2023-03-30T17:33:11+09:00",
      "modified": "2023-03-30T17:33:11+09:00"
    },
    ...
  ]
}

```
