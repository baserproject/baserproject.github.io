# メールフィールドの一括処理

指定したメールフィールドについて一括処理ができます。
- 削除
- 有効化
- 無効化

### 実行可能な権限
```
システム管理者以上
```

### リクエスト
```
POST /baser/api/admin/bc-mail/mail_fields/batch.json
``` 

### リクエストボディ

| パラメーター名       | 型     | 必須    | 内容                                                    |
|---------------|-------|-------|-------------------------------------------------------|
| batch_targets | 配列   | ●     | メールフィールドID                                            |
| batch         | 文字列 | ●     | 削除する: delete<br>有効化にする: publish <br>無効化にする: unpublish |


### レスポンス例
#### レスポンスボディ
```json
{
  "message": "一括処理が完了しました。"
}

```
