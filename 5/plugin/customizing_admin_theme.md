# 管理システムテーマカスタマイズ

管理システムのデザインは必要なテンプレートやJavascriptなど、独自に準備することでテーマとして切り替える事ができますが、全てのテンプレートを独自に準備するのは大変であるため、一部のテンプレートだけを変更する方法を提供しています。

## カスタマイズ用テーマの定義
独自のプラグインをを準備し、そのプラグインの `/config/setting.php` に次のように記載すると、そのテーマが、管理画面をカスタマイズするためのテーマとして認識されます。

```php
// /plugins/YourPlugin/config/setting.php
return [
    'BcApp' => [
        'customAdminTheme' => 'ThemeName'
    ]
]
```

## カスタマイズしたテンプレートの配置
デフォルトの管理システムテーマよりファイルをコピーし、カスタマイズ用テーマ内の同階層に同名で配置すると、デフォルトの管理画面より優先して読み込む仕組みとなっていますので、そちらをカスタマイズします。



