import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Experience } from '@/components/Experience';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import type { NextPage } from 'next';
import { HiChevronUp } from 'react-icons/hi';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div
      className='bg-charcoal text-white h-screen snap-y snap-mandatory overflow-y-scroll 
    overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-sunset/80'
    >
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
      <section id='contact' className='snap-start'>
        <Contact />
      </section>
      <Link href='#hero'>
        <footer className='flex sticky bottom-5 w-full justify-center items-center scroll-smooth'>
            <HiChevronUp size={40} className='opacity-50 hover:opacity-100 hover:text-sunset cursor-pointer'/>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
