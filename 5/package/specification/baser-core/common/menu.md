# メニュー設計書

管理画面の左側にメニューを配置する。

メニューの元となるデータは、`Cake\Core\Configure` を利用して管理し、`BcApp.adminNavigation` に保管する。  
各プラグインの `config/setting.php` にて設定するものとする。

 
## 一般メニュー

メニューの上部から並べるものは、`BcAppAdminNavigation` の中の、`Contents` に配置する。

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

- **title:** メニューのタイトルを指定する。
- **type:** メニューのタイプ、一般メニューとしてメニューの上部に配置する場合は、`contents` を指定する。
- **url:** メニューのURLを指定する。
- **disabled:** メニューを非表示にする。既に設定されたメニューを非表示にする場合に利用。
- **menus:** サブメニューが存在する場合は、`menus` の中に入れ子で定義する。その際、`type` の指定は不要。

 
## 設定メニュー

メニューの下部の「設定 」の中に並べるものは、`BcAppAdminNavigation` の中の、`Systems` に配置する。  
「設定」の中のメニューは初期状態では表示されず、「設定」をクリックすると表示できる。

```php
return [
    'BcApp' => [
        'adminNavigation' => [
            'Systems' => [
                'Menu1' => [
                    'title' => 'Menu1 Title',
                    'type' => 'system',
                    'url' => ['prefix' => 'Admin', 'plugin' => 'BaserCore', 'controller' => 'contents', 'action' => 'index']
                ]
            ]    
        ]
    ]
]
```
なお、「設定」の中に配置する場合は、`type` を `system` に設定する必要がある。

 
## 外部から既存のメニューを非表示にする

外部のプラグインなどから、既存のメニューを非表示にするには、対象メニューの `disable` 設定を `false` に設定する。
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

`BaserCore\View\Helper\BcContentsHelper::setup()` でデータ変換を行い、その後、JSON化し、vue.js でレンダリングを行う。
