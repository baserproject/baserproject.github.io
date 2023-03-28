# 固定ページの編集

指定した固定ページ情報を編集します。

### 実行可能な権限
```
システム管理者以上
```

### リクエスト
```
PATCH baser/api/baser-core/pages/{pageId}.json
``` 

### パスパラメーター

| パラメーター名         | 型   | 内容        |
|-----------------|-----|-----------|
| pageId | 数値  | 固定のページのID |

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

### レスポンス例
#### レスポンスボディ
```json
{
  "page": {
    "id": 1,
    "contents": "<h2>baserCMSサンプルテーマ</h2>\n\n<p>これは、baserCMSのサンプルテーマです。<br>\nトップページのこの部分は、固定ページで作られており、NEWS と baserCMS最新情報の部分は、テンプレートで作成されています。<br>\n変更する場合は、/Elements/top_info.php を変更してください。</p>\n\n<h3>グローバルメニューについて</h3>\n\n<p>グローバルメニューは、管理画面の [コンテンツ管理] のツリー構造と連動しています。ツリー構造上においてドラック＆ドロップで並び替えることができ、グローバルメニューに表示したくない場合は、対象コンテンツの編集画面より、[オプション] を開き、[公開ページのメニューより除外する] を選択し保存してください。</p>\n\n<p>また、グローバルメニュー部分を変更する場合は、/Elements/header.php を編集してください。</p>\n\n<h3>サイドバーについて</h3>\n\n<p>サイドバーはウィジェットエリア機能を利用して作られています。管理画面の [設定] &rarr; [ユーティリティ] &rarr; [ウィジェットエリア] より、カスタマイズが可能です。ブログでは「ブログサイドバー」を利用していますが、それ以外のコンテンツでは、「標準サイドバー」を利用しています。</p>\n\n<p>サイト基本設定は、各ブログの [設定] より利用するウィジェットエリアを変更することができます。</p>\n\n<p>また、サイドバー部分を変更する場合は、/Elements/widget_area.php を編集してください。</p>\n\n<h3>初期データについて</h3>\n\n<p>このサンプルテーマは２つの初期データを提供しています。現在利用しているものは「default」でサンプルのデータが入っているものになります。</p>\n\n<p>サンプルデータを入っていないものを利用したい場合は、テーマ管理より「empty」を選択し「初期データ読込」ボタンをクリックしてください。</p>",
    "draft": "",
    "page_template": "",
    "modified": "2023-03-28T12:21:57+09:00",
    "created": "2015-06-26T20:34:06+09:00",
    "content": {
      "id": 4,
      "name": "%E6%9C%AC%E6%96%87",
      "plugin": "BaserCore",
      "type": "Page",
      "entity_id": 1,
      "url": "/%E6%9C%AC%E6%96%87",
      "site_id": 1,
      "alias_id": null,
      "main_site_content_id": null,
      "parent_id": 1,
      "lft": 2,
      "rght": 3,
      "level": 1,
      "title": "新しい page",
      "description": "",
      "eyecatch": "",
      "author_id": 1,
      "layout_template": "",
      "status": false,
      "publish_begin": null,
      "publish_end": null,
      "self_status": false,
      "self_publish_begin": null,
      "self_publish_end": null,
      "exclude_search": false,
      "created_date": "2023-03-28T12:21:57+09:00",
      "modified_date": null,
      "site_root": false,
      "deleted_date": null,
      "exclude_menu": false,
      "blank_link": false,
      "created": null,
      "modified": "2023-03-28T12:21:57+09:00",
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
        "created": "2023-03-13T12:36:40+09:00",
        "modified": "2023-03-13T12:36:41+09:00"
      }
    }
  },
  "content": {
    "id": 4,
    "name": "%E6%9C%AC%E6%96%87",
    "plugin": "BaserCore",
    "type": "Page",
    "entity_id": 1,
    "url": "/%E6%9C%AC%E6%96%87",
    "site_id": 1,
    "alias_id": null,
    "main_site_content_id": null,
    "parent_id": 1,
    "lft": 2,
    "rght": 3,
    "level": 1,
    "title": "新しい page",
    "description": "",
    "eyecatch": "",
    "author_id": 1,
    "layout_template": "",
    "status": false,
    "publish_begin": null,
    "publish_end": null,
    "self_status": false,
    "self_publish_begin": null,
    "self_publish_end": null,
    "exclude_search": false,
    "created_date": "2023-03-28T12:21:57+09:00",
    "modified_date": null,
    "site_root": false,
    "deleted_date": null,
    "exclude_menu": false,
    "blank_link": false,
    "created": null,
    "modified": "2023-03-28T12:21:57+09:00",
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
      "created": "2023-03-13T12:36:40+09:00",
      "modified": "2023-03-13T12:36:41+09:00"
    }
  },
  "message": "固定ページ 「新しい page」を更新しました。",
  "errors": null
}

```
