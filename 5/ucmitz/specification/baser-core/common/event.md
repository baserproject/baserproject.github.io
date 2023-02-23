# イベント設計書
CakePHPでは、イベントという処理をフックする仕組みを提供しているが、baserCMSでは、プラグインにてそのイベントを簡単に実装できるように機能を拡張している。

## イベントの発火
イベント発火する際、イベントを特定するキーの作成が必要となるが、`BcEventDispatcherTrait` を利用すると、レイヤー名（Model / Controller / View / Helper）とプラグイン名、クラス名を考慮したイベントキーを自動生成する事ができる。

```shell
# SitesTable にて、beforeFind を指定した場合のイベントキー
Model.BaserCore.Sites.beforeFind
```

利用する場合には、クラスに `BcEventDispatcherTrait` を定義し、`dispatchLayerEvent` を呼び出す。

```php
// PagesTable クラスの場合、Model.BaserCore.Pages.beforeCopy としてイベントキーが生成される
$event = $this->dispatchLayerEvent('beforeCopy', [
    'data' => $page,
    'id' => $page->id
]);
``` 

## イベント処理の登録
イベント処理の登録は、CakePHPの仕様に合わせて登録する事もできるが、イベントリスナークラスを作成する事で、インスタンスの生成、イベントキーとコールバック処理の紐付けを自動化する事ができる。

### イベントリスナークラスの命名規則
プラグイン名とレイヤー名を絡めたクラス名にします。
```shell
{PluginName}{LayerName}EventListener
```

### イベントキーの定義
レイヤー名を省略してイベントキーを設定します。
```php
public $events = ['BaserCore.Users.BeforeRender']
```

### コールバック処理の定義
イベントキーよりドット（.）を除いてロウワーキャメルケースにしたメソッド名で定義します。
```php
public function baserCoreUsersBeforeRender(Event $event)
{
}
```
