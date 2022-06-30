# BcAuthHelper

## ログインユーザ用のURLを判定

### 認証プレフィックスを取得

```
BcAuthHelper::getCurrentPrefix(): string
```

設定されている認証URLのプレフィックスを出力します。

```
$prefix = $this->BcAuth->getCurrentPrefix();
```

---
