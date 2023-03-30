# ブログコンテンツの編集

ブログの説明文を変更できる他、下記の設定変更ができる。

- フロントの記事一覧の表示件数: フロントの記事一覧ページの記事表示件数を設定できる。
- フロントの記事一覧の表示順: フロントの記事一覧ページの表示順を変更できる。
  - 新しい記事順
  - 古い記事順
- RSSフィードの出力記事件数: RSSフィードにおける出力記事件数を変更できる。
- コメント受付機能の利用状態: ブログ記事に対してコメントを投稿できるようにするかどうか設定できる。
- コメント承認機能の利用状態: 上記コメントを投稿した際、ログインユーザーが承認するまで表示しないようにするかどうか設定できる。
- コメントイメージ認証の利用状態: コメントを投稿する際にイメージ認証を利用するかどうか設定できる。
- タグ機能の利用状態を変更する: ブログ記事に対してタグを付与できるかどうか設定できる。オフにした場合、ブログ記事編集画面のタグの登録欄を非表示にする。
- フロントに表示するウィジェットエリア: フロントページにおいて表示するウィジェットを変更できる。
- フロントで利用するレイアウトテンプレート: フロントページにおいて利用するレイアウトテンプレートを変更できる。
- フロントで利用するレイアウトテンプレートの編集画面に遷移する: レイアウトテンプレートの編集画面へのリンクを表示する。BcThemeFile プラグインがインストールされている場合に有効。
- フロントで利用するコンテンツテンプレート:: フロントページにおいて利用するコンテンツテンプレートを変更できる。コンテンツテンプレートは、templates/Blog/ に配置したフォルダを表示する。
- フロントで利用するコンテンツテンプレートの編集画面に遷移する: コンテンツテンプレートの編集画面へのリンクを表示する。BcThemeFile プラグインがインストールされている場合に有効。
- アイキャッチのリサイズサイズを変更する: ブログ記事のアイキャッチを設定する際のりサイズサイズを変更できる。
- 記事概要の利用状態を変更する: ブログ記事の記事概要を利用するかどうか設定できる。オフにした場合は、ブログ記事編集画面の記事概要を非表示にする。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
POST /baser/api/bc-blog/blog_contents.json
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
  "blogContent": {
    "id": 2,
    "description": null,
    "template": "default",
    "list_count": 10,
    "list_direction": "DESC",
    "feed_count": 10,
    "tag_use": false,
    "comment_use": true,
    "comment_approve": false,
    "auth_captcha": false,
    "widget_area": null,
    "eye_catch_size": "YTo0OntzOjExOiJ0aHVtYl93aWR0aCI7TjtzOjEyOiJ0aHVtYl9oZWlnaHQiO047czoxODoibW9iaWxlX3RodW1iX3dpZHRoIjtOO3M6MTk6Im1vYmlsZV90aHVtYl9oZWlnaHQiO047fQ==",
    "use_content": true,
    "created": "2023-03-29T21:03:48+09:00",
    "modified": "2023-03-29T21:36:01+09:00",
    "content": {
      "id": 14,
      "name": "API_blog_edit",
      "plugin": "BcBlog",
      "type": "BlogContent",
      "entity_id": 2,
      "url": false,
      "site_id": 1,
      "alias_id": null,
      "main_site_content_id": null,
      "parent_id": 0,
      "lft": 29,
      "rght": 30,
      "level": 0,
      "title": "api test",
      "description": null,
      "eyecatch": null,
      "author_id": 1,
      "layout_template": null,
      "status": false,
      "publish_begin": null,
      "publish_end": null,
      "self_status": false,
      "self_publish_begin": null,
      "self_publish_end": null,
      "exclude_search": false,
      "created_date": "2023-03-29T21:36:01+09:00",
      "modified_date": null,
      "site_root": false,
      "deleted_date": null,
      "exclude_menu": false,
      "blank_link": false,
      "created": "2023-03-29T21:03:48+09:00",
      "modified": "2023-03-29T21:36:01+09:00",
      "site": {
        "id": 1,
        "main_site_id": null,
        "name": "",
        "display_name": "メインサイト",
        "title": "メインサイト",
        "alias": "",
        "theme": "BcFront",
        "status": true,
        "keyword": "",
        "description": "",
        "use_subdomain": false,
        "relate_main_site": false,
        "device": "",
        "lang": "",
        "same_main_url": false,
        "auto_redirect": false,
        "auto_link": false,
        "domain_type": null,
        "created": "2023-03-29T16:37:42+09:00",
        "modified": "2023-03-29T16:37:44+09:00"
      }
    }
  },
  "message": "ブログ「api test」を更新しました。",
  "errors": null
}

```
