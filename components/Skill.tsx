import { motion } from 'framer-motion';
import Image from 'next/image';

interface Props {
  directionLeft?: boolean;
}

export const Skill = ({ directionLeft }: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.div
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className=' object-cover w-20 h-20 xl:w-28 xl:h-28'
      >
        <Image src='/typescript_logo.png' alt='' layout='fill' className='rounded-full border border-gray-500 filter group-hover:grayscale transition duration-300 ease-in-out' />
      </motion.div>
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-20 h-20 xl:w-28 xl:h-28 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-sm xl:text-lg font-bold text-black opacity-100'>TypeScript</p>
        </div>
      </div>
    </div>
  );
};
