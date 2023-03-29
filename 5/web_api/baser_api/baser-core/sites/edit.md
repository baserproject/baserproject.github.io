# サイトの編集

指定したサイトを編集します。

### 実行可能な権限
```
システム管理者以上
```

### リクエスト
```
PATCH baser/api/baser-core/sites/{siteId}.json
``` 

### パスパラメーター

| パラメーター名 | 型   | 内容    |
|---------|-----|-------|
| siteId  | 数値  | サイトId |

### リクエストボディ

| パラメーター名 | 型     | 必須  | 内容           |
|---------|-------|-----|--------------|
| name　   | 文字列	 | ●   | サイト名称 |
| display_name　   | 文字列	 | ●   | 表示名 |
| alias　   | 文字列	 | ●   | 別名 |
| title　   | 文字列	 | ●   | プラグインの圧力ファイル |
| main_site_id　   | 数値	 |     | メインサイトID |
| theme　   | 文字列	 |     | テーマ名 |
| status　   | 真偽値	 |     | 公開状態 |
| keyword　   | 文字列	 |     | サイト基本キーワード |
| description　   | 文字列	 |     | サイト基本説明文 |
| use_subdomain　   | 数値	 |     | サブドメイン利用 |
| relate_main_site　   | 数値	 |     | メインサイト連携 |
| device　   | 文字列	 |     | デバイス |
| lang　   | 文字列	 |     | 言語 |
| same_main_url　   | 文字列	 |     | メインサイトと同一URLでアクセス |
| auto_redirect　   | 文字列	 |     | メインサイトから自動的にリダイレクト |
| auto_link　   | 文字列	 |     | 全てのリンクをサブサイト用に変換 |
| title　   | 文字列	 |     | ドメインタイプ |

### レスポンス例
#### レスポンスボディ
```json
{
  "site": {
    "id": 2,
    "main_site_id": null,
    "name": "site2",
    "display_name": "サイト名２",
    "title": "title site",
    "alias": "alias",
    "theme": null,
    "status": null,
    "keyword": null,
    "description": null,
    "use_subdomain": false,
    "relate_main_site": null,
    "device": null,
    "lang": null,
    "same_main_url": false,
    "auto_redirect": false,
    "auto_link": false,
    "domain_type": 0,
    "created": "2023-03-29T10:45:20+09:00",
    "modified": "2023-03-29T12:24:41+09:00"
  },
  "message": "サイト「site2」を更新しました。",
  "errors": null
}

```
