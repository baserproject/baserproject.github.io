# エディタタイプ切り替え

baserCMSではCKEditorが標準のWYSIWYGエディタですが、エディタを利用しない設定にしたり、プラグインから別のエディタに切り替える事ができます。

## エディタの作成方法

### ヘルパの作成
下記の場所にヘルパを作成します。

```shell
/plugins/{PluginName}/src/View/Helper/{HelperNameHelper}.php
```

### editorメソッド定義
ヘルパ内には、editorメソッドを定義し、エディタを出力するコードを記述します。
その際、Javascript等により $fieldName をベースとしたフォームコントロールに入力値が格納されるように実装します。

```php
// 例
class SampleEditorHelper extends Helper {

    public $helpers = ['BcForm'];

    public function editor($fieldName, $options) {

        $editor = $this->build($fieldName, $options);
        $textarea = $this->BcForm->textarea($fieldName);
        return $editor . $textarea;
        
    }

    protected function build($fieldName, $options = []) {
        // エディタ生成処理
        return $editor;
    }

}
```

### 設定ファイル設置

設定ファイルを設定し、エディタ選択リストに作成したエディタを定義します。
 
```php
// /plugins/{PluginName}/config/setting.php
$config = ['BcApp' => [
    'editors' => ['PluginName.HelperName' => 'エディタ名']
]];
```

※ HelperNameには末尾のHelperは含めないようにします。  
※ {エディタ名}は選択リストに表示される名称です。
