import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className='sticky top-0 flex justify-between max-w-7xl mx-auto z-20 p-5'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex items-center'
      >
        <SocialIcon
          url='https://www.linkedin.com/in/kaimeikle123'
          fgColor='gray'
          bgColor='transparent'
          target='_blank'
          rel='noopener noreferrer'
        />
        <SocialIcon
          url='https://github.com/kai-commits'
          fgColor='gray'
          bgColor='transparent'
          target='_blank'
          rel='noopener noreferrer'
        />
      </motion.div>
      <Link href='#contact'>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className='flex items-center text-gray-300 cursor-pointer'
        >
          <SocialIcon
            className='cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent'
            target='_blank'
            rel='noopener noreferrer'
          />
          <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
            Get In Touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
};
