# ブログコンテンツの単一取得

指定したブログコンテンツを取得します。

### 実行可能な権限
```
すべてのユーザー：公開された情報のみ
ログインユーザー以上：全て
```

### リクエスト
```
GET baser/api/bc-blog/blog_contents/{blogContentId}.json
``` 

### パスパラメーター

| パラメーター名   | 型   | 必須  | 内容                |
|-----------|-----|-----|-------------------|
| blogContentId        | 数値  | ●   |ブログコンテンツのID              |

### レスポンス例
#### レスポンスボディ
```json
{
  "blogContents": [
    {
      "id": 1,
      "description": "<p>このコンテンツはブログ機能により作られており、この文章については管理画面の [NEWS] &rarr; [設定] より更新ができます。また、ブログは [コンテンツ管理] よりいくつでも作成することができます。</p>",
      "template": "default",
      "list_count": 10,
      "list_direction": "DESC",
      "feed_count": 10,
      "tag_use": true,
      "comment_use": true,
      "comment_approve": false,
      "auth_captcha": true,
      "widget_area": 2,
      "eye_catch_size": "YTo0OntzOjExOiJ0aHVtYl93aWR0aCI7czozOiIzMDAiO3M6MTI6InRodW1iX2hlaWdodCI7czozOiIzMDAiO3M6MTg6Im1vYmlsZV90aHVtYl93aWR0aCI7czozOiIxMDAiO3M6MTk6Im1vYmlsZV90aHVtYl9oZWlnaHQiO3M6MzoiMTAwIjt9",
      "use_content": true,
      "created": "2023-03-29T21:50:36+09:00",
      "modified": null
    },
    ...
  ]
}

```
