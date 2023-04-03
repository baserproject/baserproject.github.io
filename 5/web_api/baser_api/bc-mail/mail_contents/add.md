# メールコンテンツの新規追加

新しいメールコンテンツを作成します。
追加時には、メッセージテーブルを作成します。
メッセージテーブルの命名規則は次の通りとします。

```
mail_messages_{メールコンテンツID}
```

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
POST /baser/api/admin/bc-mail/mail_contents.json
```

### リクエストボディ

| パラメーター名   | 型   | 必須  | 内容     |
|-----------|-----|-----|--------|
| description   | 数値  |     | メールフォーム説明文 |
| sender_1   | 文字列 | 　   | 送信先メールアドレス |
| sender_2   | 文字列 | 　   | BCC用送信先メールアドレス    |
| sender_name   | 数値 | ●   | 送信先名   |
| subject_user   | 数値 | ●   | 自動返信メール件名[ユーザー宛]   |
| subject_admin   | 数値 | ●   | 自動返信メール件名[管理者宛]   |
| form_template   | 数値 | 　   | メールフォームテンプレート名   |
| mail_template   | 数値 | 　   | 送信メールテンプレート名   |
| redirect_url   | 数値 | 　   | リダイレクトURL   |
| widget_area   | 数値 | 　   | ウィジェットエリア   |
| ssl_on   | 数値 | 　   | SSL通信利用   |
| save_info   | 数値 | 　   | データベース保存   |
| auth_captcha   | 数値 | 　   | イメージ認証利用    |
| publish_begin   | 数値 | 　   | 公開開始日   |
| publish_end   | 数値 | 　   | 公開終了日   |
| content[name] | 文字列	  | ●   | 名称               |
| content[site_id]   | 数値 | ●   | サイトID              |
| content[parent_id]   | 数値 | ●   | 親コンテンツID              |
| content[title]   | 文字列 | ●   | タイトル              |
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

## レスポンス例

### レスポンスボディ

```json
{
  "message": "メールフォーム「コンテンツタイトル」を追加しました。",
  "mailContent": {
    "sender_name": "テスト名",
    "subject_user": "テストユーザー",
    "subject_admin": "テストアドミン",
    "layout_template": "default",
    "form_template": "default",
    "mail_template": "mail_default",
    "use_description": true,
    "ssl_on": false,
    "save_info": true,
    "content": {
      "name": "%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E5%90%8D",
      "site_id": 1,
      "parent_id": 1,
      "title": "コンテンツタイトル",
      "self_status": false,
      "self_publish_begin": null,
      "self_publish_end": null,
      "created_date": "2023-04-03T14:46:05+09:00",
      "site_root": false,
      "exclude_search": false,
      "author_id": 1,
      "plugin": "BcMail",
      "type": "MailContent",
      "entity_id": 2,
      "lft": 24,
      "rght": 25,
      "level": 1,
      "created": "2023-04-03T14:46:05+09:00",
      "modified": "2023-04-03T14:46:05+09:00",
      "id": 28,
      "url": "/%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E5%90%8D/",
      "status": false,
      "main_site_content_id": null
    },
    "created": "2023-04-03T14:46:05+09:00",
    "modified": "2023-04-03T14:46:05+09:00",
    "id": 2
  },
  "content": {
    "name": "%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E5%90%8D",
    "site_id": 1,
    "parent_id": 1,
    "title": "コンテンツタイトル",
    "self_status": false,
    "self_publish_begin": null,
    "self_publish_end": null,
    "created_date": "2023-04-03T14:46:05+09:00",
    "site_root": false,
    "exclude_search": false,
    "author_id": 1,
    "plugin": "BcMail",
    "type": "MailContent",
    "entity_id": 2,
    "lft": 24,
    "rght": 25,
    "level": 1,
    "created": "2023-04-03T14:46:05+09:00",
    "modified": "2023-04-03T14:46:05+09:00",
    "id": 28,
    "url": "/%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E5%90%8D/",
    "status": false,
    "main_site_content_id": null
  },
  "errors": [
  ]
}

```
