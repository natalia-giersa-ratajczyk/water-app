import '@/styles/globals.css';

import { Rubik } from '@next/font/google';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import LoadingPage from '@/components/LoadingPage';
import AppContextProvider from '@/context';

const rubik = Rubik({ weight: 'variable', subsets: ['latin', 'latin-ext'] });

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const startHandler = (url: string) => {
      if (url !== router.asPath) {
        setIsLoading(true);
      }
    };

    const completeHandler = () => {
      if (router.isReady) {
        setIsLoading(false);
      }
    };

    router.events.on('routeChangeStart', startHandler);
    router.events.on('routeChangeComplete', completeHandler);
    router.events.on('routeChangeError', completeHandler);

    return () => {
      router.events.off('routeChangeStart', startHandler);
      router.events.off('routeChangeComplete', completeHandler);
      router.events.off('routeChangeError', completeHandler);
    };
  });

  return (
    <main className={rubik.className}>
      <AppContextProvider>
        {isLoading ? <LoadingPage /> : <Component {...pageProps} />}
      </AppContextProvider>
    </main>
  );
}
