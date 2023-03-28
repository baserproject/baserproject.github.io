# プラグイン情報の並び替え

指定したプラグイン情報の並び替えを行います。

### 実行可能な権限
```
システム管理者以上
```

### リクエスト
```
POST /baser/api/baser-core/plugins/update_sort.json
```

### リクエストボディ

| パラメーター名       | 型     | 必須    | 内容                                                 |
|---------------|-------|-------|----------------------------------------------------|
| id | 数値   | ●     | コアクセス設定ID                                            |
| offset         | 数値 | ●     | 並び順 |

### レスポンス例
#### レスポンスボディ
```json
{
  "plugin": {
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
  "message": "プラグイン「BcSearchIndex」の並び替えを更新しました。"
}
```
