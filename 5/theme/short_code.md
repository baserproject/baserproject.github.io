# ショートコード

管理システムの各種入力欄にて、 `[Example.methodName]` のような形式の短いコードを埋め込むことで、そのデータを利用するフロントページにおいて Helper のメソッドを呼び出すことできる機能です。

## 実装方法
ここではプラグインに新しいショートコードを実装する方法を例としてご紹介します。 

### アプリケーション設定ファイルにショートコードを登録

```php
// /plugins/{PluginName}/config/setting.php
return [
    'BcShortCode' => [
        '{PluginName}' => [
            '{HelperName}.{methodName}'
        ]
    ]
];

// BcMailプラグインの例
// MailHelper の getForm メソッドを呼び出します
return [
    'BcShortCode' => [
        'BcMail' => [
            'Mail.getForm'
        ]
    ]
];
```

### Helperを準備する 
ショートコードに対応したヘルパーファイルを準備します。

ヘルパーの準備については[テーマヘルパー](./theme_helper) をご覧ください。


## 利用方法

上記で実装したショートコードを利用するには、各種、表示部分の編集欄において、ショートコードを、任意の箇所に入力します。

```shell
# MailHelper の getForm メソッドの場合
[Mail.getForm]
```

### 引数を持つメソッドについて

引数を持つメソッドの場合には、スペースで区切って、カンマ区切りで引数を定義します。

```shell
[Example.methodName 1,2,3]
```

### 配列の引数を持つメソッドについて

配列の引数を持つ場合は、`|` で区切って key と value を指定します。

```shell
[Example.methodName 1,key1|value1|key2|value2,3]
```

