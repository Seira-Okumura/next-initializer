import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

/**
 * Copy-and-pasted from https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_document.js
 */
export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <style>{`
            * {
              box-sizing: border-box;
            }
            html {
              font-size: 10px;
            }
            html::-webkit-scrollbar {
              display:none;
            }
            body {
              -webkit-font-smoothing: antialiased;
              background-color: #fcfcff;
              color: #333;
              font-size: 14px;
              margin: 0;
              min-width: 1224px;
            }
            a {
              text-decoration: none;
            }
            ul {
              margin: 0;
              padding: 0;
              list-style-type: none;
            }
            input,
            textarea {
              border: none;
              outline: none;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
