# プラグインのアンインストール

指定したプラグインをアンインストールします。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
POST /baser/api/admin/baser-core/plugins/uninstall/{pluginName}.json
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
    "id": 6,
    "name": "BcCustomContent",
    "title": "カスタムコンテンツ",
    "version": "5.0.0-beta",
    "status": true,
    "db_init": false,
    "priority": 6,
    "created": null,
    "modified": "2023-03-28T17:02:37+09:00"
  },
  "message": "プラグイン「BcCustomContent」を削除しました。"
}
```
