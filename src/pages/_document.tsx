/* eslint-disable react/jsx-props-no-spreading */
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import * as React from "react";
import { ColorModeScript } from '@chakra-ui/react';

const APP_NAME = "DumbPeople";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        // eslint-disable-next-line react/display-name
        enhanceApp: (App: any) => (props) =>
          <App {...props} />,
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [
        ...React.Children.toArray(initialProps.styles),
      ],
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="application-name" content={APP_NAME} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-styles"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content={APP_NAME} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#FFFFFF" />
          <link
              rel="preload"
              href="/fonts/AkiraBold.otf"
              as="font"
              type="font/otf"
              crossOrigin="anonymous"
          />
          <link
              rel="preload"
              href="/fonts/AkiraOutline.otf"
              as="font"
              type="font/otf"
              crossOrigin="anonymous"
          />
          <meta name="Description" content="Author: legitbeep, Illustrator: legitbeep, Category: NFT, Price:  0.01 ETH, Length: 5 pages"></meta>
          <meta property="og:title" content="Dumb People" />
          <meta property="og:type" content="NFT" />
          <meta property="og:description" content="Dumb NFT for free on ropsten!" />
          <meta property="og:image" content="https://i.ibb.co/xfshxdJ/Frame-1.jpg" />
          <meta property="og:url" content="https://dumb-people.vercel.app/" />
          <meta name="twitter:card" content="summary_large_image" />
          {/* add your own app-icon */}
          {/* <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />
          <link rel="shortcut icon" href="/app-icon.png" /> */}

          {/* <link rel="manifest" href="/manifest.json" /> */}
        </Head>
        <body>
          <ColorModeScript initialColorMode={'dark'} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
