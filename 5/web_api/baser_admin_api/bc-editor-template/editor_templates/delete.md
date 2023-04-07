# エディターテンプレートの削除

指定したエディターテンプレートを削除します

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
DELETE /baser/api/admin/bc-editor-template/editor_templates/{editorTemplateId}.json
```

### パスパラメーター

| パラメーター名   | 型   | 必須  | 内容               |
|-----------|-----|-----|------------------|
| editorTemplateId        | 数値  | ●   |エディターテンプレートのID              |

## レスポンス例

### レスポンスボディ

```json
{
  "message": "エディタテンプレート「画像（左）とテキスト」を追加しました。",
  "editorTemplate": {
    "name": "画像（左）とテキスト",
    "image": "template1.gif",
    "description": "test description",
    "html": "test html",
    "created": "2023-04-05T17:47:06+09:00",
    "modified": "2023-04-05T17:47:06+09:00",
    "id": 4
  },
  "errors": null
}
```
