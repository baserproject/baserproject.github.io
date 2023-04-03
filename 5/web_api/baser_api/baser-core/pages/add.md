# 固定ページの追加

固定ページを追加します。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
POST /baser/api/admin/baser-core/pages.json
```

### リクエストボディ

| パラメーター名   | 型   | 必須  | 内容                |
|-----------|-----|-----|-------------------|
| content[name] | 文字列	  | ●   | 名称               |
| content[site_id]   | 数値 |  ●   | サイトID              |
| content[parent_id]   | 数値 |   ●  | 親コンテンツID              |
| content[title]   | 文字列 |  ●   | タイトル              |
| contents | 文字列	  |     | 本文              |
| draft | 文字列	  |     | 草稿              |
| page_template | 文字列	  |     | テンプレート              |
| content[plugin]   | 文字列 |     | プラグイン名              |
| content[type]   | 文字列 |     | コンテンツタイプ              |
| content[entity_id]   | 数値 |     | 実体ID               |
| content[url]   | 文字列 |     | URL              |
| content[alias_id]   | 数値 |     | エイリアスID              |
| content[main_site_content_id]   | 数値 |     | メインサイトコンテンツID              |
| content[lft]   | 数値 |     | 左位置              |
| content[rght]   | 数値 |     | 右位置              |
| content[level]   | 数値 |     | 深さ              |
| content[description]   | 文字列 |     | 説明文              |
| content[eyecatch]   | 文字列 |     | アイキャッチ              |
| content[author_id]   | 数値 |     | 作成者ID              |
| content[layout_template]   | 文字列 |     | レイアウトテンプレート              |
| content[status]   | 真偽値 |     | 公開状態              |
| content[publish_begin]   | 文字列 |     | 公開開始日              |
| content[publish_end]   | 文字列 |     | 公開終了日              |
| content[self_status]   | 真偽値 |     | コンテンツ自身の公開状態              |
| content[self_publish_begin]   | 文字列 |     | コンテンツ自身の公開開始日              |
| content[self_publish_end]   | 文字列 |     | コンテンツ自身の公開終了日              |
| content[exclude_search]   | 真偽値 |     | サイト内検索除外              |
| content[created_date]   | 文字列 |     | コンテンツ作成日              |
| content[modified_date]   | 文字列 |     | コンテンツ更新日              |
| content[site_root]   | 真偽値 |     | サイトルートフラグ              |
| content[deleted_date]   | 真偽値 |     | 削除日              |
| content[exclude_menu]   | 真偽値 |     | 公開ページのメニューより除外              |
| content[blank_link]   | 真偽値 |     | メニューのリンクを別ウィンドウで開く              |

## レスポンス例

### レスポンスボディ

```json
{
  "page": {
    "content": {
      "name": "%E6%9C%AC%E6%96%87",
      "title": "新しい page",
      "site_id": 1,
      "parent_id": 1,
      "self_status": false,
      "self_publish_begin": null,
      "self_publish_end": null,
      "created_date": "2023-03-28T11:19:21+09:00",
      "site_root": false,
      "exclude_search": false,
      "author_id": 1,
      "plugin": "BaserCore",
      "type": "Page",
      "entity_id": 13,
      "lft": 30,
      "rght": 31,
      "level": 1,
      "created": "2023-03-28T11:19:21+09:00",
      "modified": "2023-03-28T11:19:21+09:00",
      "id": 19,
      "url": "/%E6%9C%AC%E6%96%87",
      "status": false,
      "main_site_content_id": null,
      "publish_begin": null,
      "publish_end": null
    },
    "created": "2023-03-28T11:19:21+09:00",
    "modified": "2023-03-28T11:19:21+09:00",
    "id": 13
  },
  "content": {
    "name": "%E6%9C%AC%E6%96%87",
    "title": "新しい page",
    "site_id": 1,
    "parent_id": 1,
    "self_status": false,
    "self_publish_begin": null,
    "self_publish_end": null,
    "created_date": "2023-03-28T11:19:21+09:00",
    "site_root": false,
    "exclude_search": false,
    "author_id": 1,
    "plugin": "BaserCore",
    "type": "Page",
    "entity_id": 13,
    "lft": 30,
    "rght": 31,
    "level": 1,
    "created": "2023-03-28T11:19:21+09:00",
    "modified": "2023-03-28T11:19:21+09:00",
    "id": 19,
    "url": "/%E6%9C%AC%E6%96%87",
    "status": false,
    "main_site_content_id": null,
    "publish_begin": null,
    "publish_end": null
  },
  "message": "固定ページ「新しい page」を追加しました。",
  "errors": null
}
```
