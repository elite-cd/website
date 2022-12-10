import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import fr from '../locales/fr.json';
config.autoAddCss = false;

//Style
import '../styles/globals.css';

const languages = {
  fr,
};

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  return (
    <IntlProvider locale={locale} messages={languages[locale]}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
