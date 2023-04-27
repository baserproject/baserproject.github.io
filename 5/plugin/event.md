# イベント

CakePHPでは、イベントという処理をフックする仕組みを提供していますが、baserCMSでは、プラグインにてそのイベントを簡単に実装できるように機能を拡張しています。

ここでは、baserCMSのイベントの仕組みを説明します。CakePHP本来のイベントの仕組みについては、[イベントシステム](https://book.cakephp.org/4/ja/core-libraries/events.html){:target="_blank"} をご覧ください。



## イベントの発火（発動）
イベント発火する際、イベントを特定するキーの作成が必要となりますが、`BcEventDispatcherTrait` を利用することで、レイヤー名（Model / Controller / View / Helper）とプラグイン名、クラス名を考慮したイベントキーを自動生成する事ができます。

例えば、`SitesTable` にて、`beforeFind` を指定した場合、次のようなイベントキーを自動生成します。

```shell
Model.BaserCore.Sites.beforeFind
```

利用する場合には、クラスに `BcEventDispatcherTrait` を定義し、`dispatchLayerEvent` を呼び出します。

```php
class PagesTable {

    use BcEventDispatcherTrait;
    
    public function copy() {
        // PagesTable クラスの場合、
        // Model.BaserCore.Pages.beforeCopy としてイベントキーが生成される
        // 第２引数には、コールバック処理内で利用できる変数を定義
        $event = $this->dispatchLayerEvent('beforeCopy', [
            'data' => $page,
            'id' => $page->id
        ]);
    }
       
}
``` 

## コールバック処理の登録
イベント処理の登録は、CakePHPの仕様に合わせて登録する事もできますが、イベントリスナークラスを作成する事で、インスタンスの生成、イベントキーとコールバック処理の紐付けを自動化する事ができます。

### イベントリスナークラスの命名規則
イベントリスナークラスの名称は、`{PluginName}{LayerName}EventListener` のようにプラグイン名とレイヤー名を絡めたクラス名にします。こうすることでbaserCMSが自動的にイベントリスナーとして登録します。

また、各レイヤーごとに用意されたベースとなるクラスを継承します。

- コントローラー：BcControllerEventListener
- モデル：BcModelEventListener
- ビュー：BcViewEventListener
- ヘルパー：BcHelperEventListener

```php
// 例
class YourPluginControllerEventListener extends BcControllerEventListener
{

}
```

### イベントキーの定義
レイヤー名を省略してイベントキーを設定します。
```php
class YourPluginControllerEventListener extends BcControllerEventListener
{
    public $events = ['BaserCore.Users.BeforeRender'];
}
```

### コールバック処理の定義
イベントキーよりドット（.）を除いてロウワーキャメルケースにしたメソッド名で定義します。  
これによりイベントのキーをコールバック処理が紐付けられ、イベント発火時に呼び出すことができます。
```php
class YourPluginControllerEventListener extends BcControllerEventListener
{
    public $events = ['BaserCore.Users.BeforeRender'];
    public function baserCoreUsersBeforeRender(Event $event)
    {
        // コールバック処理を記述
    }
}
```

## イベントの種類

イベントの種類は、CakePHPが用意している、モデルの `beforeFind` や、コントローラーの `startup` など様々なものがありますが、それに加えて、baserCMSが定義しているイベントも多く存在します。

詳しくは、[イベント一覧](https://docs.google.com/spreadsheets/d/1YT5PuZQdDNU0wrZdqYbh74KuLSw1SIt4_EKwPWOfDKA/edit#gid=1008573296){:target="_blank"} をご覧ください。

