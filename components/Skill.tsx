import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {
  directionLeft?: boolean;
  src: string;
  name: string;
}

export const Skill = ({ src, name, directionLeft }: Props) => {
  return (
    <div className='group relative flex cursor-default'>
      <motion.div
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className=' object-cover w-20 h-20 xl:w-28 xl:h-28 rounded-full'
      >
        <Image src={`/${src}`} alt='' layout='fill' className='filter group-hover:grayscale group-hover:opacity-20 transition duration-300 ease-in-out' />
      </motion.div>
      <div className='absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out w-20 h-20 xl:w-28 xl:h-28 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-sm xl:text-lg text-white opacity-100'>{name}</p>
        </div>
      </div>
    </div>
  );
};
