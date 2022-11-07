import { motion } from 'framer-motion';
import Image from 'next/image';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { SocialIcon } from 'react-social-icons';

const projects = [
  {
    title: 'Crynance',
    desc: `Crynance is a mobile orientated web application designed to help keep track of your crypto-currency finances. 
    Log in with Google authentication and input the coins you have purchased, and Crynance will record, store, and compare 
    your investments at time of purchase to current market values in order to visualize your portfolio gains and losses.`,
    img: 'crynance.png',
    link: 'https://crynance.vercel.app/',
    repo: 'crynance',
    stack: [
      'typescript-icon-round.svg',
      'react.svg',
      'nextjs-icon.svg',
      'firebase.svg',
      'tailwindcss-icon.svg',
    ],
  },
  {
    title: 'Netflicks',
    desc: `This project is a front-end clone of Netflix built for the purpose of learning TailwindCSS and Firebase with React. 
    Users can create a new account, scroll through the list of movies and save their favourite shows.`,
    img: 'netflicks.png',
    link: 'https://netflicks-bd2ba.web.app/',
    repo: 'netflicks',
    stack: [
      'javascript.svg',
      'react.svg',
      'firebase.svg',
      'tailwindcss-icon.svg',
    ],
  },
  {
    title: 'Herbiview',
    desc: `Utilizing the Plant.ID image recognition API, this app can identify plants based on an image provided by the user. 
    After cross-referencing your image with our database, Herbiview will return information on the species, toxicities, 
    and possible diseases the plant may have. A user may also log in and save their previous identifications for future reference.`,
    img: 'herbiview.png',
    link: 'https://herbiview.herokuapp.com/',
    repo: 'herbiview',
    stack: ['javascript.svg', 'react.svg', 'nodejs-icon.svg', 'postgresql.svg'],
  },
  {
    title: 'Kool-Kids Snax',
    desc: `A food ordering application where customers can order dishes and receive notifications via SMS. The restaurant will 
    be notified when an order has been placed, and the customer will receive updates when the restaurant changes their order status. 
    The customer can also view their order history, and the restaurant can also add new items to the menu.`,
    img: 'koolkidssnax.png',
    link: 'http://kool-kids-snax.herokuapp.com/users/1',
    repo: 'kool-kids-snax',
    stack: [
      'javascript.svg',
      'nodejs-icon.svg',
      'twilio-icon.svg',
      'postgresql.svg',
    ],
  },
];

export const Projects = () => {
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
      <HiChevronLeft
        className='opacity-50 hover:opacity-100 hover:text-sunset cursor-pointer hidden md:block z-20 absolute left-10'
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
              <Image src={`/${project.img}`} alt='' width={300} height={200} />
            </motion.div>
            <div className='flex justify-center flex-col space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center underline underline-offset-8 decoration-sunset/30'>
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='cursor-pointer hover:text-sunset'
                >
                  {project.title}
                </a>
              </h4>
              <div className='flex justify-center space-x-2'>
                {project.stack.map((tech, index) => {
                  return (
                    <div key={index}>
                      <Image src={`/${tech}`} alt='' width={40} height={40} />
                    </div>
                  );
                })}
              </div>
              <p className='text-sm text-center md:text-left md:text-base lg:text-lg'>{project.desc}</p>
            </div>
            <div>
              <SocialIcon
                url={`https://github.com/kai-commits/${project.repo}`}
                fgColor='gray'
                bgColor='transparent'
                target='_blank'
                rel='noopener noreferrer'
              />
            </div>
          </div>
        ))}
      </div>
      <HiChevronRight
        className='opacity-50 hover:opacity-100 hover:text-sunset cursor-pointer hidden md:block z-20 absolute right-10'
        size={40}
        onClick={slideRight}
      />
      <div className='w-full absolute top-[30%] bg-sunset/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  );
};
