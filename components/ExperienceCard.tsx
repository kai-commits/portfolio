import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {
  src: string;
  h1: string;
  h2: string;
  startDate: string;
  endDate: string;
  summaryPoints: string[];
};

export const ExperienceCard = ({
  src,
  h1,
  h2,
  startDate,
  endDate,
  summaryPoints,
}: Props) => {
  return (
    <article
      className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[350px] md:w-[500px] snap-center bg-[#292929] px-8 py-4 sm:p-10
    hover:opacity-100 opacity-60 cursor-default transition-opacity duration-200 overflow-hidden'
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className='relative w-20 h-20 object-cover object-center'>
          <Image src={`/${src}`} alt='' layout='fill' className='' />
        </div>
      </motion.div>
      <div className='px-0 md:px-10'>
        <h4 className='text-3xl font-light'>{h1}</h4>
        <p className='font-bold md:text-lg mt-1'>{h2}</p>
        <p className='uppercase py-5 text-gray-300 text-sm md:text-base'>
          {startDate} -- {endDate}
        </p>
        <ul className='list-disc space-y-4 ml-5'>
          {summaryPoints.map((point, index) => {
            return <li key={index}>{point}</li>;
          })}
        </ul>
      </div>
    </article>
  );
};
