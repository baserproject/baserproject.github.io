# テーマ設定の編集

テーマ設定を編集します。

### 実行可能な権限
```
システム管理者以上
```

### リクエスト
```
POST /baser/api/admin/bc-theme-config/theme_configs/edit.json
```

### リクエストボディ

| パラメーター名   | 型   | 必須  | 内容                |
|-----------|-----|-----|-------------------|
| name　   | 文字列	 | ●   | 設定名               |
| value　   | 文字列	  | ●   | 設定値               |

### レスポンス例
#### レスポンスボディ
```json
{
  "themeConfig": {
    "logo": "",
    "logo_alt": "baserCMS",
    "logo_link": "/",
    "main_image_1": "",
    "main_image_alt_1": "コーポレートサイトにちょうどいい国産CMS",
    "main_image_link_1": "/",
    "main_image_2": "",
    "main_image_alt_2": "全て日本語の国産CMSだから、設置も更新も簡単、わかりやすい。",
    "main_image_link_2": "/",
    "main_image_3": "",
    "main_image_alt_3": "標準的なWebサイトに必要な基本機能を全て装備",
    "main_image_link_3": "/",
    "main_image_4": "",
    "main_image_alt_4": "デザインも自由自在にカスタマイズ可能！",
    "main_image_link_4": "/",
    "main_image_5": "",
    "main_image_alt_5": "質問・ご相談はユーザーズフォーラムへ",
    "main_image_link_5": "/",
    "color_main": "001800",
    "color_sub": "001800",
    "color_link": "2B7BB9",
    "color_hover": "2B7BB9"
  },
  "message": "テーマ設定を保存しました。",
  "errors": null
}

```
