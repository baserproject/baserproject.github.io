# BcBaserHelper

## 静的ファイルの呼び出し

### 画像の出力

```
$this->BcBaser->img(string $path, $options = array())
```
imgタグを出力します。

```
$this->BcBaser->img('/img/baser.power.gif', ['width' => 200]);
```

### 画像タグの取得

```
$this->BcBaser->getImg(string $path, $options = array())
```

imgタグを取得します。

```
$img = $this->BcBaser->getImg('/img/baser.power.gif', ['width' => 200]);
```

### JavaScriptの呼び出し

```
$this->BcBaser->js(string|array $url, bool $inline = true, $options = array());
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

## エレメント

エレメントとは表示用のHTML等を細分化したパーツの事で、共通する部分などを切り分けておくことで保守性を高めます。

### エレメントの出力

```
$this->BcBaser->element(string $name, $data = array(), $options = array());
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

### エレメントの取得

```
$this->BcBaser->getElement(string $name, $data = array(), $options = array());
```

`$this->BcBaser->element`ではエレメントの取得・出力を行いますが、`$this->BcBaser->getElement`ではエレメントの取得までを行います。

```
$head = $this->BcBaser->element('head');
```

## リンク

### リンクの出力

```
$this->BcBaser->link($title, $url = null, $htmlAttributes = [], $confirmMessage = false);
```

アンカータグを出力します。
`$confirmMessage`が設定されている場合は、リンクをクリックした際に確認メッセージが表示され、はいをクリックした場合のみリンクが開きます。

```
$this->BcBaser->link('top', '/', ['target' => '_blank'], 'ページを開きますか?');
```

### リンクの取得

```
$this->BcBaser->getLink($title, $url = null, $options = [], $confirmMessage = false);
```

アンカータグを取得します。

## URL

### url
### getUrl
### isCurrentUrl
### getThemeUrl
### themeUrl
### getBaseUrl
### baseUrl
### siteUrl
### getSiteUrl
### setCanonicalUrl
### setAlternateUrl
### getContentsUrl
### root
### getRoot
### getUri

## ページ設定

### setTitle
### setKeywords
### setDescription
### set
### setCategoryTitle
### getKeywords
### getDescription
### getTitle
### getCrumbs
### contentsTitle
### title
### metaKeywords
### metaDescription
### crumbs
### addCrumb
### logo
### mainImage
### getThemeImage

## 静的ファイル

### rss
### css
### icon
### setScript
### swf
### webClipIcon

## 判定

### isAdminUser
### existsEditLink
### existsPublishLink
### isHome
### isSSL
### isPage
### isCategoryTop
### isContentFolder
### isContentsParentId

## メニュー

### setSubMenus
### contentsMenu
### getContentsMenu
### _unsetIndexInContentsMenu
### globalMenu
### getGlobalMenu
### subMenu
### getSubMenu

## TODO

### getUserName
### i18nScript
### flash
### getContentsTitle
### contentsName
### getContentsName
### editLink
### publishLink
### header
### footer
### pagination
### content
### scripts
### func
### xmlHeader
### docType
### charset
### copyYear
### setPageEditLink
### checkUpdate
### getSitePrefix
### cacheHeader
### _initPluginBasers
### __call
### mark
### sitemap
### getSitemap
### getHere
### page
### widgetArea
### getWidgetArea
### includeCore
### contentsNavi
### crumbsList
### googleAnalytics
### googleMaps
### getGoogleMaps
### listNum
### siteSearchForm
### getSiteSearchForm
### siteName
### getSiteName
### getParams
### getCurrentContent
### getCurrentPrefix
### getContentCreatedDate
### getContentModifiedDate
### updateInfo
### getUpdateInfo
### getRelatedSiteLinks
### relatedSiteLinks
### afterRender
### setHomeTitle
### getPluginBaser
### getParentFolder
### getContentByEntityId
### declarationI18n
