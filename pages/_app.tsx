import { FC } from 'react';
import type { AppProps /*, AppContext */ } from 'next/app';
import 'tailwindcss/tailwind.css'
import { useStore } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import wrapper from "../_store/configureStore";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const store: any = useStore();
  return (
    <PersistGate loading={null} persistor={store.__persistor}>
      <Component {...pageProps} />
    </PersistGate>
  );
};

export default wrapper.withRedux(MyApp);
