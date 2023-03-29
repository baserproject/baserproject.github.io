# ブログ記事の一覧取得

フロントページにおいて、ブログ記事の一覧を表示する。
編集画面にて設定した件数を表示する。

### 実行可能な権限
```
すべてのユーザー：公開された情報のみ
ログインユーザー以上：全て
```

### リクエスト
```
GET baser/api/bc-blog/blog_contents.json
``` 

### クエリパラメーター

| パラメーター名           | 型 | 内容                                       |
|-------------------| --- |------------------------------------------|
| status            | 文字列 | publish：公開されたコンテンツフォルダーのみ<br>all：全て |
| limit             | 数値 | 取得件数                                     |
| page              | 数値 | ページ数                                     |
| description   | 文字列 | ブログ説明文（あいまい検索）                      |


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
