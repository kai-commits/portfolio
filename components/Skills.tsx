import { motion } from 'framer-motion';
import { Skill } from './Skill';

export const Skills = () => {
  return (
    <motion.div className='h-screen flex relative flex-col text-center md:text-left 
    xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
      </h3>
      <div className='grid grid-cols-4 gap-5 gap-y-14 md:gap-y-5'>
        <Skill src='nextjs-icon.svg' name='Next.js' directionLeft />
        <Skill src='typescript-icon-round.svg' name='TypeScript' directionLeft />
        <Skill src='react.svg' name='React' directionLeft />
        <Skill src='tailwindcss-icon.svg' name='TailwindCSS' directionLeft />
        <Skill src='aws.svg' name='AWS' directionLeft />
        <Skill src='html-5.svg' name='HTML' directionLeft />
        <Skill src='css-3.svg' name='CSS' directionLeft />
        <Skill src='ruby.svg' name='Ruby' directionLeft />
        <Skill src='nodejs-icon.svg' name='Node.js' />
        <Skill src='firebase.svg' name='Firebase' />
        <Skill src='postgresql.svg' name='PostgreSQL' />
        <Skill src='git-icon.svg' name='Git' />
        <Skill src='jest.svg' name='Jest' />
        <Skill src='mocha.svg' name='Mocha' />
        <Skill src='chai.svg' name='Chai' />
        <Skill src='cypress-icon.svg' name='Cypress' />
      </div>
    </motion.div>
  );
};
