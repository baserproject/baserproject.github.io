# ブログコンテンツのリストを取得

ブログコンテンツのリストを取得します。

### 実行可能な権限
```
システム管理者以上
```

### リクエスト
```
GET baser/api/bc-blog/blog_contents/list.json
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
