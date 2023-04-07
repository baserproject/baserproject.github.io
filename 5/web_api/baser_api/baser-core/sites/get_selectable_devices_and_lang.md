# 選択可能なデバイスと言語の一覧を取得する

選択可能なデバイスと言語の一覧を取得します。

### 実行可能な権限
```
システム管理者以上
```

### リクエスト
```
DELETE baser/api/admin/baser-core/sites/get_selectable_devices_and_lang/{mainSiteId}/{currentSiteId}.json
``` 

### パスパラメーター

| パラメーター名   | 型   | 必須  | 内容       |
|-----------|-----|-----|----------|
| mainSiteId        | 数値  | ●   | メインサイトID |
| currentSiteId        | 数値  |     | 現在サイトID  |

### レスポンス例
#### レスポンスボディ
```json
{
  "devices": {
    "指定しない",
    "mobile": "ケータイ",
    "smartphone": "スマートフォン"
  },
  "langs": {
    "指定しない",
    "english": "英語",
    "chinese": "中国語",
    "spanish": "スペイン"
  }
}

```
