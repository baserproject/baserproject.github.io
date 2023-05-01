# CKEditorの利用

BcAdminFormHelper を利用することで CKEditor を簡単に利用することができます


## CKEditorを表示する

```php
<?php echo $this->BcAdminForm->ckeditor('content', [
    // エディタの横幅
    'editorWidth' => 'auto',
    // エディタの高さ
    'editorHeight' => '120px',
    // エディターのツールバータイプ（normal | simple）
    'editorToolType' => 'simple',
    // 改行時に段落ではなく、<br> で改行する
    'editorEnterBr' => false,
    // 草稿モードを利用するかどうか
    'editorUseDraft' => true,
    // 草稿の保存フィールド名
    'editorDraftField' => 'draft'
]); ?>
```
※ 2023/05/01 現在、CKEditorのバージョンは４となります。
 
## 草稿モード

baserCMSでは、CKEditorを拡張し、コンテンツの下書きを草稿として保存することができる「草稿モード」を利用することができます。

草稿機能を利用するには、事前にDBテーブルに草稿データを保存するためのカラムを準備する必要があります。

### 草稿モードの利用
`editorUseDraft` オプションを `true` にセットする事により、草稿モードを利用できます。  
その際、草稿の保存フィールド名として `editorDraftField` も必ず指定してください。

### 事前同期
草稿モードを利用する場合、エディタ内のデータは、`editor_{field_name}_tmp` というキーで管理されますが、そのままでは、保存時の送信対象のデータには反映されません。

そのため、保存時やプレビュー時、事前に javascript にて同期処理が必要となります。

```javascript
// field_name が content の場合
if (typeof $.bcCkeditor.editor['editor_content_tmp'] !== undefined) {
    $.bcCkeditor.editor['editor_content_tmp'].execCommand('synchronize');
}
```

この処理を実行する事で、エディタ内のHTMLが、保存時の送信対象となる hidden タグにセットされます。


