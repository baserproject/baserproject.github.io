# baserマーケットのプラグインデータを取得

baserマーケットのプラグインデータを取得します。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
POST /baser/api/admin/baser-core/plugins/get_market_plugins.json
```
## レスポンス例

### レスポンスボディ

```json
{
  "plugins": [
    {
      "title": "ログイン画面セキュリティ強化",
      "link": "https://market.basercms.net/products/detail.php?product_id=155",
      "guid": "https://market.basercms.net/products/detail.php?product_id=155",
      "category": "プラグイン",
      "description": "ログイン画面のセキュリティを強化します。",
      "enclosure": {
        "@url": "https://market.basercms.net/upload/save_image/01072023_63b9564f8f76a.png",
        "@type": "image/png",
        "@length": "141643"
      },
      ...
    ]
    }
```
