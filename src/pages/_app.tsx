import '@/styles/globals.css';

import { Rubik } from '@next/font/google';
import type { AppProps } from 'next/app';

const rubik = Rubik({ weight: 'variable', subsets: ['latin', 'latin-ext'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={rubik.className}>
      <Component {...pageProps} />
    </main>
  );
}
