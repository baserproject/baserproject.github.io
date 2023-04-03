# プラグインの追加

プラグインを追加します。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
POST /baser/api/admin/baser-core/plugins.json
```

### リクエストボディ

| パラメーター名 | 型     | 必須  | 内容           |
|---------|-------|-----|--------------|
| file　   | ファイル	 | ●   | プラグインの圧力ファイル |

## レスポンス例

### レスポンスボディ

```json
{
  "plugin":{
    "id": 1,
    "name": "BcSearchIndex",
    "title": "サイト内検索",
    "version": "5.0.0-beta",
    "status": true,
    "db_init": null,
    "priority": 1,
    "created": null,
    "modified": "2023-03-15T17:20:11+09:00"
  },
  "message": "新規プラグイン「BcSearchIndex」を追加しました。",
  "errors": null
}
```
