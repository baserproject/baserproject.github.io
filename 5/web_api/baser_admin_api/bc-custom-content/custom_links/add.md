# 関連フィールドの新規追加

関連フィールドを新しく登録します。
## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
POST /baser/api/admin/bc-custom-content/custom_links.json
```

### リクエストボディ

| パラメーター名        | 型      | 必須  | 内容                               |
|----------------|--------|-----|----------------------------------|
| custom_table_id           | 数値     |  ●   | カスタムテーブルID |
| custom_field_id           | 数値     |   ●  | カスタムフィールドID                            |
| name          | 文字列    |  ●   | カスタムリンク名                             |
| title          | 文字列    |     | タイトル                  |
| no          | 数値     |     | NO                         |
| parent_id          | 数値     |     | 親カスタムリンクID                         |
| level          | 数値     |     | レベル                         |
| lft          | 数値     |     | 右位置                         |
| rght          | 数値  |     | 左位置                         |
| before_head          | 文字列 |     | 前見出し                         |
| after_head          | 文字列 |     | 後見出し                         |
| description          | 文字列 |     | 説明文                         |
| attention          | 文字列 |     | 注意書き                         |
| class          | 文字列 |     | グループバリデーション                         |
| options          | 文字列 |     | オプション                         |
| group_valid          | 真偽値 |     | グループバリデーション                         |
| before_linefeed          | 真偽値 |     | 入力欄の前に改行を入れる                         |
| after_linefeed          | 真偽値 |     | 入力欄の後に改行を入れる                         |
| use_loop          | 真偽値 |     | ループを利用するかどうか                         |
| display_admin_list          | 真偽値 |     | 管理画面の一覧に表示するかどうか                         |
| display_front          | 真偽値 |     | テーマのヘルパーで呼び出せるかどうか                         |
| search_target_admin          | 真偽値 |     | 管理画面の検索対象にするかどうか                         |
| search_target_front          | 真偽値 |     | フロントの検索対象にするかどうか                         |
| use_api          | 真偽値 |     | APIで利用するかどうか                         |
| required          | 真偽値 |     | 必須かどうか                         |
| status          | 真偽値 |     | 利用するかどうか                         |


## レスポンス例

### レスポンスボディ

```json
{
  "customLink": {
    "custom_table_id": 1,
    "custom_field_id": 1,
    "name": "location",
    "title": "住所",
    "type": "text",
    "created": "2023-04-06T19:07:40+09:00",
    "modified": "2023-04-06T19:07:40+09:00",
    "lft": 73,
    "rght": 74,
    "level": 0,
    "id": 149
  },
  "message": "カスタムリンク「住所」を追加しました。",
  "errors": null
}
```
