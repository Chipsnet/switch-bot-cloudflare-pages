# switch-bot-cloudflare-pages

Webから第三者に勝手に自分の家の電気を操作可能にするWebサイトです。      
Cloudflare Pages + Pages functionsを利用することで、APIトークンを外部に漏らすことなく安全に、かつ無料で公開することができます。

## Requirements

- Cloudflare Account

## Get API token and deviceId

[こちらのサイト](https://qiita.com/itouuuuuuuuu/items/874cd992f473f30de45b)を参考に、認証用トークンとdeviceIdを取得します。

## Deploy to Cloudflare pages

![Open cloudflare pages page](https://i.gyazo.com/bc695918e5e35d023be12ff47ffcf1dc.png)

Cloudflare Pagesのタブを開きます。

![Connect to git repos](https://i.gyazo.com/ee4ca31804b0a9339fca33a752e211f1.png)

プロジェクト作成 > Gitに接続をクリックします。

![Select this repos](https://i.gyazo.com/6659f476ccf6f1d9f8f3722c8ae89615.png)

Gitの認証を行っていない場合は認証して、このGitリポジトリを選択します。

![put build dir "src"](https://i.gyazo.com/f9f6145bd5153203d6cb200d278b044b.png)

ビルド出力ディレクトリに `src` と入力します。

![Setting up env value](https://i.gyazo.com/792561a844ce50ef7ca613994f7be357.png)

環境変数に以下の項目を設定します

|変数名|値|
|-|-|
|TOKEN|取得した認証用トークン|
|deviceId|取得したデバイスID|

保存してデプロイすれば公開は完了です。

## Support me!

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/A0A81VPXD)