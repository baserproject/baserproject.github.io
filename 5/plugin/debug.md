# デバッグ方法

デバッグとは、変数等の状態を知る事から始めると思いますが、baserCMSのデバッグは、基本的に [CakePHP](http://cakephp.jp) と同じ手法で行う事ができます。ここでは代表的なデバッグ方法を説明します。CakePHPのデバッグについては、下記ページをご覧ください。

[デバッグ ー CakePHP Cookbook 4.x](https://book.cakephp.org/4/ja/development/debugging.html)

画面が真っ白になってしまう場合や予期せぬNOT FOUNDエラーが発生した場合は、内部的にエラーが発生している可能性があります。

デバックモードに切り替え、表示されたエラーメッセージを [ユーザーズフォーラム](https://forum.basercms.net){:target="_blank"} にご報告頂けると 解決できる場合もあります。是非ご活用下さい。


## デバッグモードに切り替える

通常、baserCMSでは、エラーが発生した場合、エラー内容の詳細を表示しない仕様となっていますが、デバッグモードに切り替える事でエラー内容の詳細を確認する事ができます。  
baserCMSでは、デバッグモードに切り替える方法が２つあります。

### 管理システムより切り替える

管理システムにログインし、「システム管理」を開き、「制作・開発モード」をデバッグモードに切り替え保存します。  
※ 管理システムより切り替える場合、`/config/.env` への書き込み権限が設定されている必要があります。

### ソースコードより切り替える

`/config/.env` で定義されている、環境変数を `true` 書き換えます。

```shell
# /config/.env
export DEBUG="true"
```

## PHPの変数の内容をダンプする

CakePHPの
[debug()](https://book.cakephp.org/4/ja/development/debugging.html#id2)
関数を利用します。  
debug 関数の場合、デバッグモードの場合のみ出力します。

```php
debug($variable);
```

