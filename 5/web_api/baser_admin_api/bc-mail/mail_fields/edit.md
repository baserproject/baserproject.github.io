# メールフィールドの編集

既存のメールフィールドの設定を編集します。
編集の際、フィールド名が変更となった場合は、 メッセージテーブルのフィールド名も変更します。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
PATCH /baser/api/admin/bc-mail/mail_fields/{mailFieldId}.json
```

### パスパラメーター

| パラメーター名   | 型   | 必須  | 内容                |
|-----------|-----|-----|-------------------|
| mailFieldId        | 数値  | ●   | メールフィールドID              |

### リクエストボディ

| パラメーター名   | 型   | 必須  | 内容     |
|-----------|-----|-----|--------|
| mail_content_id   | 数値  |     | メールコンテンツID |
| field_name   | 文字列 | 　   | フィールド名 |
| no   | 数値 | 　   | No |
| name   | 文字列 | 　   | 送信先メールアドレス |
| field_name   | 文字列 | 　   | 項目名 |
| type   | 文字列 | 　   | タイプ |
| head   | 文字列 | 　   | 項目見出し |
| attention   | 文字列 | 　   | 必須マーク |
| before_attachment   | 文字列 | 　   | 前見出し |
| after_attachment   | 文字列 | 　   | 後見出し |
| source   | 文字列 | 　   | 選択リスト |
| size   | 数値 | 　   | 表示サイズ |
| text_rows   | 数値 | 　   | 行数 |
| maxlength   | 数値 | 　   | 最大文字数 |
| options   | 文字列 | 　   | オプション |
| class   | 文字列 | 　   | クラス名 |
| separator   | 文字列 | 　   | セパレーター |
| default_value   | 文字列 | 　   | 初期値 |
| description   | 文字列 | 　   | 説明文 |
| group_field   | 文字列 | 　   | グループ名 |
| group_valid   | 文字列 | 　   | グループ入力チェック |
| valid   | 文字列 | 　   | 入力必須 |
| valid_ex   | 文字列 | 　   | 入力チェック |
| auto_convert   | 文字列 | 　   | 自動変換 |
| not_empty   | 真偽値 | 　   | 必須マーク |
| use_field   | 真偽値 | 　   | 利用状態 |
| no_send   | 真偽値 | 　   | メール送信 |
| sort   | 数値 | 　   | 送信先メールアドレス |

## レスポンス例

### レスポンスボディ

```json
{
  "mailField": {
    "id": 6,
    "mail_content_id": 1,
    "no": 7,
    "name": "メールアドレス",
    "field_name": "email_1",
    "type": "email",
    "head": "メールアドレス",
    "attention": "",
    "before_attachment": "",
    "after_attachment": "",
    "source": "",
    "size": null,
    "text_rows": null,
    "maxlength": 50,
    "options": "",
    "class": "",
    "default_value": "",
    "description": "",
    "group_field": "email",
    "group_valid": "email",
    "valid": "",
    "valid_ex": "VALID_EMAIL_CONFIRM,VALID_EMAIL",
    "auto_convert": "",
    "not_empty": true,
    "use_field": true,
    "no_send": false,
    "sort": 6,
    "created": "2023-03-29T21:50:37+09:00",
    "modified": null,
    "mail_content": {
      "id": 1,
      "description": "<p>このコンテンツはメールフォーム機能により作られており、この文章については管理画面の [お問い合わせ] &rarr; [設定] より更新ができます。また、メールフォームは [コンテンツ管理] よりいくつでも作成することができます。</p>",
      "sender_1": "",
      "sender_2": "",
      "sender_name": "テスト名",
      "subject_user": "テストユーザー",
      "subject_admin": "テストアドミン",
      "form_template": "default",
      "mail_template": "mail_default",
      "redirect_url": "/",
      "widget_area": null,
      "ssl_on": false,
      "save_info": true,
      "auth_captcha": true,
      "publish_begin": null,
      "publish_end": null,
      "created": "2023-03-29T21:50:36+09:00",
      "modified": "2023-04-03T15:27:27+09:00",
      "content": {
        "id": 9,
        "name": "%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E5%90%8D",
        "plugin": "BcMail",
        "type": "MailContent",
        "entity_id": 1,
        "url": "/%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E5%90%8D/",
        "site_id": 1,
        "alias_id": null,
        "main_site_content_id": null,
        "parent_id": 1,
        "lft": 16,
        "rght": 17,
        "level": 1,
        "title": "コンテンツタイトル",
        "description": "",
        "eyecatch": "",
        "author_id": 1,
        "layout_template": "",
        "status": false,
        "publish_begin": null,
        "publish_end": null,
        "self_status": false,
        "self_publish_begin": null,
        "self_publish_end": null,
        "exclude_search": false,
        "created_date": "2023-04-03T15:27:27+09:00",
        "modified_date": null,
        "site_root": false,
        "deleted_date": null,
        "exclude_menu": false,
        "blank_link": false,
        "created": "2023-03-29T21:50:36+09:00",
        "modified": "2023-04-03T15:27:27+09:00"
      }
    }
  },
  "message": "メールフィールド「メールアドレス」を更新しました。",
  "errors": null
}

```
