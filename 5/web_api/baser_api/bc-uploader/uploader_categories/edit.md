# アップロードカテゴリの編集

既存のアップロードカテゴリを編集します。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
PATCH /baser/api/admin/bc-uploader/uploader_categories/{uploaderCategoryId}.json
```

### パスパラメーター

| パラメーター名   | 型   | 必須  | 内容        |
|-----------|-----|-----|-----------|
| uploaderCategoryId   | 数値  | ●   | アップロードカテゴリID       |

### リクエストボディ

| パラメーター名   | 型   | 必須  | 内容        |
|-----------|-----|-----|-----------|
| name   | 文字列  | ●   | カテゴリ名       |

## レスポンス例

### レスポンスボディ

```json
{
  "uploaderCategory": {
    "id": 1,
    "name": "vietnam",
    "modified": "2023-04-05T12:25:56+09:00",
    "created": "2023-04-05T12:14:23+09:00"
  },
  "message": "アップロードカテゴリ「vietnam」を更新しました。",
  "errors": null
}
```
