# ブログタグの単一取得

指定したブログタグのを取得します。

### 実行可能な権限
```
全ての権限  
```

### URL
```
認証なし場合、
GET /baser/api/bc-blog/blog_tags/{blogTagId}.json
認証した場合、
GET /baser/api/admin/bc-blog/blog_tags/{blogTagId}.json
``` 

### クエリパラメーター

| パラメーター名 | 型 | 内容 |
| --- | --- | --- |
| blogTagId | 数値 | ブログタグID |

### レスポンス例
#### レスポンスボディ
```json
{
  "blogTag": {
    "id": 1,
    "name": "新製品",
    "created": "2023-03-29T21:50:36+09:00",
    "modified": "2023-03-30T17:30:45+09:00"
  },
  "message": null
}

```
