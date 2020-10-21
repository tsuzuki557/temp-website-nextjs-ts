import React from 'react';
//import Head from 'next/head';
import Layout from '@/src/components/layout';

import ImgSvg from './../assets/svg/vercel.svg';

export default function Index() {
  return (
    <Layout siteName="トップページ" home>
      <h1>HOMEページです</h1>
      <ImgSvg />
    </Layout>
  );
}
