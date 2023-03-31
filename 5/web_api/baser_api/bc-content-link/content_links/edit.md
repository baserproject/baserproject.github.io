# コンテンツリンクの編集

指定したコンテンツリンクを編集します

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
PATCH /baser/api/bc-content-link/content_links/{contentLinkId}.json
```

### パスパラメーター

| パラメーター名   | 型   | 必須  | 内容               |
|-----------|-----|-----|------------------|
| contentLinkId        | 数値  | ●   |コンテンツリンクのID              |

### リクエストボディ

| パラメーター名                       | 型   | 必須  | 内容                |
|-------------------------------|-----|-----|-------------------|
| content[name]                 | 文字列	  |     | 名称               |
| content[site_id]              | 数値 |     | サイトID              |
| content[parent_id]            | 数値 |     | 親コンテンツID              |
| content[title]                | 文字列 |     | タイトル              |
| content[plugin]               | 文字列 |     | プラグイン名              |
| content[type]                 | 文字列 |     | コンテンツタイプ              |
| content[entity_id]            | 数値 |     | 実体ID               |
| content[url]                  | 文字列 |     | URL              |
| content[alias_id]             | 数値 |     | エイリアスID              |
| content[main_site_content_id] | 数値 |     | メインサイトコンテンツID              |
| content[lft]                  | 数値 |     | 左位置              |
| content[rght]                 | 数値 |     | 右位置              |
| content[level]                | 数値 |     | 深さ              |
| content[description]          | 文字列 |     | 説明文              |
| content[eyecatch]             | 文字列 |     | アイキャッチ              |
| content[author_id]            | 数値 |     | 作成者ID              |
| content[layout_template]      | 文字列 |     | レイアウトテンプレート              |
| content[status]               | 真偽値 |     | 公開状態              |
| content[publish_begin]        | 文字列 |     | 公開開始日              |
| content[publish_end]          | 文字列 |     | 公開終了日              |
| content[self_status]          | 真偽値 |     | コンテンツ自身の公開状態              |
| content[self_publish_begin]   | 文字列 |     | コンテンツ自身の公開開始日              |
| content[self_publish_end]     | 文字列 |     | コンテンツ自身の公開終了日              |
| content[exclude_search]       | 真偽値 |     | サイト内検索除外              |
| content[created_date]         | 文字列 |     | コンテンツ作成日              |
| content[modified_date]        | 文字列 |     | コンテンツ更新日              |
| content[site_root]            | 真偽値 |     | サイトルートフラグ              |
| content[deleted_date]         | 真偽値 |     | 削除日              |
| content[exclude_menu]         | 真偽値 |     | 公開ページのメニューより除外              |
| content[blank_link]           | 真偽値 |     | メニューのリンクを別ウィンドウで開く              |
| url                           | 文字列 |     | リンク先URL              |


## レスポンス例

### レスポンスボディ

```json
{
  "message": "コンテンツリンク: 「コンテンツリンクの編集」を更新しました。",
  "contentLink": {
    "id": 4,
    "url": "/vn",
    "created": null,
    "modified": null,
    "content": {
      "id": 20,
      "name": "%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E3%83%AA%E3%83%B3%E3%82%AF%E3%82%92%E7%B7%A8%E9%9B%86%E3%81%97%E3%81%BE%E3%81%99",
      "plugin": "BcContentLink",
      "type": "ContentLink",
      "entity_id": 4,
      "url": false,
      "site_id": 1,
      "alias_id": null,
      "main_site_content_id": null,
      "parent_id": 0,
      "lft": 33,
      "rght": 34,
      "level": 0,
      "title": "コンテンツリンクの編集",
      "description": null,
      "eyecatch": null,
      "author_id": 1,
      "layout_template": null,
      "status": false,
      "publish_begin": null,
      "publish_end": null,
      "self_status": false,
      "self_publish_begin": null,
      "self_publish_end": null,
      "exclude_search": false,
      "created_date": "2023-03-31T15:02:35+09:00",
      "modified_date": null,
      "site_root": false,
      "deleted_date": null,
      "exclude_menu": false,
      "blank_link": false,
      "created": "2023-03-31T14:57:20+09:00",
      "modified": "2023-03-31T15:02:35+09:00",
      "site": {
        "id": 1,
        "main_site_id": null,
        "name": "",
        "display_name": "My Site",
        "title": "My Site",
        "alias": "",
        "theme": "BcFront",
        "status": true,
        "keyword": "",
        "description": "",
        "use_subdomain": false,
        "relate_main_site": false,
        "device": "",
        "lang": "",
        "same_main_url": false,
        "auto_redirect": false,
        "auto_link": false,
        "domain_type": null,
        "created": "2023-03-29T21:50:36+09:00",
        "modified": "2023-03-29T21:50:54+09:00"
      }
    }
  },
  "errors": null
}

```
