import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          />
          <meta name="robots" content="index" />
          <link rel="icon" href="/img/icons/logo.svg" />
          <meta name="author" content="Adefeyitimi Adeyeloja" />
          <meta
            name="description"
            content="Welcome to the iSocks NFT Community"
          />
          <meta
            name="keywords"
            content="iSocks, iSocks.ai, iSocks NFT Community, iSocks, Meta nfts, Binance, Open Sea, Adefeyitimi Adeyeloja"
          />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-F43MQK2MBS"></script>
          <script
          dangerouslySetInnerHTML={{
            __html:`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-F43MQK2MBS');
            `
          }}
          >
          </script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
