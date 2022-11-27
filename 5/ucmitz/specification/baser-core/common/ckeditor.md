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


以下、見直し中

## 草稿モード

`editorUseDraft` オプションを `true` にセットする事により、草稿モードを利用できる。

### 保存時に事前に同期が必要

```javascript
if (typeof $.bcCkeditor.editor['editor_detail_tmp'] !== undefined) {
    $.bcCkeditor.editor['editor_detail_tmp'].execCommand('synchronize');
}
```

### データの取得
現在、エディターに表示していたデータが、{field_name}_tmp に入ってくるので、そのデータを field_name に代入する
