import { motion } from 'framer-motion';
import { ExperienceCard } from './ExperienceCard';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

export const Experience = () => {
  const slideLeft = () => {
    const slider = document.getElementById('slider');
    if (slider) {
      slider.scrollLeft -= slider.clientWidth/2;
    }
  };
  const slideRight = () => {
    const slider = document.getElementById('slider');
    if (slider) {
      slider.scrollLeft += slider.clientWidth/2;
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Experience
      </h3>
      <HiChevronLeft
        className='opacity-50 hover:opacity-100 hover:text-sunset cursor-pointer hidden md:block'
        size={40}
        onClick={slideLeft}
      />
      <div
        id='slider'
        className='w-full flex space-x-10 overflow-x-scroll p-10 snap-x snap-mandatory h-[700px] scroll-smooth scrollbar-hide'
      >
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
      <HiChevronRight
        className='opacity-50 hover:opacity-100 hover:text-sunset cursor-pointer hidden md:block'
        size={40}
        onClick={slideRight}
      />
    </motion.div>
  );
};
