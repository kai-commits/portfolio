import Image from 'next/image';
import { motion } from 'framer-motion';
import Carousel from './carousel/Carousel';

const imagesItems = [
  <Image
    key={1}
    className='w-full h-full'
    src='/lg-1.png'
    alt='lore-genie-1'
    layout='fill'
  />,
  <Image
    key={2}
    className='w-full h-full'
    src='/lg-2.png'
    alt='lore-genie-2'
    layout='fill'
  />,
  <Image
    key={3}
    className='w-full h-full'
    src='/lg-3.png'
    alt='lore-genie-3'
    layout='fill'
  />,
  <Image
    key={4}
    className='w-full h-full'
    src='/lg-5.png'
    alt='lore-genie-4'
    layout='fill'
  />,
  <Image
    key={5}
    className='w-full h-full'
    src='/lg-4.png'
    alt='lore-genie-5'
    layout='fill'
  />,
];

export const LoreGenie = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left lg:flex-row max-w-7xl justify-evenly'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Freelance
      </h3>
      <div className='px-0 space-y-4 md:space-y-10 md:px-10'>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className='relative object-cover object-center w-full h-24 mx-auto'
        >
          <Image
            src='/lore-genie-logo.svg'
            alt='Lore Genie'
            layout='fill'
            className=''
          />
        </motion.div>
        <p className='text-sm text-justify sm:text-base lg:text-lg'>
          The ultimate AI-driven Dungeons and Dragons campaign generator.
          Crafted using Next.js, React, Tailwind, and Firebase, this innovative
          application revolutionizes campaign creation. Let AI weave intricate
          narratives, design characters, and curate challenges while you
          customize themes and elements. With seamless Next.js and React
          integration, secure Firebase data storage, and user authentication,
          Lore Genie offers a user-friendly, visually appealing experience.
        </p>
      </div>
      <div className='w-full md:ml-20'>
        <Carousel items={imagesItems} />
      </div>
    </motion.div>
  );
};
