import { Html, Head, Main, NextScript } from 'next/document'

/**
 * Custom Document.
 *
 * @returns React component.
 */
export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#222222" />
        <meta name="author" content="=nil; Foundation" />
        <meta name="copyright" content="=nil; Foundation" />
        <meta
            name="description"
            content="R&D in applied cryptography and database management"
        />
        <meta name="keywords" content="=nil; Foundation, cryptography, database management, research" />
        <meta property="og:title" content="=nil; Foundation" />
        <meta property="og:description" content="R&D in applied cryptography and database management" />
        <meta property="og:image" content="/logo512.png" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
            rel="stylesheet"
        />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css"
            integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu"
            crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
