import React from 'react';
import { AppProps } from 'next/app';

// グローバルCSS(SCSS)を読み込む
import '@/src/assets/scss/global.scss';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
