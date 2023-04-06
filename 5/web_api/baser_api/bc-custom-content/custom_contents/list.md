# カスタムコンテンツのリスト取得

カスタムコンテンツをリストします。

## 実行に必要な権限

```
ログインユーザー以上
```

## リクエスト
```
GET baser/api/admin/bc-custom-content/custom_contents/list.json
```

## レスポンス例

### レスポンスボディ

```json
{
  "customContents": {
    "1": "ベトナム",
    ...
  }
}

```
