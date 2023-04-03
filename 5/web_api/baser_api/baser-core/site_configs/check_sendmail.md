# メールの送信テスト実行

メールの送信テストを実行します。

### 実行可能な権限
```
システム管理者以上
```

### リクエスト
```
POST /baser/api/admin/baser-core/site_configs/check_sendmail.json
``` 

### リクエストボディ

| パラメーター名       | 型     | 必須    | 内容         |
|---------------|-------|-------|------------|
| email         | 文字列 | ●     | 管理者メールアドレス |
| smtp_host        | 文字列 | ●     | SMTP設定のホスト    |
| smtp_port        | 文字列 | ●     | SMTP設定のポート    |
| smtp_user        | 文字列 | ●     | SMTP設定のユーザー    |
| smtp_password        | 文字列 | ●     | SMTP設定のパスワード    |
| smtp_tls         | 真偽値 | ●     | SMTP設定のTLS暗号化    |

### レスポンス例
#### レスポンスボディ
```json
{
  "message": ""
}

```
