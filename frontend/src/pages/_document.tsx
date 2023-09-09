import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-gradient-to-r from-green-400 via-cyan-900 to-blue-500">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
