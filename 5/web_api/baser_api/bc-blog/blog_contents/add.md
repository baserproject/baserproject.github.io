# ブログコンテンツの新規追加

コンテンツ管理より、フォルダを指定して新しいブログを配置する事ができます。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
POST /baser/api/admin/bc-blog/blog_contents.json
```

### リクエストボディ

| パラメーター名   | 型   | 必須  | 内容                |
|-----------|-----|-----|-------------------|
| content[name] | 文字列	  | ●   | 名称               |
| content[site_id]   | 数値 |  ●   | サイトID              |
| content[parent_id]   | 数値 |   ●  | 親コンテンツID              |
| content[title]   | 文字列 |  ●   | タイトル              |
| content[plugin]   | 文字列 |     | プラグイン名              |
| content[type]   | 文字列 |     | コンテンツタイプ              |
| content[entity_id]   | 数値 |     | 実体ID               |
| content[url]   | 文字列 |     | URL              |
| content[alias_id]   | 数値 |     | エイリアスID              |
| content[main_site_content_id]   | 数値 |     | メインサイトコンテンツID              |
| content[lft]   | 数値 |     | 左位置              |
| content[rght]   | 数値 |     | 右位置              |
| content[level]   | 数値 |     | 深さ              |
| content[description]   | 文字列 |     | 説明文              |
| content[eyecatch]   | 文字列 |     | アイキャッチ              |
| content[author_id]   | 数値 |     | 作成者ID              |
| content[layout_template]   | 文字列 |     | レイアウトテンプレート              |
| content[status]   | 真偽値 |     | 公開状態              |
| content[publish_begin]   | 文字列 |     | 公開開始日              |
| content[publish_end]   | 文字列 |     | 公開終了日              |
| content[self_status]   | 真偽値 |     | コンテンツ自身の公開状態              |
| content[self_publish_begin]   | 文字列 |     | コンテンツ自身の公開開始日              |
| content[self_publish_end]   | 文字列 |     | コンテンツ自身の公開終了日              |
| content[exclude_search]   | 真偽値 |     | サイト内検索除外              |
| content[created_date]   | 文字列 |     | コンテンツ作成日              |
| content[modified_date]   | 文字列 |     | コンテンツ更新日              |
| content[site_root]   | 真偽値 |     | サイトルートフラグ              |
| content[deleted_date]   | 真偽値 |     | 削除日              |
| content[exclude_menu]   | 真偽値 |     | 公開ページのメニューより除外              |
| content[blank_link]   | 真偽値 |     | メニューのリンクを別ウィンドウで開く              |
| description   | 文字列 |     | ブログ説明文              |
| template   | 文字列 |     | コンテンツテンプレート名               |
| list_count   | 数値 |     | 一覧表示件数              |
| list_direction   | 文字列 |     | 一覧に表示する順番              |
| feed_count   | 数値 |     | RSSフィード出力数              |
| tag_use   | 真偽値 |     | タグ機能利用               |
| comment_use   | 真偽値 |     | コメント受付機能利用              |
| comment_approve   | 真偽値 |     | コメント承認機能利用              |
| auth_captcha   | 真偽値 |     | コメントイメージ認証利用              |
| widget_area   | 数値 |     | ウィジェットエリア              |
| eye_catch_size   | 文字列 |     | アイキャッチ画像サイズ              |
| use_content   | 真偽値 |     | 記事概要利用              |


## レスポンス例

### レスポンスボディ

```json
{
  "message": "ブログ「api test」を追加しました。",
  "blogContent": {
    "comment_use": true,
    "comment_approve": false,
    "layout": "default",
    "template": "default",
    "list_count": 10,
    "list_direction": "DESC",
    "feed_count": 10,
    "tag_use": false,
    "status": false,
    "eye_catch_size_thumb_width": 600,
    "eye_catch_size_thumb_height": 600,
    "eye_catch_size_mobile_thumb_width": 150,
    "eye_catch_size_mobile_thumb_height": 150,
    "use_content": true,
    "content": {
      "name": "content_api",
      "site_id": 1,
      "parent_id": 0,
      "title": "api test",
      "self_status": false,
      "self_publish_begin": null,
      "self_publish_end": null,
      "created_date": "2023-03-29T21:03:48+09:00",
      "site_root": false,
      "exclude_search": false,
      "author_id": 1,
      "plugin": "BcBlog",
      "type": "BlogContent",
      "entity_id": 2,
      "lft": 21,
      "rght": 22,
      "level": 0,
      "created": "2023-03-29T21:03:48+09:00",
      "modified": "2023-03-29T21:03:48+09:00",
      "id": 14,
      "url": false,
      "status": false,
      "main_site_content_id": null
    },
    "eye_catch_size": "YTo0OntzOjExOiJ0aHVtYl93aWR0aCI7aTo2MDA7czoxMjoidGh1bWJfaGVpZ2h0IjtpOjYwMDtzOjE4OiJtb2JpbGVfdGh1bWJfd2lkdGgiO2k6MTUwO3M6MTk6Im1vYmlsZV90aHVtYl9oZWlnaHQiO2k6MTUwO30=",
    "created": "2023-03-29T21:03:48+09:00",
    "modified": "2023-03-29T21:03:48+09:00",
    "id": 2
  },
  "content": {
    "name": "content_api",
    "site_id": 1,
    "parent_id": 0,
    "title": "api test",
    "self_status": false,
    "self_publish_begin": null,
    "self_publish_end": null,
    "created_date": "2023-03-29T21:03:48+09:00",
    "site_root": false,
    "exclude_search": false,
    "author_id": 1,
    "plugin": "BcBlog",
    "type": "BlogContent",
    "entity_id": 2,
    "lft": 21,
    "rght": 22,
    "level": 0,
    "created": "2023-03-29T21:03:48+09:00",
    "modified": "2023-03-29T21:03:48+09:00",
    "id": 14,
    "url": false,
    "status": false,
    "main_site_content_id": null
  },
  "errors": null
}

```
