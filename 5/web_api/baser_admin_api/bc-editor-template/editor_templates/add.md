# エディターテンプレートの新規追加

新しいエディターテンプレートを登録します

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
POST /baser/api/admin/bc-editor-template/editor_templates.json
```

### リクエストボディ

| パラメーター名                       | 型    | 必須  | 内容    |
|-------------------------------|------|-----|-------|
| name                           | 文字列  |   ●  | テンプレート名    |
| image                           | file |    ● | アイコン画像    |
| description                           | 文字列  | ●    | 説明文  |
| html                           | 文字列  |   ●  | コンテンツ |


## レスポンス例

### レスポンスボディ

```json
{
  "editorTemplate": {
    "id": 4,
    "name": "画像（左）とテキスト",
    "image": "template1.gif",
    "description": "test description",
    "html": "test html",
    "modified": "2023-04-05T17:47:06+09:00",
    "created": "2023-04-05T17:47:06+09:00"
  },
  "message": "エディタテンプレート「画像（左）とテキスト」を削除しました。"
}
```
