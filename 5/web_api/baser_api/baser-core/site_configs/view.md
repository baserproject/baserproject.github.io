# システム基本設定の取得

システム基本設定を取得します。

### 実行可能な権限
```
システム管理者以上
```

### リクエスト
```
GET /baser/api/baser-core/view.json
```

### レスポンス例
#### レスポンスボディ
```json
{
  "siteConfig": {
    "name": "baserCMSサンプル",
    "keyword": "baser,CMS,コンテンツマネジメントシステム,開発支援",
    "description": "baserCMS（ベーサーシーエムエス）とは、直感的な操作と高いメンテナンス性を実現し、Webサイトを自由にカスタマイズできる国産CMS（コンテンツ・マネージメント・システム）です。日本人が日本人のために、みんなで作っているオープンソース・ソフトウェアです。無料で利用でき、様々なサーバーで動作可能で、インストールも簡単です。",
    "address": "福岡県",
    "email": "hoge@basercms.net",
    "widget_area": "1",
    "maintenance": "",
    "mail_encode": "UTF-8",
    "smtp_host": "",
    "smtp_user": "cmsadmin",
    "smtp_password": "demodemo",
    "smtp_port": "",
    "formal_name": "baserCMSサンプル",
    "admin_list_num": "10",
    "google_analytics_id": "",
    "content_types": "YToyOntzOjk6IuODluODreOCsCI7czo5OiLjg5bjg63jgrAiO3M6OToi44Oa44O844K4IjtzOjk6IuODmuODvOOCuCI7fQ==",
    "category_permission": "",
    "admin_theme": "BcAdminThird",
    "login_credit": "1",
    "first_access": "",
    "editor": "BaserCore.BcCkeditor",
    "editor_styles": "#青見出し\nh3 {\ncolor:Blue;\n}\n#赤見出し\nh3 {\ncolor:Red;\n}\n#黄マーカー\nspan {\nbackground-color:Yellow;\n}\n#緑マーカー\nspan {\nbackground-color:Lime;\n}\n#大文字\nbig {}\n#小文字\nsmall {}\n#コード\ncode {}\n#削除文\ndel {}\n#挿入文\nins {}\n#引用\ncite {}\n#インライン\nq {}",
    "editor_enter_br": "",
    "admin_side_banner": "1",
    "smtp_tls": "",
    "main_site_display_name": "メインサイト",
    "use_site_device_setting": "",
    "use_site_lang_setting": "",
    "google_maps_api_key": "",
    "use_universal_analytics": "",
    "version": "5.0.0-beta",
    "contents_sort_last_modified": "2023-03-28 12:52:13|1",
    "mail_additional_parameters": "",
    "use_update_notice": "1",
    "mode": true,
    "site_url": "https://localhost/",
    "ssl_url": "https://localhost/",
    "admin_ssl": 0
  }
}

```
