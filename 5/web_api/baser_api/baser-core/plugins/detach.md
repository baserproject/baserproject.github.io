# プラグインの無効化

指定したプラグインを無効化します。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
POST /baser/api/baser-core/plugins/detach/{pluginName}.json
```

### パスパラメーター

| パラメーター名 | 型     | 必須  | 内容     |
|---------|-------|-----|--------|
| pluginName　   | 文字列	 | ●   | プラグイン名 |

## レスポンス例

### レスポンスボディ

```json
{
  "plugin": {
    "id": 4,
    "name": "BcThemeConfig",
    "title": "テーマ設定",
    "version": "5.0.0-beta",
    "status": true,
    "db_init": null,
    "priority": 4,
    "created": null,
    "modified": "2023-03-15T17:20:11+09:00"
  },
  "message": "プラグイン「BcThemeConfig」を無効にしました。"
}
```
