# システム要件

- Webサーバー：Apache
- 開発言語：PHP8.1以降　　　　　　　
- データベースサーバー：MySQL8以降 Or PostgreSQL10以降 Or SQLite3
  - MariaDB動作可能です。
- 必須Apacheモジュール：Rewrite
- 必須PHPモジュール：GD2、libxml、cURL、mbstring、PDO、intl
- 推奨PHPモジュール： Zip
- 管理システム対応ブラウザ：Chrome・Firefox・Safari・Microsoft Edge最新版
- メール送信環境（sendmail or 外部SMTPサーバ）
  - Postfix、qmailなどのsendmail互換MTAでも可能です。

## 開発環境
baserCMS５は2023年1月6日現在下記の環境にて開発されています。
※ 開発環境は随時更新されます

- OS：Debian11.3
- Webサーバー：Apache2.4
- 開発言語:PHP8.1
- データベースサーバー：MySQL8.0, PostgreSQL10.5