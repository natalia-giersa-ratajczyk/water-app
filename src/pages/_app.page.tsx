import '@/styles/globals.css';

import { Rubik } from '@next/font/google';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';

import AppContextProvider from '@/context';

const rubik = Rubik({ weight: 'variable', subsets: ['latin', 'latin-ext'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={rubik.className}>
      <AppContextProvider>
        <Component {...pageProps} />
        <Toaster />
      </AppContextProvider>
    </main>
  );
}
