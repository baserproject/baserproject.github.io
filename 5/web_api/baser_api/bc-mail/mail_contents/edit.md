# メールコンテンツの編集

メールフォームの説明文を変更できる他、下記の設定変更が出来ます。

- 送信先メールアドレス: メールフォーム送信時にメールを送信する宛先を設定できる。
- 送信先名:自動返信メールの送信者に表示します。入力がない場合、サイト名が設定されます。
- 自動返信メール件名[ユーザー宛]: ユーザー宛の自動返信メールの件名を設定できる。
- 自動送信メール件名[管理者宛]: 管理者宛の自動送信メールの件名を設定できる。
- リダイレクトURL: メール送信後、別のURLにリダイレクトする場合にURLを指定します。
- フォーム受付期間: 公開期間とは別にフォームの受付期間を設定する事ができます。受付期間外にはエラーではなく受付期間外のページを表示します。
- データベース保存: メールフォームから送信された情報をデータベースに保存するかどうかを指定できます。
- イメージ認証: メールフォーム送信の際、表示された画像の文字入力させる事で認証を行ないます。
- SSL通信: メールフォームでSSL通信を利用するかどうかを設定できます。
- BCC用送信先メールアドレス: BCC（ブラインドカーボンコピー）用のメールアドレスを指定します。複数の送信先を指定するには、カンマで区切って入力します。
- フロントで利用するウィジェットエリア: フロントで利用するウィジェットエリアを設定できます。
- フロントで利用するメールフォームテンプレート: フロントで利用するメールフォームテンプレートを変更できます。
- フロントで利用するメールフォームテンプレートの編集画面に遷移する: メールフォームテンプレートの編集画面へのリンクを表示する。BcThemeFile プラグインがインストールされている場合に有効。
- 送信メールテンプレート: 送信メールテンプレートを変更できます。
- 送信メールテンプレートの編集画面に遷移する: 送信メールテンプレートの編集画面へのリンクを表示する。BcThemeFile プラグインがインストールされている場合に有効。
## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
PATCH /baser/api/admin/bc-mail/mail_contents/{mailContentId}.json
```

### リクエスト
```
DELETE /baser/api/admin/bc-mail/mail_contents/{mailContentId}.json
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


## レスポンス例

### レスポンスボディ

```json
{
  "message": "メールフォーム「コンテンツタイトル」を更新しました。",
  "mailContent": {
    "id": 2,
    "description": null,
    "sender_1": "",
    "sender_2": null,
    "sender_name": "テスト名",
    "subject_user": "テストユーザー",
    "subject_admin": "テストアドミン",
    "form_template": "default",
    "mail_template": "mail_default",
    "redirect_url": null,
    "widget_area": null,
    "ssl_on": false,
    "save_info": true,
    "auth_captcha": false,
    "publish_begin": null,
    "publish_end": null,
    "created": "2023-04-03T14:46:05+09:00",
    "modified": "2023-04-03T15:27:55+09:00",
    "mail_fields": [
    ],
    "content": {
      "id": 28,
      "name": "%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E5%90%8D",
      "plugin": "BcMail",
      "type": "MailContent",
      "entity_id": 2,
      "url": "/%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E5%90%8D/",
      "site_id": 1,
      "alias_id": null,
      "main_site_content_id": null,
      "parent_id": 1,
      "lft": 24,
      "rght": 25,
      "level": 1,
      "title": "コンテンツタイトル",
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
      "created_date": "2023-04-03T15:27:55+09:00",
      "modified_date": null,
      "site_root": false,
      "deleted_date": null,
      "exclude_menu": false,
      "blank_link": false,
      "created": "2023-04-03T14:46:05+09:00",
      "modified": "2023-04-03T15:27:55+09:00",
      "site": {
        "id": 1,
        "main_site_id": null,
        "name": "",
        "display_name": "My Site",
        "title": "My Site",
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
        "created": "2023-03-29T21:50:36+09:00",
        "modified": "2023-03-29T21:50:54+09:00"
      }
    }
  },
  "content": {
    "id": 28,
    "name": "%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E5%90%8D",
    "plugin": "BcMail",
    "type": "MailContent",
    "entity_id": 2,
    "url": "/%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E5%90%8D/",
    "site_id": 1,
    "alias_id": null,
    "main_site_content_id": null,
    "parent_id": 1,
    "lft": 24,
    "rght": 25,
    "level": 1,
    "title": "コンテンツタイトル",
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
    "created_date": "2023-04-03T15:27:55+09:00",
    "modified_date": null,
    "site_root": false,
    "deleted_date": null,
    "exclude_menu": false,
    "blank_link": false,
    "created": "2023-04-03T14:46:05+09:00",
    "modified": "2023-04-03T15:27:55+09:00",
    "site": {
      "id": 1,
      "main_site_id": null,
      "name": "",
      "display_name": "My Site",
      "title": "My Site",
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
      "created": "2023-03-29T21:50:36+09:00",
      "modified": "2023-03-29T21:50:54+09:00"
    }
  },
  "errors": [
  ]
}

```
