# BcPageHelper

## リンク

### 次の記事へのリンクを出力

```
$this->BcPage->nextLink(string $title = '', array $options = []): void|false
```

TODO

- `$title` リンクタイトル
- `$options`
	- `class` CSSのクラス名（初期値 : 'next-link'）
	- `arrow` 表示文字列（初期値 : ' ≫'）
	- `overCategory` 固定ページのカテゴリをまたいで次の記事のリンクを取得するかどうか（初期値 : false）

### 次の記事へのリンクを取得

TODO

```
$this->BcPage->getNextLink(string $title = '', array $options = []): string|false
```

### 前の記事へのリンクを出力

TODO

```
$this->BcPage->prevLink(string $title = '', array $options = []): void|false
```

### 前の記事へのリンクを取得

TODO

```
$this->BcPage->getPrevLink(string $title = '', array $options = []): string|false
```
