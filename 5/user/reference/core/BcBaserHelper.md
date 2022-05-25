# BcBaserHelper

## 静的ファイルの呼び出し

### 画像の出力

```
BcBaserHelper::img(string $path, array $options = []): void
```
imgタグを出力します。

```
$this->BcBaser->img('/img/baser.power.gif', ['width' => 200]);
```

---

### 画像タグの取得

```
BcBaserHelper::getImg(string $path, array $options = []): string
```

imgタグを取得します。

```
$img = $this->BcBaser->getImg('/img/baser.power.gif', ['width' => 200]);
```

---

### JavaScriptの呼び出し

```
BcBaserHelper::js(string|array $url, bool $inline = true, array $options = []): void
```

scriptタグを出力します。
`$inline`がtrueの場合はヘッダー内、falseの場合は呼び出した箇所にタグを表示します。

```
$this->BcBaser->js([
  'admin/users/index.bundle',
  'https://code.jquery.com/jquery-3.6.0.min.js',
], true, [
  'defer',
]);
```

---

## エレメント

エレメントとは表示用のHTML等を細分化したパーツの事で、共通する部分などを切り分けておくことで保守性を高めます。

### エレメントの出力

```
BcBaserHelper::element(string $name, array $data = [], array $options = []): void
```

`$name`に呼び出したいエレメント名、`$data`にエレメントに渡したいデータを記載します。

以下の例では、elementフォルダ内のmenu.phpを呼び出しています。

```
# 呼び出し元
$this->BcBaser->element('menu', ['menus' => ['a', 'b', 'c']]);
```

```
# 呼び出し先
<ul>
  <?php foreach ($menus as $menu): ?>
    <li>
      <?php echo h($menu) ?>
    </li>
  <?php endforeach ?>
</ul>
```

---

### エレメントの取得

```
BcBaserHelper::getElement(string $name, array $data = [], array $options = []): string
```

`$this->BcBaser->element`ではエレメントの取得・出力を行いますが、`$this->BcBaser->getElement`ではエレメントの取得までを行います。

```
$head = $this->BcBaser->element('head');
```

---

## リンク

### リンクの出力

```
BcBaserHelper::link($title, $url = null, $htmlAttributes = [], $confirmMessage = false): void
```

アンカータグを出力します。
`$confirmMessage`が設定されている場合は、リンクをクリックした際に確認メッセージが表示され、はいをクリックした場合のみリンクが開きます。

```
$this->BcBaser->link('top', '/', ['target' => '_blank'], 'ページを開きますか?');
```

---

### リンクの取得

```
BcBaserHelper::getLink($title, $url = null, $options = [], $confirmMessage = false): string
```

アンカータグを取得します。

---

## URL

### URLを出力

```
BcBaserHelper::url(string $url = null, bool $full = false, bool $sessionId = true): void
```

baserCMSの設置フォルダを考慮したURLを出力します。
`$full`がtrueの場合は絶対URLになります。

```
$this->BcBaser->url('/test', true);

# baserが https://example.com/baser/ に設置されている場合、 「https://example.com/baser/test」を出力
```

---

### URLを取得

```
BcBaserHelper::getUrl(string $url = null, bool $full = false, bool $sessionId = true): string
```

baserCMSの設置フォルダを考慮したURLを取得します。

### baserCMS設置パス取得

```
BcBaserHelper::getRoot(): string
```

baserCMSが設置されているパスを取得します。

```
// basercmsというフォルダに設置している場合
<img src="<?php echo $this->BcBaser->root() ?>img/test.png" />
// <img src="/basercms/img/test.png" />
```

### getBaseUrl

TODO: getRootと同一

### テーマURL出力

```
BcBaserHelper::themeUrl(): string
```

現在のテーマのURLを出力します。

### テーマURL取得

```
BcBaserHelper::getThemeUrl(): string
```

現在のテーマのURLを取得します。

---

## 判定

### トップページ判定

```
BcBaserHelper::isHome(): bool
```

現在のページがトップページかどうかを判定します。

```
if ($this->BcBaser->isHome()) {
  // トップページ用の処理
}
```

### 固定ページ判定

```
BcBaserHelper::isPage(): bool
```

現在のページが固定ページかどうかを判定します。

### SSL判定

```
BcBaserHelper::isSSL(): bool
```

サイトへのアクセス時にSSLが使用されているか判定します。

### 管理者判定

```
BcBaserHelper::isAdminUser(array| User $user = null): bool
```

指定したユーザーが管理者グループに属しているか判定を行います。
`$user`を指定しない場合はログイン中のユーザーを対象にします。

---

## meta

### キーワード設定

```
BcBaserHelper::setKeywords(string $keywords): void
```

metaタグ用のキーワードを設定します。

```
$this->BcBaser->setKeywords('キーワードA,キーワードB');
```

### キーワード取得
### キーワードタグ出力

TODO

### 説明文設定

```
BcBaserHelper::setDescription(string $description): void
```

metaタグ用の説明文を設定します。

### 説明文取得
### 説明文タグ出力

TODO

---

## パンくずリスト

### パンくずリスト出力エレメント読み込み

```
BcBaserHelper::crumbsList(array $data = [], array $options = []): void
```

パンくずリストを出力します。
パンくずリストとは現在表示しているページがトップページからどの階層にあるのかを示すものです。
この関数を利用するとトップページから表示ページまでの階層までを表示し、各階層の名称にはリンクが設置されます。
出力されるタグを調整したい場合は、 テーマの element/crumbs.php を変更する必要があります。

### パンくずリスト出力

```
BcBaserHelper::crumbs(string $separator, string|bool $startText, bool $onSchema): void
```

パンくずリストを出力します。
主に[crumbs.php](https://github.com/baserproject/ucmitz/blob/dev/plugins/bc-front/templates/element/crumbs.php)内で使用されています。
事前に出力したい内容をBcBaserHelper::addCrumbで追加しておく必要があります。

### パンくずリストの要素追加

```
BcBaserHelper::addCrumb(string $name, mixed $link = null, mixed $options = []): void
```

パンくずリストの要素を追加します。

### パンくずリスト取得

```
BcBaserHelper::getCrumbs(mixed $categoryTitleOn = null): array
```

パンくずリストを配列形式で取得します。

---

## 他

### ユーザー名取得

```
BcBaserHelper::getUserName(User $user): string
```

指定したユーザーの姓と名を結合して取得します。
ニックネームがある場合にはニックネームを優先します。

---

### フラッシュメッセージ表示

```
$this->BcBaser->flash(string $key = 'flash'): void
```

セッションに保存したメッセージを出力します。
例: フォームのエラーメッセージ等

---
