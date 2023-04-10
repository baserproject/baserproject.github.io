# テーマフォルダの一括処理

一括処理として次の機能を提供します

- 一括削除

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
POST /baser/api/admin/bc-theme-file/theme_folders/batch.json
```

### リクエストボディ

| パラメーター名       | 型     | 必須    | 内容         |
|---------------|-------|-------|------------|
| batch_targets | 配列   | ●     | メールフィールドID |
| batch         | 文字列 | ●     | 削除: delete |

## レスポンス例

### レスポンスボディ

```json
{
  "message": "一括処理が完了しました。"
}
```