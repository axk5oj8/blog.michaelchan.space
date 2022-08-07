import { getCssText } from 'lib/stitches.config';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/inter-var-latin.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/inter-var-latin-italic.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/fira-code.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/SpaceGrotesk-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/SpaceGrotesk-Medium.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/SpaceGrotesk-SemiBold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            href="/static/favicons/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href="/static/favicons/android-chrome-192x192.png"
            rel="icon"
            sizes="192x192"
            type="image/png"
          />
          <link
            href="/static/favicons/android-chrome-512x512.png"
            rel="icon"
            sizes="512x512"
            type="image/png"
          />
          <link
            href="/static/favicons/favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/static/favicons/favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/static/favicons/favicon.ico"
          />
          <link rel="manifest" href="/static/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" />
          <link rel="alternate" type="application/rss+xml" href="/rss.xml" />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        </Head>
        <body className="light">
          <Script src="/sw.js"></Script>
          <script
            key="theme"
            dangerouslySetInnerHTML={{
              __html: `(function() { try {
        var mode = localStorage.getItem('mode');
        var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true;
        if (!mode && supportDarkMode)  document.body.classList.add('dark');
        if (!mode) return
        document.body.classList.add(mode);
      } catch (e) {} })();`,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
