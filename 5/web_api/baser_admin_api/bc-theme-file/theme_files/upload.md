# テーマファイルのアップロード

新しくファイルをアップロードします。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
POST /baser/api/admin/bc-theme-file/theme_files/upload.json
```

### リクエストボディ

| パラメーター名   | 型   | 必須  | 内容         |
|-----------|-----|-----|------------|
| theme   | 数値  | ●   | テーマ        |
| type   | 文字列 | ●　  | タイプ        |
| path   | 文字列 | ●　  | パス         |
| plugin   | 数値 | ●   | プラグイン      |
| file   | 数値 | ●   | アップロードファイル |

## レスポンス例

### レスポンスボディ

```json
{
  "message": "アップロードに成功しました。"
}

```
