import { motion } from 'framer-motion';
import Image from 'next/image';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

type Props = {};

export const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];

  const slideLeft = () => {
    const slider = document.getElementById('project-slider');
    if (slider) {
      slider.scrollLeft -= slider.clientWidth;
    }
  };
  const slideRight = () => {
    const slider = document.getElementById('project-slider');
    if (slider) {
      slider.scrollLeft += slider.clientWidth;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl flex'>
        Projects
      </h3>
      <MdChevronLeft
        className='opacity-50 hover:opacity-100 cursor-pointer hidden md:block z-20 absolute left-10'
        size={40}
        onClick={slideLeft}
      />
      <div
        id='project-slider'
        className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-10 scroll-smooth scrollbar-hide'
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className='w-screen flex-shrink-0 snap-center snap-mandatory flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'
          >
            <motion.div
              initial={{ y: -200, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Image src='/favicon.ico' alt='' width={200} height={200} />
            </motion.div>
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center underline underline-offset-8 decoration-sunset/50'>
                Crynance {project}
              </h4>
              <p className='text-lg text-center md:text-left'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                iusto ratione exercitationem repudiandae? Sed ullam, repellat
                earum reiciendis eos, nostrum animi nemo nam iste doloremque qui
                eveniet illo impedit libero?
              </p>
            </div>
          </div>
        ))}
      </div>
      <MdChevronRight
        className='opacity-50 hover:opacity-100 cursor-pointer hidden md:block z-20 absolute right-10'
        size={40}
        onClick={slideRight}
      />
      <div className='w-full absolute top-[30%] bg-sunset/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  );
};
