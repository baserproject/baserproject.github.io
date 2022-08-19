# システムメッセージ設計書

インフォメーションやエラーメッセージなどのメッセージを画面タイトル下に表示する事ができる。  
PHPで制御する方法とJavascript で制御する方法を提供する。

　
## PHPで制御する方法

コントローラーにて `BcMessageComponent` を利用して設定する。

- **setError:** エラーメッセージとして表示する。
- **setInfo:** インフォメーションとして表示する。
- **setSuccess:** 処理成功のメッセージとして表示する。
- **setWarning:** 警告メッセージとして表示する。

```php
// コントローラーにて
$this->BcMessage->setSuccess(__d('baser', 'ユーザー「{0}」を追加しました。', $user->name));
``` 

　
## Javascriptで制御する方法

jquery.bcUtil.js を利用して表示する。

- **showAlertMessage:** エラーメッセージとして表示する。
- **showNoticeMessage:** 通知メッセージとして表示する。
- **hideMessage:** メッセージを非表示にする。

```javascript
// Javascript にて
$.bcUtil.showAlertMessage(bcI18n.contentsEditAlertMessage1);
$.bcUtil.hideMessage();
```

　
