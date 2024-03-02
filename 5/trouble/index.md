# 困った時ガイド

## Proxy配下でのインストール

Windowsの例では、以下のようにするとうまくいくケースがあるようです。

```
set HTTP_PROXY=http://<username>:<password>@<proxy>:<port>
set HTTPS_PROXY=http://<username>:<password>@<proxy>:<port>
```

