# BcContentsHelper

## リンク

### 次のコンテンツへのリンクを出力

```
BcContentsHelper::nextLink(string $title = '', array $options = []): void|false
```

現在のコンテンツの次のコンテンツへのリンクを出力します。
デフォルトでは、管理画面のコンテンツ一覧で現在のコンテンツと同じフォルダで、下の方にある公開状態のコンテンツが選択されます。
`overFolder`オプションがtrueの場合は違うフォルダ内のコンテンツも選択対象となります。

- `$title` リンクタイトル
- `$options`
	- `class` CSSのクラス名（初期値 : 'next-link'）
	- `arrow` 表示文字列（初期値 : ' ≫'）
	- `overFolder` フォルダ外も含めるかどうか（初期値 : false）
	- `escape` エスケープするかどうか（初期値 : true）

```
<?php $this->BcContents->nextLink('次のページ') ?>
```

### 次のコンテンツへのリンクを取得

```
BcContentsHelper::getNextLink(string $title = '', array $options = []): string|false
```

現在のコンテンツの次のコンテンツへのリンクを取得します。

### 前のコンテンツへのリンクを出力

```
BcContentsHelper::prevLink(string $title = '', array $options = []): void|false
```

現在のコンテンツの前のコンテンツへのリンクを出力します。
デフォルトでは、管理画面のコンテンツ一覧で現在のコンテンツと同じフォルダで、上の方にある公開状態のコンテンツが選択されます。
`overFolder`オプションがtrueの場合は違うフォルダ内のコンテンツも選択対象となります。

- `$title` リンクタイトル
- `$options`
	- `class` CSSのクラス名（初期値 : 'next-link'）
	- `arrow` 表示文字列（初期値 : ' ≫'）
	- `overFolder` フォルダ外も含めるかどうか（初期値 : false）
	- `escape` エスケープするかどうか（初期値 : true）

```
<?php $this->BcContents->prevLink('前のページ') ?>
```

### 前のコンテンツへのリンクを取得

```
BcContentsHelper::getPrevLink(string $title = '', array $options = []): string|false
```

現在のコンテンツの前のコンテンツへのリンクを出力します。

## 管理画面用・他

### isActionAvailable($type, $action, $entityId) : bool

> アクションが利用可能かどうか確認する

### isEditable($content)

> コンテンツが編集可能かどうか確認

### getSiteRootId($siteId)

> サイトIDからサイトルートとなるコンテンツIDを取得する

### getFolderLinkedUrl(EntityInterface $content)

> 対象コンテンツが属するフォルダまでのフルパスを取得する
> フォルダ名称部分にはフォルダ編集画面へのリンクを付与する
> コンテンツ編集画面で利用
