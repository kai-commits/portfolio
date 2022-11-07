import { motion } from 'framer-motion';
import { ExperienceCard } from './ExperienceCard';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const summaryPoints = {
  lhl: [
    `Gained firsthand experience with Javascript and Node ecosystems.`,
    `Learned software architecture by studying programming practices and well-encapsulated code.`,
    `Built single page applications using components, one way data flow and the Virtual DOM.`,
  ],
  aws: [
    `Designed architecture strategies for application deployments.`,
    'Analyzed software architecture for weaknesses.',
    'Applied established development methodologies to architecture design.',
  ],
  jb: [
    'Specialized in foundations, framing, and finish carpentry.',
    'Followed protocols and stayed organized to provide personal and teammate safety.',
    'Completed tasks according to technical document requirements and specifications to work with accuracy.',
  ],
};

export const Experience = () => {
  const slideLeft = () => {
    const slider = document.getElementById('slider');
    if (slider) {
      slider.scrollLeft -= slider.clientWidth / 2;
    }
  };
  const slideRight = () => {
    const slider = document.getElementById('slider');
    if (slider) {
      slider.scrollLeft += slider.clientWidth / 2;
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
        className='w-full flex space-x-10 overflow-x-scroll p-10 snap-x snap-mandatory scroll-smooth scrollbar-hide'
      >
        <ExperienceCard
          src='lighthouselabs.svg'
          h1='Lighthouse Labs'
          h2='Full-Stack Web Development Bootcamp'
          startDate='Mar 2022'
          endDate='Jun 2022'
          summaryPoints={summaryPoints.lhl}
        />
        <ExperienceCard
          src='aws.svg'
          h1='AWS Certified'
          h2='Solutions Architect Associate'
          startDate='Jul 2019'
          endDate='Jul 2022'
          summaryPoints={summaryPoints.aws}
        />
        <ExperienceCard
          src='jb_logo.svg'
          h1='Carpentry'
          h2='Residential Housing Construction'
          startDate='Aug 2019'
          endDate='Jan 2022'
          summaryPoints={summaryPoints.jb}
        />
      </div>
      <HiChevronRight
        className='opacity-50 hover:opacity-100 hover:text-sunset cursor-pointer hidden md:block'
        size={40}
        onClick={slideRight}
      />
    </motion.div>
  );
};
