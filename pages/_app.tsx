import Head from 'next/head';
import { AppProps } from 'next/app';

import { DefaultSeo } from '@theme/components/Seo';
import 'styles/global.css';
import 'styles/font.css';
import { globalStyles } from 'lib/globalStyles';
import { ThemeProvider } from '@theme/hooks';

const App = ({ Component, pageProps }: AppProps) => {
  globalStyles();

  return (
    <ThemeProvider>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          name="google-site-verification"
          content="6dAYMs6Ja5p5m3Vjf5zP0T4_MMPgUzPchWLxyaVBi_o"
        />
      </Head>
      <DefaultSeo />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};
export default App;
