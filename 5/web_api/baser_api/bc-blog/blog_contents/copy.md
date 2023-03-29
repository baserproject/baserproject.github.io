# ブログコンテンツのコピー

ブログをコピーします。コピー元のブログに関連する記事も同時にコピーします。
カテゴリはコピーせず、ブログ記事のカテゴリは未所属とする。

### 実行可能な権限
```
システム管理者以上
```

### リクエスト
```
POST /baser/api/bc-blog/blog_contents/copy.json
``` 

### リクエストボディ

| パラメーター名   | 型   | 必須  | 内容                |
|-----------|-----|-----|-------------------|
| entity_id        | 数値  | ●   | 実体ID              |
| title        | 文字列  | ●   | タイトル              |
| site_id        | 数値  | ●   | サイトID              |
| parent_id        | 数値  |     | 親コンテンツID              |

### レスポンス例
#### レスポンスボディ
```json
{
  "blogContent": {
    "template": "default",
    "list_count": 10,
    "list_direction": "DESC",
    "feed_count": 10,
    "tag_use": false,
    "comment_use": true,
    "comment_approve": false,
    "auth_captcha": false,
    "eye_catch_size": "YTo0OntzOjExOiJ0aHVtYl93aWR0aCI7aTo2MDA7czoxMjoidGh1bWJfaGVpZ2h0IjtpOjYwMDtzOjE4OiJtb2JpbGVfdGh1bWJfd2lkdGgiO2k6MTUwO3M6MTk6Im1vYmlsZV90aHVtYl9oZWlnaHQiO2k6MTUwO30=",
    "use_content": true,
    "content": {
      "name": "content_api",
      "parent_id": 1,
      "title": "copy content api",
      "author_id": 1,
      "site_id": 1,
      "exclude_search": false,
      "description": null,
      "eyecatch": null,
      "self_status": false,
      "self_publish_begin": null,
      "self_publish_end": null,
      "created_date": "2023-03-29T21:27:07+09:00",
      "site_root": false,
      "plugin": "BcBlog",
      "type": "BlogContent",
      "entity_id": 6,
      "lft": 26,
      "rght": 27,
      "level": 1,
      "created": "2023-03-29T21:27:07+09:00",
      "modified": "2023-03-29T21:27:07+09:00",
      "id": 18,
      "url": "/content_api/",
      "status": false,
      "main_site_content_id": null
    },
    "created": "2023-03-29T21:27:07+09:00",
    "modified": "2023-03-29T21:27:07+09:00",
    "id": 6
  },
  "content": {
    "name": "content_api",
    "parent_id": 1,
    "title": "copy content api",
    "author_id": 1,
    "site_id": 1,
    "exclude_search": false,
    "description": null,
    "eyecatch": null,
    "self_status": false,
    "self_publish_begin": null,
    "self_publish_end": null,
    "created_date": "2023-03-29T21:27:07+09:00",
    "site_root": false,
    "plugin": "BcBlog",
    "type": "BlogContent",
    "entity_id": 6,
    "lft": 26,
    "rght": 27,
    "level": 1,
    "created": "2023-03-29T21:27:07+09:00",
    "modified": "2023-03-29T21:27:07+09:00",
    "id": 18,
    "url": "/content_api/",
    "status": false,
    "main_site_content_id": null
  },
  "message": "ブログのコピー「copy content api」を追加しました。"
}

```
