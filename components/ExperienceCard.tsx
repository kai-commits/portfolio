import { motion } from 'framer-motion';
import Image from 'next/image';

export const ExperienceCard = () => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[500px] xl:w-[600px] snap-center bg-[#292929] p-10 
    hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className='relative w-20 h-20 xl:w-32 xl:h-32 object-cover object-center'>
        <Image
          src='/lighthouselabs_logo.jpeg'
          alt=''
          layout='fill'
          className='rounded-full'
        />
        </div>
      </motion.div>
      <div className='px-0 md:px-10'>
        <h4 className='text-3xl font-light'>Lighthouse Labs</h4>
        <p className='font-bold text-lg mt-1'>
          Full-Stack Web Development Bootcamp
        </p>
        <p className='uppercase py-5 text-gray-300'>Start -- End</p>
        <ul className='list-disc space-y-4 ml-5'>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
};
