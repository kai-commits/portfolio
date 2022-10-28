import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
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
      <section id='hero' className='snap-start'>
        <Hero />
      </section>
      <section id='about' className='snap-center'>
        <About />
      </section>
      <section id='experience' className='snap-center'>
        <Experience />
      </section>
      <section id='skills' className='snap-start'>
        <Skills />
      </section>
      <section id='projects' className='snap-start'>
        <Projects />
      </section>
    </div>
  );
};

export default Home;
