import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Patrick+Hand&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-gray-800 font-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
