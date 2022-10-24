import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className='bg-charcoal text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Kai Meikle Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <section id='hero' className='snap-center'>
        <Hero />
      </section>
    </div>
  );
};

export default Home;
