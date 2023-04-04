# テーマファイルの表示

対象のファイルを表示します。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
GET /baser/api/admin/bc-theme-file/theme_files/view.json
```

### クエリパラメーター

| パラメーター名   | 型   | 必須  | 内容        |
|-----------|-----|-----|-----------|
| theme   | 数値  | ●   | テーマ       |
| type   | 文字列 | ●　  | タイプ       |
| path   | 文字列 | ●　  | パス        |
| plugin   | 数値 | ●   | プラグイン     |

## レスポンス例

### レスポンスボディ

```json
{
    "entity": {
        "fullpath": "/var/www/html/plugins/BcThemeSample/templates/layout/default.php",
        "parent": "/var/www/html/plugins/BcThemeSample/templates/layout/",
        "name": "default.php",
        "base_name": "default",
        "ext": "php",
        "type": "text",
        "path": null,
        "contents": "<?php\n/**\n * baserCMS :  Based Website Development Project <https://basercms.net>\n * Copyright (c) NPO baser foundation <https://baserfoundation.org/>\n *\n * @copyright     Copyright (c) NPO baser foundation\n * @link          https://basercms.net baserCMS Project\n * @since         5.0.0\n * @license       https://basercms.net/license/index.html MIT License\n */\n\nuse BaserCore\\View\\AppView;\n/**\n * レイアウト\n * 呼出箇所：全ページ\n * @var AppView $this\n */\n$request = $this->getRequest();\n$attributes = $request->getAttributes();\n$base = $attributes['base'];\n?>\n<?php $this->BcBaser->docType('html5') ?>\n<html>\n<head>\n\t<?php $this->BcBaser->charset() ?>\n\t<meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0,minimum-scale=1.0\">\n\t<?php $this->BcBaser->title() ?>\n\t<?php $this->BcBaser->metaDescription() ?>\n\t<?php $this->BcBaser->metaKeywords() ?>\n\t<?php $this->BcBaser->icon() ?>\n\t<?php $this->BcBaser->css([\n\t\t'style',\n\t\t'jquery-ui/jquery-ui-1.11.4',\n\t\t'colorbox/colorbox-1.6.1',\n\t\t'editor'\n\t]) ?>\n\t<?php $this->BcBaser->js([\n\t\t'vendor/jquery-1.11.3.min',\n\t\t'vendor/jquery-ui-1.11.4.min',\n\t\t'vendor/jquery.bxslider-4.12.min',\n\t\t'vendor/jquery.colorbox-1.6.1.min',\n\t\t'vendor/i18n/ui.datepicker-ja',\n\t\t'vendor/jquery-accessibleMegaMenu',\n\t]); ?>\n  <?php $this->BcBaser->js('common.bundle', true, [\n\t  'id' => 'AdminScript',\n    'data-baseUrl' => h($base),\n    'data-baserCorePrefix' => \\Cake\\Utility\\Inflector::underscore(\\BaserCore\\Utility\\BcUtil::getBaserCorePrefix()),\n\t]) ?>\n\t<?php $this->BcBaser->js([\n\t\t'startup.bundle'\n\t]); ?>\n\t<?php $this->BcBaser->scripts() ?>\n\t<!-- /Elements/google_analytics.php -->\n\t<?php $this->BcBaser->googleAnalytics() ?>\n</head>\n<body id=\"<?php $this->BcBaser->contentsName() ?>\">\n\n<div class=\"bs-container\">\n\n\t<!-- /Elements/header.php -->\n\t<?php $this->BcBaser->header() ?>\n\n\t<?php if ($this->BcBaser->isHome()): ?>\n\t\t<?php $this->BcBaser->mainImage(['all' => true, 'num' => 5, 'width' => '100%', 'class' => 'bs-main-image']) ?>\n\t<?php else: ?>\n\t\t<!-- /Elements/crumbs.php -->\n\t\t<?php $this->BcBaser->crumbsList(['onSchema' => true]); ?>\n\t<?php endif ?>\n\n\t<div class=\"bs-wrap clearfix\">\n\n\t\t<main class=\"bs-main-contents\">\n\t\t\t<?php $this->BcBaser->flash() ?>\n\n\t\t\t<?php if($this->BcBaser->isHome()): ?>\n\t\t\t\t<!-- /Elements/top_info.php -->\n\t\t\t\t<?php $this->BcBaser->element('top_info') ?>\n\t\t\t<?php endif ?>\n\n\t\t\t<?php $this->BcBaser->content() ?>\n\n\t\t\t<!-- /Elements/contents_navi.php -->\n\t\t\t<?php $this->BcBaser->contentsNavi() ?>\n\t\t</main>\n\n\t\t<section class=\"bs-sub-contents\">\n\t\t\t<!-- /Elements/widget_area.php -->\n\t\t\t<?php $this->BcBaser->widgetArea() ?>\n\t\t</section>\n\n\t</div>\n\n\t<!-- /Elements/footer.php -->\n\t<?php $this->BcBaser->footer() ?>\n\n</div>\n\n<?php $this->BcBaser->func() ?>\n</body>\n</html>\n"
    },
    "message": null,
    "errors": null
}

```
