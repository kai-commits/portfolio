import Image from 'next/image';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className='relative rounded-full object-cover flex-shrink-0 w-56 h-56 -mb-20 md:mb-0 md:w-64 md:h-95 xl:w-[350px] xl:h-[450px]'
      >
        <Image
          src='/about_profile.jpg'
          alt=''
          layout='fill'
          className='rounded-full md:rounded-lg object-cover flex-shrink-0'
          quality={100}
        />
      </motion.div>
      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          A Little Bit{' '}
          <span className='underline underline-offset-8 decoration-sunset/50'>About</span> Me
        </h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
          cupiditate doloribus perspiciatis qui aliquid earum quis unde. Sed,
          qui non alias sequi vel obcaecati omnis perferendis. Necessitatibus
          unde iure dignissimos!
        </p>
      </div>
    </motion.div>
  );
};
