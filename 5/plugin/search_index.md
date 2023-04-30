# 検索インデックスの操作

検索インデックスはサイト内検索を行うためのデータを指しますが、固定ページの他、各種プラグインのデータを横断して検索する事を可能とするため、各コンテンツの追加、編集、削除時に、検索インデックスの追加、編集、削除が必要となります。

## ビヘイビアの定義
検索インデックスの操作については、 `BcSearchIndexManagerBehavior` を定義するだけで簡単に実装できます。

`initialize` メソッドで定義してください。

```php
// /plugins/YourPlugin/src/Model/Table/YourTable.php
public function initialize(array $config): void
{
    parent::initialize($config);
    if(Plugin::isLoaded('BcSearchIndex')) {
        $this->addBehavior('BcSearchIndex.BcSearchIndexManager');
    }
}
```

## 検索インデックス作成処理実装
検索インデックスを作成するには、 `createSearchIndex` メソッドを実装します。

エンティティの保存時に呼び出され、第一引数に、保存対象エンティティが引き渡されますので、そちらを利用して、検索インデックスデータを配列で作成して返却します。


```php
public function createSearchIndex($entity)
{
    return [
        // 対象コンテンツのID
        'model_id' => $entity->id,
        // コンテンツのタイプ名
        'type' => 'ページ',
        // 複数のコンテンツを取りまとめている仕組みの場合の主となるID
        'content_id' => $entity->content->id,
        // サイトID
        'site_id' => $entity->content->site_id,
        // 検索インデックスの見出し（検索対象）
        'title' => $entity->content->title,
        // 検索インデックスの本体（検索対象）
        'detail' => $detail,
        // コンテンツへのURL
        'url' => $url,
        // 公開状態
        'status' => $entity->content->status,
        // 公開開始日
        'publish_begin' => $entity->content->publish_begin,
        // 公開終了日
        'publish_end' => $entity->content->publish_end
    ];
}
```

[コンテンツマネージャーAPI](./contents_manage_api) を利用しているコンテンツの場合は、エンティティの `content` プロパティにほとんどの情報が入っていますのでそちらを利用します。その場合、生成が必要なものは、`model_id`、`type`、`detail`、`url` の４つです。

検索インデックスの作成処理さえ実装できれば、編集と削除は `BcSearchIndexManagerBehavior` がよしなになってくれますので実装は不要です。


