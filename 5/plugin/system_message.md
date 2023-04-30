# システムメッセージ

baserCMSでは、インフォメーションやエラーメッセージなどのメッセージを画面タイトル下に表示する事ができます。  

メッセージの制御については、PHPで制御する方法とJavascript で制御する方法を提供しています。

 
## PHPで制御する方法

コントローラーにて `BcMessageComponent` を利用して設定します。  
「フラッシュメッセージ」としてメッセージをセッションに保存し、１度表示するまでは、リダイレクトをした後でも表示でき、１度表示した後は、次の画面遷移以降表示しない仕様となっています。

```php
// コントローラーにて
// インフォメーションとして表示
$this->BcMessage->setInfo('リダイレクトしました。');
// エラーメッセージとして表示
$this->BcMessage->setError('エラーが発生しました。');
// 処理成功のメッセージとして表示
$this->BcMessage->setSuccess('ユーザーを追加しました。');
// 警告メッセージとして表示
$this->BcMessage->setWarning('/tmp/ ディレクトリに書き込み権限を与えてください。');
``` 

 
## Javascriptで制御する方法

`jquery.bcUtil.js` を利用して制御します。

```javascript
// Javascript にて
// 通知メッセージとして表示
$.bcUtil.showNoticeMessage('リダイレクトしました。');
// エラーメッセージとして表示
$.bcUtil.showAlertMessage('エラーが発生しました。');
// メッセージを非表示にする
$.bcUtil.hideMessage();
```
