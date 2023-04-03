# 取得可能なコアのバージョン情報を取得

取得可能なコアのバージョン情報を取得します。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
POST /baser/api/admin/baser-core/plugins/get_available_core_version_info.json
```
## レスポンス例

### レスポンスボディ

```json
{
  "availableCoreVersionInfo": {
    "latest": null,
    "versions": [
    ]
  }
}
```
