import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
        <Html lang="en">
          <Head>
            <meta charSet="utf-8"/>
            <link rel="shortcut icon" href="../../favicon.ico"/>
            <meta name="theme-color" content="#ffffff"/>
            <meta
                name="description"
                content="Innovadigits | FE Task."
            />
            <meta
                name="robots"
                content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
            />
            <meta property="og:locale" content="en_US"/>
            <meta property="og:type" content="website"/>
            <meta
                property="og:title"
                content="Innovadigits | FE Task."
            />
            <meta
                property="og:description"
                content="React with Nextjs 12."
            />
          </Head>
          <body>
          <Main/>
          <NextScript/>
          </body>
        </Html>
    );
  }
}
