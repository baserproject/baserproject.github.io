# カスタムフィールドタイプ

## 設定ファイル

```php
return [
    'BcCustomContent' => [
        /**
         * フィールドタイプ
         */
        'fieldTypes' => [
            // プラグイン名
            'BcCcText' => [ 
                // リストに表示される分類
                'category' => '基本', 
                // リストに表示されるラベル
                'label' => 'テキスト',  
                // カスタムテーブルのDBテーブルに追加する際の型
                'columnType' => 'varchar',  
            ]
        ]
    ]
];
```
