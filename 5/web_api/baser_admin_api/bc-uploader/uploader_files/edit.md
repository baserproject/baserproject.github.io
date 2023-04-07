# アップロードファイルの編集

既存のアップロードファイルを編集します

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
PATCH /baser/api/admin/bc-uploader/uploader_files/{uploaderFileId}.json
```

### パスパラメーター

| パラメーター名   | 型   | 必須  | 内容        |
|-----------|-----|-----|-----------|
| uploaderFileId   | 数値  | ●   | アップロードファイルID       |


### リクエストボディ

| パラメーター名 | 型    | 必須  | 内容             |
|---------|------|-----|----------------|
| file    | ファイル | ●   | アップロードファイルファイル |
| name    | 文字列   | ●   | ファイル名 |
| alt    | 文字列   | ●   | alt属性 |
| uploader_category_id    | 数値   | ●   | アップローダーカテゴリ |


## レスポンス例

### レスポンスボディ

```json
{
  "message": "アップロードファイル「logo」を更新しました。",
  "uploaderFile": {
    "id": 5,
    "name": "logo",
    "alt": "ロゴ",
    "uploader_category_id": 1,
    "user_id": 1,
    "publish_begin": null,
    "publish_end": null,
    "created": "2023-04-05T13:58:55+09:00",
    "modified": "2023-04-05T14:11:32+09:00",
    "file": {
      "tmp_name": "/tmp/php97fUuL",
      "error": 0,
      "name": "img3.jpg",
      "type": "image/jpeg",
      "size": 19252
    }
  },
  "errors": null
}
```
