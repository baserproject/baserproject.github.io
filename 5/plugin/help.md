# ヘルプの設定

baserCMSでは、マニュアルがなくても、直感的に操作できることを目指して開発されており、各画面にヘルプ機能を配置しています。

ヘルプには、画面全体を説明するヘッダーヘルプと、各入力項目の説明をするフィールドヘルプの２種類があります。

## ヘッダーヘルプ
画面右上に配置するヘルプボタンをクリックする事で、画面タイトル下にヘルプを表示する機能です。  
各画面ごとにヘルプ内容を定義する事ができます。

### ヘッダーヘルプ配置方法
ヘルプ内容のファイルは、エレメントとして、`templates/Admin/element/help/` 内に作成します。  
また、各画面のビューテンプレートにて、次を実行することでヘルプボタンを表示します。

```php
$this->BcAdmin->setHelp('your_help_file_name');
```

 
## フィールドヘルプ
編集画面などにてフィールドの横に？マークを表示し、クリックするとツールチップでヘルプを表示できる機能です。

### フィールドヘルプ配置方法
アイコンとヘルプ内容のタグを対象フィールドの次に配置します。

`bca-help` クラス属性の付与されたタグをトリガーとして、アイコンの次に配置された `bca-helptext` クラス属性のついたタグの内容をツールチップとして表示します。

```html
<!-- 例 -->
<i class="bca-icon--question-circle bca-help"></i>
<div class="bca-helptext">
  半角英数字とハイフン、アンダースコアのみで入力してください。
</div>
```


