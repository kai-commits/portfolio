import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export const Contact = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:kaimeikle123@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
  };

  return (
    <div className='h-screen relative flex flex-col text-cetner md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Contact
      </h3>
      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
          I&apos;ve got what you need.{' '}
          <span className='decoration-sunset/50 underline underline-offset-4'>
            Let&apos;s talk.
          </span>
        </h4>
        <div className='space-y-10'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-sunset h-7 w-7 animate-pulse' />
            <p className='text-2xl'>+1 (778) 350-4524</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-sunset h-7 w-7 animate-pulse' />
            <p>kaimeikle123@gmail.com</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-sunset h-7 w-7 animate-pulse' />
            <p>Victoria BC, Canada</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='hidden sm:flex flex-col space-y-2 w-fit'
        >
          <div className='flex space-x-2'>
            <input
              {...register('name')}
              placeholder='Name'
              className='contactInput'
              type='text'
            />
            <input
              {...register('email')}
              placeholder='Email'
              className='contactInput'
              type='email'
            />
          </div>
          <input
            {...register('subject')}
            placeholder='Subject'
            className='contactInput'
            type='text'
          />
          <textarea
            {...register('message')}
            placeholder='Message'
            className='contactInput'
          />
          <button
            type='submit'
            className='bg-sunset py-5 px-10 rounded-md text-black font-bold text-lg'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
