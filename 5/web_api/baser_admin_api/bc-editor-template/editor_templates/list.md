# エディターテンプレートのリスト取得

エディターテンプレートのリストを取得します

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
GET /baser/api/admin/bc-editor-template/editor_templates/list.json
```

## レスポンス例

### レスポンスボディ

```json
{
  "editorTemplates": {
    "1": "画像（左）とテキスト",
    ...
  }
}
```
