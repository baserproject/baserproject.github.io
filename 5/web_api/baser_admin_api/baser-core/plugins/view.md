# プラグイン情報の取得

指定したプラグイン情報を取得します。

### 実行可能な権限
```
システム管理者以上
```

### リクエスト
```
GET /baser/api/admin/baser-core/plugins/{pluginId}.json
``` 

### パスパラメーター

| パラメーター名         | 型   | 内容       |
|-----------------|-----|----------|
| pluginId | 数値  |プラグインのID |

### レスポンス例
#### レスポンスボディ
```json
{
  "plugin": {
    "id": 2,
    "name": "BcBlog",
    "title": "ブログ",
    "version": "5.0.0-beta",
    "status": true,
    "db_init": null,
    "priority": 1,
    "created": null,
    "modified": "2023-03-28T17:07:29+09:00"
  },
  "message": null
}
```
