# お気に入りの並び替え

お気に入りが並び順を変更できます。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
POST /baser/api/admin/bc-favorite/favorites/change_sort.json
```

### リクエストボディ

| パラメーター名 | 型   | 必須  | 内容      |
|---------|-----|-----|---------|
| id      | 数値  | ●   | お気に入りID |
| offset    | 数値 | ●　   | 並び順  |

## レスポンス例

### レスポンスボディ

```json
{
  "result": true,
  "message": null
}

```
