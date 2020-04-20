# baserCMS5

## システム要件
- Webサーバー：Apache
- 開発言語：PHP7.2以降
- データベースサーバー：MySQL5以降 Or - PostgreSQL8.4以降 Or SQLite3
    - MariaDB動作可能
- 必須Apacheモジュール：Rewrite
- 必須PHPモジュール：GD2、libxml、cURL、mbstring、PDO
- 管理システム対応ブラウザ：Chrome・Firefox・Safari・Edge
- メール送信環境（sendmail or 外部SMTPサーバ）
- Postfix、qmailなどのsendmail互換MTAでも可能

## 各機能の仕様の定義について
- 各機能の仕様定義は、各機能メソッドのコメントに記載する
- 仕様定義については、[ドキュメントキーワード定義](https://baserproject.github.io/ucmitz/docs/keyword.md) を参考にアルファベットで定義を簡潔に記述する

## ログイン
- ユーザーIDとパスワードでログイン可能
- ログインすると管理機能にアクセス可能
- ログアウト可能

## 管理機能
- ログインしたユーザのみアクセス可能
- ログインしたユーザのみアクセスすることが出来る機能へのリンクを提供

## ユーザ管理
- ユーザ一覧が確認可能
- ユーザを追加可能
- ユーザを削除可能
- ユーザを編集可能

