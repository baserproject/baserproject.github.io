# baserマーケットよりテーマの一覧の取得

baserマーケットよりテーマの一覧を取得します。

### 実行可能な権限
```
システム管理者以上
```

### リクエスト
```
GET /baser/api/baser-core/themes/get_market_themes.json
``` 

### レスポンス例
#### レスポンスボディ
```json
{
  "baserThemes": [
    {
      "title": "ratio_3_2(3系)",
      "link": "https://market.basercms.net/products/detail.php?product_id=89",
      "guid": "https://market.basercms.net/products/detail.php?product_id=89",
      "category": "テーマ",
      "description": "個人事業主・小規模店舗向けに、不要な機能を取り払い、必要な機能の自由度を強化したテーマです。コンテンツ作成・更新の、負荷軽減を考慮しています。",
      "enclosure": {
        "@url": "https://market.basercms.net/upload/save_image/12080112_5665b00712ed1.jpg",
        "@type": "image/jpeg",
        "@length": "170829"
      },
      ...
  ]
}


```
