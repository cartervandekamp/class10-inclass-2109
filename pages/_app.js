import "@/styles/globals.css";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";

import en from "../i18n/en.json";
import fr from "../i18n/fr.json";

const messages = {
  en,
  fr,
};

function getDirecition(locale) {
  return "ltr";
}

export default function App({ Component, pageProps }) {
  const { locale } = useRouter();

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Component {...pageProps} dir={getDirecition(locale)} />
    </IntlProvider>
  );
}
