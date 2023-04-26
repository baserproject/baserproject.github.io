# メニュー設定

ここでは管理システムの左側に配置するメニューの設定方法を説明します。

メニューの元となるデータは、`Cake\Core\Configure` を利用し、`BcApp.adminNavigation` に保管する仕様となっています。

メニューは各プラグインの[アプリケーション設定](./application_setting) `/config/setting.php` にて設定します。

## メニューの設定方法

メニューは、一般メニューと設定メニューの２つの分類から成り立っています。  
一般メニューは、メニューにおいて常に見えるところ表示し、設定メニューは、メニューの「設定」内に配置し、「設定」をクリックすることで表示することができます。

### 一般メニュー

一般メニューに配置するものは、`adminNavigation` の中の、`Contents` の配下に配置します。

```php
return [
    'BcApp' => [
        'adminNavigation' => [
            'Contents' => [
                'Menu1' => [
                    'title' => 'Menu1 Title',
                    'type' => 'contents',
                    'url' => ['prefix' => 'Admin', 'plugin' => 'BaserCore', 'controller' => 'contents', 'action' => 'index']
                ],
                'Menu1' => [
                    'title' => 'Menu2 Title',
                    'type' => 'contents',
                    'menus' => [
                        'Child1' => [
                            'title' => 'Child1 Title',
                            'url' => ['prefix' => 'Admin', 'plugin' => 'BaserCore', 'controller' => 'contents', 'action' => 'add']
                        ],
                        'Child2' => [
                            'title' => 'Child2 Title',
                            'url' => ['prefix' => 'Admin', 'plugin' => 'BaserCore', 'controller' => 'contents', 'action' => 'delete']
                        ]                          
                    ]           
                ]
            ]    
        ]
    ]
]
```

- **title:** メニューのタイトルを指定します。
- **type:** メニューのタイプ、一般メニューとしてメニューの上部に配置する場合は、`contents` を指定します。
- **url:** メニューのURLを配列形式で指定します。
- **disabled:** メニューを非表示にするかどうか。既に設定されたメニューを非表示にする場合に利用しますがそうでない場合は定義不要です。（初期値：false）
- **menus:** サブメニューが存在する場合は、`menus` の中に入れ子で定義します。その際、`type` の指定は不要です。つまり、`title` と `url` だけで構いません。



 
### 設定メニュー

設定メニューの下部の「設定」の中に配置するものは、`adminNavigation` の中の、`Systems` 配下に定義します。その際、`type` を `system` に設定する必要があります。  

なお、「設定」の中のメニューは初期状態では表示されず、「設定」をクリックすると表示できます。

```php
return [
    'BcApp' => [
        'adminNavigation' => [
            'Systems' => [
                'Menu1' => [
                    'title' => 'Menu1 Title',
                    'type' => 'system', // type を system とする
                    'url' => ['prefix' => 'Admin', 'plugin' => 'BaserCore', 'controller' => 'contents', 'action' => 'index']
                ]
            ]    
        ]
    ]
]
```


## 外部から既存のメニューを非表示にする

外部のプラグインなどから、既存のメニューを非表示にするには、対象メニューの `disable` 設定を `false` に設定します。

```php
// 設定ファイルで行う場合
return [
    'BcApp' => [
        'adminNavigation' => [
            'Systems' => [
                'Plugin' => ['disable' => true],
                'Users' => ['disable' => true]
            ]   
        ]       
    ]
]
// Configure で設定する場合
Configure::write('BcApp.adminNavigation.Systems.Plugin.disable', true);
Configure::write('BcApp.adminNavigation.Systems.Users.disable', true);
```

 
## メニューのレンダリング

`BaserCore\View\Helper\BcContentsHelper::setup()` でデータ変換を行い、その後、JSON化し、vue.js でレンダリングを行う仕様となっています。

