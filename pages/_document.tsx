/**
 * @file Custom _document.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import { Html, Head, Main, NextScript } from 'next/document';

/**
 * Custom Document.
 *
 * @returns React component.
 */
export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="robots"
                    content="follow, index"
                />
                <meta
                    name="theme-color"
                    content="#222222"
                />
                <meta
                    name="msapplication-TileColor"
                    content="#222222"
                />
                <meta
                    name="msapplication-TileImage"
                    content="/ms-icon-144x144.png"
                />
                <meta
                    name="author"
                    content="=nil; Foundation"
                />
                <meta
                    name="copyright"
                    content="=nil; Foundation"
                />
                <meta
                    name="description"
                    content="R&D in applied cryptography and database management"
                />
                <meta
                    name="keywords"
                    content="=nil; Foundation, cryptography, database management, research"
                />
                <meta
                    property="og:title"
                    content="=nil; Foundation"
                />
                <meta
                    property="og:description"
                    content="R&D in applied cryptography and database management"
                />
                <meta
                    property="og:image"
                    content="/logo512.png"
                />

                <link
                    rel="icon"
                    href="/favicon.ico"
                    sizes="any"
                />
                <link
                    rel="icon"
                    href="/icon.svg"
                    type="image/svg+xml"
                />
                <link
                    rel="apple-touch-icon"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="manifest"
                    href="/manifest.json"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
