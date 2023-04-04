# メールメッセージのCSVダウンロード

メールメッセージのCSVダウンロードします。

### 実行可能な権限
```
システム管理者以上
```

### リクエスト
```
POST /baser/api/admin/bc-mail/mail_messages/download/{mailContentId}.json
```

### パスパラメーター

| パラメーター名   | 型   | 必須  | 内容          |
|-----------|-----|-----|-------------|
| mailContentId        | 数値  | ●   | メールコンテンツのID |

