# テーマ関数リファレンス

テーマで利用する関数は、`BcBaserHelper` というヘルパを利用します。
ヘルパの利用方法は次のとおりです。

```php
// 画像の出力
$this->BcBaser->img('/img/baser.power.gif', ['width' => 200]);
```

ここでは、BcBaserHelperのリファレンスをご紹介しますが、
その他にも、様々なヘルパや、クラスメソッドがあります。

詳しく知るには、[baserCMS クラスリファレンス](../../plugin/reference/){:target="_blank"} をご覧ください。

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

### CSSの呼び出し

```
BcBaserHelper::css(string|array $path, bool $inline = true, array $options = []): void
```

CSSの読み込みタグを出力します。
`$inline`がtrueの場合は呼び出した箇所、falseの場合はヘッダー内の `$this->BcBaser->scripts()` が記載された箇所にタグを表示します。
そのため、 `$inline`がfalseの場合は `$this->BcBaser->scripts()` が実行される前に `BcBaserHelper::css`を実行する必要があります。

```
$this->BcBaser->css([
  'style',
  'jquery-ui/jquery-ui-1.11.4',
  'colorbox/colorbox-1.6.1',
  'editor'
])
```

---

### JavaScriptの呼び出し

```
BcBaserHelper::js(string|array $path, bool $inline = true, array $options = []): void
```

scriptタグを出力します。
`$inline`がtrueの場合は呼び出した箇所、falseの場合はヘッダー内の `$this->BcBaser->scripts()` が記載された箇所にタグを表示します。
そのため、 `$inline`がfalseの場合は `$this->BcBaser->scripts()` が実行される前に `BcBaserHelper::js`を実行する必要があります。

```
$this->BcBaser->js([
  'admin/users/index.bundle',
  'https://code.jquery.com/jquery-3.6.0.min.js',
], true, [
  'defer',
]);
```

---

### CSS・JSファイルの呼び出し

```
BcBaserHelper::scripts(): void
```

`$this->BcBaser->css`や`$this->BcBaser->js`でインライン出力を無効にした場合、`$this->BcBaser->scripts()`を記載した箇所にまとめて出力されます。
また、[ツールバー](/5/plugin/toolbar)用のCSSの呼び出しも行います。

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

### ヘッダーの出力

```
BcBaserHelper::header(array $data = [], array $options = []): void
```

headerエレメントを出力します。

---

### フッターの出力

```
BcBaserHelper::footer(array $data = [], array $options = []): void
```

footerエレメントを出力します。

---

### グローバルメニューの出力

```
BcBaserHelper::globalMenu(int $level = 1, array $options = []): void
```

グローバルメニューを出力します。
`$level`には最上位の階層から何階層までのコンテンツを出力するか指定します。

---

### グローバルメニューの取得

```
BcBaserHelper::getGlobalMenu(int $level = 1, array $options = []): string
```

グローバルメニューを取得します。

## リンク

### リンクの出力

```
BcBaserHelper::link(string $title, mixed $url = null, array $htmlAttributes = [], mixed $confirmMessage = false): void
```

アンカータグを出力します。
`$confirmMessage`が設定されている場合は、リンクをクリックした際に確認メッセージが表示され、はいをクリックした場合のみリンクが開きます。

```
$this->BcBaser->link('top', '/', ['target' => '_blank'], 'ページを開きますか?');
```

---

### リンクの取得

```
BcBaserHelper::getLink(string $title, mixed $url = null, array $options = [], mixed $confirmMessage = false): string
```

アンカータグを取得します。

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

---

### WebサイトURL出力

```
BcBaserHelper::siteUrl(bool $ssl = false): void
```

システム基本設定のWebサイトURLを出力します。

---

### WebサイトURL取得

```
BcBaserHelper::getSiteUrl(bool $ssl = false): void
```

システム基本設定のWebサイトURLを取得します。

---

### baserCMS設置パス出力

```
BcBaserHelper::baseUrl(): void
```

baserCMSが設置されているパスを出力します。

```
// basercmsというフォルダに設置している場合
<img src="<?php echo $this->BcBaser->baseUrl() ?>img/test.png" />
// <img src="/basercms/img/test.png" />
```

---

### baserCMS設置パス取得

```
BcBaserHelper::baseUrl(): string
```

baserCMSが設置されているパスを取得します。

---

### テーマURL出力

```
BcBaserHelper::themeUrl(): string
```

現在のテーマのURLを出力します。

---

### テーマURL取得

```
BcBaserHelper::getThemeUrl(): string
```

現在のテーマのURLを取得します。

---

### パラメータ情報取得

```
BcBaserHelper::getParams(): void
```

パラメータ情報を取得します。

```
print_r($this->BcBaser->getParams());
/*
Array
(
    [plugin] => BaserCore
    [controller] => Pages
    [action] => view
    [pass] => Array
        (
            [0] => index
        )

    [named] => Array
        (
        )

    [entityId] => 1
    [_matchedRoute] => /*
    [Content] =>
    [Site] =>
    [?] => Array
        (
            [query] => sample
        )

    [_ext] => 
)
*/
```

---

### URL情報取得

```
BcBaserHelper::getUrlParams(): void
```

URL情報を取得します。

```
print_r($this->BcBaser->getUrlParams());
/*
Array
(
    [url] => https://localhost/baser5/?query=sample
    [here] => /baser5/
    [path] => /
    [webroot] => /baser5/
    [base] => /baser5
    [query] => Array
        (
            [query] => sample
        )
)
*/
```

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

---

### 固定ページ判定

```
BcBaserHelper::isPage(): bool
```

現在のページが固定ページかどうかを判定します。

---

### SSL判定

```
BcBaserHelper::isSSL(): bool
```

サイトへのアクセス時にSSLが使用されているか判定します。

---

### 管理者判定

```
BcBaserHelper::isAdminUser(array| User $user = null): bool
```

指定したユーザーが管理者グループに属しているか判定を行います。
`$user`を指定しない場合はログイン中のユーザーを対象にします。

### デバッグモード判定

```
BcBaserHelper::isDebug(): bool
```

デバッグモードか判定します。

### プラグインロード判定

```
BcBaserHelper::isPluginLoaded(string $plugin): bool
```

指定したプラグインがロードされているか判定します。

```
if ($this->BcBaser->isPluginLoaded('BcBlog')) {
  echo 'ブログプラグインが有効';
}
```

### コンテンツフォルダ判定

```
BcBaserHelper::isContentFolder(): bool
```

現在のページがコンテンツフォルダかどうか判定します。

## meta

### タイトル設定

```
BcBaserHelper::setTitle(string $title, mixed $categoryTitleOn = null): void
```

ページのタイトルを設定します。
`$categoryTitleOn` がfalseの場合はタイトルに階層情報を含みません。

```
$this->BcBaser->setTitle('ページタイトル', true);
// <title>ページタイトル｜プレスリリース｜NEWS｜My Site</title>

$this->BcBaser->setTitle('ページタイトル', false);
// <title>ページタイトル｜My Site</title>
```

---

### タイトルタグ出力

```
BcBaserHelper::title(string $separator = '｜', bool $categoryTitleOn = null): void
```

タイトルタグを出力します。

```
$this->BcBaser->title(' - ')
// <title>ブログ機能について説明します - プレスリリース - NEWS - My Site</title>
```

---

### タイトルタグ取得

```
BcBaserHelper::getTitle(string $separator = '｜', array $options = []): string
```

タイトルタグを取得します。

---

### キーワード設定

```
BcBaserHelper::setKeywords(string $keywords): void
```

metaタグ用のキーワードを設定します。

```
$this->BcBaser->setKeywords('キーワードA,キーワードB');
```

---

### キーワードタグ出力

```
BcBaserHelper::metaKeywords(): void
```

metaタグ用のキーワードタグを出力します。


---

### キーワード取得

```
BcBaserHelper::getKeywords(): string
```

metaタグ用のキーワードタグを取得します。

---

### 説明文設定

```
BcBaserHelper::setDescription(string $description): void
```

metaタグ用の説明文を設定します。

---

### 説明文タグ出力

```
BcBaserHelper::metaDescription(): void
```

metaタグ用の説明文を出力します。

---

### 説明文取得

```
BcBaserHelper::getDescription(): string
```

metaタグ用の説明文を取得します。

---

## パンくずリスト

### パンくずリスト出力エレメント読み込み

```
BcBaserHelper::crumbsList(array $data = [], array $options = []): void
```

パンくずリストを出力します。
パンくずリストとは現在表示しているページがトップページからどの階層にあるのかを示すものです。
この関数を利用するとトップページから表示ページまでの階層までを表示し、各階層の名称にはリンクが設置されます。
出力されるタグを調整したい場合は、 element/crumbs.php を変更します。

---

### パンくずリスト出力

```
BcBaserHelper::crumbs(string $separator, string|bool $startText, bool $onSchema): void
```

パンくずリストを出力します。
主に[crumbs.php](https://github.com/baserproject/basercms/blob/dev-5/plugins/bc-front/templates/element/crumbs.php)内で使用されています。
事前に出力したい内容をBcBaserHelper::addCrumbで追加しておく必要があります。

---

### パンくずリストの要素追加

```
BcBaserHelper::addCrumb(string $name, mixed $link = null, mixed $options = []): void
```

パンくずリストの要素を追加します。

---

### パンくずリスト取得

```
BcBaserHelper::getCrumbs(mixed $categoryTitleOn = null): array
```

パンくずリストを配列形式で取得します。

## コンテンツ

### コンテンツを出力

```
BcBaserHelper::content(): void
```

コンテンツを出力します。
固定ページの場合は`templates/Pages/default.php`、ブログの場合は`templates/plugin/BcBlog/Blog/default/single.php`など、それぞれのコンテンツに合わせた内容が出力されます。
どのファイルが読み込まれるかは、[テーマの構造](/5/theme/folder)をご覧ください。

---

### コンテンツのタイトルを出力

```
BcBaserHelper::contentsTitle(): void
```

コンテンツのタイトルを出力します。

### コンテンツのタイトルを取得

```
BcBaserHelper::getContentsTitle(): string
```

コンテンツのタイトルを取得します。

---

### コンテンツを特定する文字列を出力

```
BcBaserHelper::contentsName(bool $detail = false, array $options = []): void
```

URLを元に、第一階層までの文字列をキャメルケースで出力します。
`$detail`がtrueの場合はページごとに一意となる文字列を出力します。

`$options`

- `home` : トップページの場合に出力する文字列（初期値 : Home）
- `default` : ルート直下の下層ページの場合に出力する文字列（初期値 : Default）
- `error` : エラーページの場合に出力する文字列（初期値 : Error）
- `underscore` : キャメルケースではなく、アンダースコア区切りで出力する（初期値 : false）

```
// URL: /
BcBaserHelper::contentsName();
// Home
BcBaserHelper::contentsName(true, ['home' => 'Top']);
// Top

// URL: /test/sample/
BcBaserHelper::contentsName();
// Test
BcBaserHelper::contentsName(true, ['underscore' => true]);
// test_sample_index
```

---

### コンテンツを特定する文字列を取得

```
BcBaserHelper::getContentsName(bool $detail = false, array $options = []): string
```

URLを元に、第一階層までの文字列をキャメルケースで取得します。

---

### コンテンツメニュー出力

```
BcBaserHelper::contentsMenu(mixed $id = null, int $level = null, string $currentId = null, array $options = [])
```

コンテンツメニューを出力します。
出力されるタグを調整したい場合は、 element/contents_menu.php を変更します。

`$id`: コンテンツIDを指定しない場合はルートからのメニューを表示
ID指定できるのはフォルダのみ
コンテンツIDは、編集画面 > その他情報 > コンテンツID から確認可能
`$level`: 何階層まで表示するか指定
`$currentId`: 現在のページのコンテンツIDを指定 currentクラスの表示に使用

---

### コンテンツメニュー取得

```
BcBaserHelper::getContentsMenu(mixed $id = null, int $level = null, string $currentId = null, array $options = [])
```

コンテンツメニューを取得します。

---

### 現在のコンテンツ情報を取得

```
BcBaserHelper::getCurrentContent(): mixed|null
```

現在のコンテンツ情報を取得します。

---

### コンテンツ作成日時を取得

```
BcBaserHelper::getContentCreatedDate(string $format = 'Y/m/d H:i'): null|string
```

コンテンツが作成された日時を取得します。
コンテンツ作成日時は、 編集画面 > オプション > 作成者 > [作成日]から設定します。
`$format`はPHPの[DateTimeInterface::format()](https://www.php.net/manual/ja/datetime.format.php)が受け入れるフォーマットを指定します。

---

### コンテンツ更新日時を取得

```
BcBaserHelper::getContentModifiedDate(string $format = 'Y/m/d H:i'): null|string
```

コンテンツが更新された日時を取得します。
コンテンツ更新日時は、 編集画面 > オプション > 作成者 > [更新日]から設定します。

---

### コンテンツ更新情報を出力

```
BcBaserHelper::updateInfo(): void
```

コンテンツの作成日時と更新日時が記載されたエレメントを出力します。
表示を調整したい場合は element/update_info.php を変更します。

---

### コンテンツ更新情報を取得

```
BcBaserHelper::getUpdateInfo(): string
```

コンテンツの作成日時と更新日時が記載されたエレメントを取得します。

---

### ページネーションを出力

```
BcBaserHelper::pagination(string $name = 'default', array $data = [], array $options = []): void
```

ページネーションを出力します。
`$name`で指定したエレメントを出力します。

## 他

### サイト名出力

```
BcBaserHelper::siteName(): void
```

サイト名を出力します。

---

### サイト名取得

```
BcBaserHelper::getSiteName(): string
```

サイト名を取得します。

---

### ユーザー名取得

```
BcBaserHelper::getUserName(User $user): string
```

指定したユーザーの姓と名を結合して取得します。
ニックネームがある場合にはニックネームを優先します。

---

### フラッシュメッセージ表示

```
BcBaserHelper::flash(string $key = 'flash'): void
```

セッションに保存したメッセージを出力します。
例: フォームのエラーメッセージ等

---

### 変数設定

```
BcBaserHelper::set(string $key, mixed $value): void
```

変数を設定します。設定した変数は後で読み込まれるビューファイルで使用できます。

---

### ツールバー出力

```
BcBaserHelper::func(): void
```

[ツールバー](/5/plugin/toolbar)の出力を行います。

---
