import React, { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import styles from './layout.module.scss';

// propsの型定義
// ？をつけると任意
type Props = {
  children?: ReactNode;
  siteName: string;
  home?: boolean;
};

const Layout = ({ children, siteName, home }: Props) => {
  return (
    <>
      <Head>
        <title>{siteName} | サイトベース</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {home ? (
        <>
          <p className={`${styles.txt} ${styles.fSize}`}>ホームの画面はこれを表示</p>
          <Link href="/about">
            <a>aboutページへ</a>
          </Link>
        </>
      ) : (
        <>
          <p>ホームの画面以外はこれを表示</p>
          <Link href="/">
            <a>ホームに戻る</a>
          </Link>
        </>
      )}
      <main className={styles.mainContent}>{children}</main>

      {!home && <p>ホーム以外ではこちを表示</p>}
    </>
  );
};

export default Layout;
