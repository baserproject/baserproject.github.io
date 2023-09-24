# CKEditor 連携設計書

BcAdminFormHelper を利用することで CKEditor を利用することができる。

```php
<?php echo $this->BcAdminForm->ckeditor('content', [
    'editorWidth' => 'auto',
    'editorHeight' => '120px',
    'editorToolType' => 'simple',
    'editorEnterBr' => $editorEnterBr
]); ?>
```

 
## 草稿モード

`editorUseDraft` オプションを `true` にセットする事により、草稿モードを利用できる。

### 事前同期
保存時やプレビュー時、事前に javascript にて同期処理が必要となる。

```javascript
if (typeof $.bcCkeditor.editor['editor_{field_name}_tmp'] !== undefined) {
    $.bcCkeditor.editor['editor_{field_name}_tmp'].execCommand('synchronize');
}
```

この処理を実行する事で、エディタ内のHTMLが、フィールドに紐付いた hidden タグにセットされる。

