# サーバーキャッシュを削除する

/tmp/cache/ 配下のキャッシュファイルを削除します。

### 実行可能な権限
```
システム管理者（システム管理者の追加はユーパーユーザーのみ）
```

### リクエスト
```
POST /baser/api/admin/baser-core/utilities/clear_cache.json
```

### レスポンス例
#### レスポンスボディ
```json
{
  "message": "サーバーキャッシュを削除しました。"
}

```
