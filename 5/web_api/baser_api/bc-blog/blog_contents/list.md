# ブログコンテンツのリストを取得

ブログコンテンツのリストを取得します。

### 実行可能な権限
```
システム管理者以上
```

### リクエスト
```
認証なし場合、
GET baser/api/bc-blog/blog_contents/list.json
認証した場合、
GET baser/api/admin/bc-blog/blog_contents/list.json
```

### レスポンス例
#### レスポンスボディ
```json
{
  "blogContents": {
    "1": "NEWS",
    ...
  }
}


```
