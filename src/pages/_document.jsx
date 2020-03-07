import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <style>{`
            * {
              box-sizing: border-box;
            }
            html {
              font-size: 10px !important;
            }
            html::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}