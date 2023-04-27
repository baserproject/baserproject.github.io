# BcBaser統合ヘルパ

baserCMSでは、ビューテンプレートを効率良く作成する仕組みとして、様々なヘルパーを用意しており、また、独自でも自由に作成することができます。

ただ、多くのヘルパーを利用できるがゆえに、やりたいことがどのヘルパが持っていたかがわかりにくくなってきます。

baserCMSでは、テーマの作成において、`BcBaserHelper` を主として利用するようにしていますが、この `BcBaserHelper` にプラグインによりメソッドを追加する仕組みが「BcBaser統合ヘルパ」として備わっています。

## 統合ヘルパクラスを準備する
baserCMSに統合ヘルパとして認識させるには、`{YourPluginName}BaserHelper` という名称で自身のプラグインに配置する必要があります。  
その際、`BcPluginBaserHelperInterface` を実装してください。

```php
// /plugins/YourPluginName/src/View/Helper/YourPluginNameBaserHelper.php
class YourPluginName extends Helper implements BcPluginBaserHelperInterface
{

}
```

## 関連付け用のメソッドを実装する
`BcPluginBaserHelperInterface` の実装条件は、`methods` メソッドを実装することです。

ここには、`BcBaserHelper` のメソッドとして認識させるメソッド名と、それに紐付ける、ヘルパー名とメソッド名を定義します。

その際、紐付けるヘルパーを `helpers` プロパティで定義しておく必要があります。

```php
class YourPluginName extends Helper implements BcPluginBaserHelperInterface
{
    public $helpers = ['BcBlog.Blog'];
    
    public function methods(): array
    {
        return [
            // $this->BcBaser->blogPosts() を呼び出すと、BlogHelper::posts() を呼び出します
            'blogPosts' => ['Blog', 'posts'],
            // $this->BcBaser->getPosts() を呼び出すと、BlogHelper::getPosts() を呼び出します
            'getBlogPosts' => ['Blog', 'getPosts']
        ];
    }        
}
```
