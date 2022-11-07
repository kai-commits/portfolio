import Image from 'next/image';
import Link from 'next/link';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { BackgroundCircles } from './BackgroundCircles';
import { motion } from 'framer-motion';

export const Hero = () => {
  const [text] = useTypewriter({
    words: [`Hello! I'm Kai Meikle`, `Self-proclaimed Tech Guru`, `Designated Router Restarter`],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='space-y-8 z-20 relative'
      >
        <div className='relative'>
          <Image
            src='/hero_profile.jpg'
            alt=''
            width={128}
            height={128}
            className='rounded-full mx-auto object-cover'
            quality={100}
          />
        </div>
        <div>
          <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
            Web Developer
          </h2>
          <h1 className='flex text-xl md:text-5xl lg:text-6xl font-semibold px-10 w-screen justify-center'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor='#F7AB0A' />
          </h1>
          <div className='pt-5'>
            <Link href='#about'>
              <button className='heroButton'>About</button>
            </Link>
            <Link href='#experience'>
              <button className='heroButton'>Experience</button>
            </Link>
            <Link href='#skills'>
              <button className='heroButton'>Skills</button>
            </Link>
            <Link href='#projects'>
              <button className='heroButton'>Projects</button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
