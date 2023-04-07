# エディターテンプレートの編集

指定したエディターテンプレートを編集します

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
PATCH /baser/api/admin/bc-editor-template/editor_templates.json
```

### リクエストボディ

| パラメーター名                       | 型    | 必須  | 内容    |
|-------------------------------|------|-----|-------|
| name                           | 文字列  |  ●   | テンプレート名    |
| image                           | file |   ●  | アイコン画像    |
| description                           | 文字列  |    ● | 説明文  |
| html                           | 文字列  |  ●   | コンテンツ |


## レスポンス例

### レスポンスボディ

```json
{
  "editorTemplate": {
    "id": 1,
    "name": "画像（左）とテキスト",
    "image": "template1.gif",
    "description": "画像を左に配置し、その右にテキストを配置するブロックです。",
    "html": "<div class=\"template-image-float-left clearfix\">\n<div class=\"image\">ここに画像を挿入します</div>\n<div class=\"text\">\n<h2>見出しを挿入します。</h2>\n<p>1段落目のテキストを挿入します。</p>\n<p>2段落目のテキストを挿入します。</p>\n</div>\n</div>\n<p>新しいブロックを挿入します。不要な場合はこの段落を削除します</p>",
    "modified": null,
    "created": null
  },
  "message": "エディタテンプレート「画像（左）とテキスト」を更新しました。",
  "errors": null
}

```
