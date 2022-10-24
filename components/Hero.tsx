import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { BackgroundCircles } from './BackgroundCircles';

export const Hero = () => {
  const [text, count] = useTypewriter({
    words: ['text1', 'text2', 'text3'],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor='#E2B714' />
      </h1>
    </div>
  );
};
