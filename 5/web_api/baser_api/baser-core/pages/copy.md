# 固定ページのコピー

指定した固定ページ情報をコピーします。

### 実行可能な権限
```
システム管理者以上
```

### リクエスト
```
POST /baser/api/admin/baser-core/pages/copy.json
``` 

### リクエストボディ

| パラメーター名   | 型   | 必須  | 内容                |
|-----------|-----|-----|-------------------|
| entity_id        | 数値  | ●   | 実体ID              |
| title        | 文字列  | ●   | タイトル              |
| site_id        | 数値  | ●   | サイトID              |
| parent_id        | 数値  |     | 親コンテンツID              |

### レスポンス例
#### レスポンスボディ
```json
{
  "page": {
    "contents": "<h2>baserCMSサンプルテーマ</h2>\n\n<p>これは、baserCMSのサンプルテーマです。<br>\nトップページのこの部分は、固定ページで作られており、NEWS と baserCMS最新情報の部分は、テンプレートで作成されています。<br>\n変更する場合は、/Elements/top_info.php を変更してください。</p>\n\n<h3>グローバルメニューについて</h3>\n\n<p>グローバルメニューは、管理画面の [コンテンツ管理] のツリー構造と連動しています。ツリー構造上においてドラック＆ドロップで並び替えることができ、グローバルメニューに表示したくない場合は、対象コンテンツの編集画面より、[オプション] を開き、[公開ページのメニューより除外する] を選択し保存してください。</p>\n\n<p>また、グローバルメニュー部分を変更する場合は、/Elements/header.php を編集してください。</p>\n\n<h3>サイドバーについて</h3>\n\n<p>サイドバーはウィジェットエリア機能を利用して作られています。管理画面の [設定] &rarr; [ユーティリティ] &rarr; [ウィジェットエリア] より、カスタマイズが可能です。ブログでは「ブログサイドバー」を利用していますが、それ以外のコンテンツでは、「標準サイドバー」を利用しています。</p>\n\n<p>サイト基本設定は、各ブログの [設定] より利用するウィジェットエリアを変更することができます。</p>\n\n<p>また、サイドバー部分を変更する場合は、/Elements/widget_area.php を編集してください。</p>\n\n<h3>初期データについて</h3>\n\n<p>このサンプルテーマは２つの初期データを提供しています。現在利用しているものは「default」でサンプルのデータが入っているものになります。</p>\n\n<p>サンプルデータを入っていないものを利用したい場合は、テーマ管理より「empty」を選択し「初期データ読込」ボタンをクリックしてください。</p>",
    "draft": "",
    "page_template": "",
    "content": {
      "name": "index_4",
      "parent_id": 1,
      "title": "トップページ",
      "author_id": 1,
      "site_id": 1,
      "description": "",
      "eyecatch": "",
      "self_status": false,
      "self_publish_begin": null,
      "self_publish_end": null,
      "created_date": "2023-03-28T12:11:23+09:00",
      "site_root": false,
      "exclude_search": false,
      "plugin": "BaserCore",
      "type": "Page",
      "entity_id": 16,
      "lft": 36,
      "rght": 37,
      "level": 1,
      "created": "2023-03-28T12:11:23+09:00",
      "modified": "2023-03-28T12:11:23+09:00",
      "id": 22,
      "url": "/index_4",
      "status": false,
      "main_site_content_id": null,
      "publish_begin": null,
      "publish_end": null
    },
    "created": "2023-03-28T12:11:23+09:00",
    "modified": "2023-03-28T12:11:23+09:00",
    "id": 16
  },
  "content": {
    "name": "index_4",
    "parent_id": 1,
    "title": "トップページ",
    "author_id": 1,
    "site_id": 1,
    "description": "",
    "eyecatch": "",
    "self_status": false,
    "self_publish_begin": null,
    "self_publish_end": null,
    "created_date": "2023-03-28T12:11:23+09:00",
    "site_root": false,
    "exclude_search": false,
    "plugin": "BaserCore",
    "type": "Page",
    "entity_id": 16,
    "lft": 36,
    "rght": 37,
    "level": 1,
    "created": "2023-03-28T12:11:23+09:00",
    "modified": "2023-03-28T12:11:23+09:00",
    "id": 22,
    "url": "/index_4",
    "status": false,
    "main_site_content_id": null,
    "publish_begin": null,
    "publish_end": null
  },
  "message": "固定ページのコピー「%s」を追加しました。",
  "errors": null
}
```
