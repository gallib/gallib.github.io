import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="fr" className="h-full bg-myrtle-500">
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
                    rel="stylesheet"
                />
                <meta name="author" content="Alain Pellaux" />
                <meta name="description" content="Alain Pellaux, je suis enseignant, ancien développeur de sites et d’applications web, spécialisé PHP (Laravel, WordPress) et javascript (Node.js, React) à Genève, en Suisse." />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@gallib_net" />
                <meta name="twitter:image" content="https://alain.info/logo.svg" />
                <meta name="og:description" content="Alain Pellaux, je suis enseignant, ancien développeur de sites et d’applications web, spécialisé PHP (Laravel, WordPress) et javascript (Node.js, React) à Genève, en Suisse." />
            </Head>
            <body className="h-full font-lato">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}