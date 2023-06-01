import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { Roboto } from '@next/font/google';
import 'styles/global.css';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const MyComponent = Component as any;
  const getLayout = MyComponent.getLayout ?? ((page: ReactElement) => page);

  return (
    <main className={roboto.className}>
      {getLayout(<MyComponent {...pageProps} />)}
    </main>
  );
}
