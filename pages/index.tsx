import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Kai Meikle Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='text-red-500'>Hello</div>
    </div>
  );
};

export default Home;
