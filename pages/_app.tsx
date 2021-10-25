import { FC } from 'react';
import type { AppProps /*, AppContext */ } from 'next/app';
import 'tailwindcss/tailwind.css'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Component {...pageProps} />
  );
};

export default MyApp;
