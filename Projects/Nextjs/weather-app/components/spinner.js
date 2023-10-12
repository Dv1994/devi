import Image from 'next/image';
import React from 'react';
import spinner from '../public/spinner2.gif';

const Spinner = () => {
  return (
    <>
      <Image className='w-[100px] m-auto block' src={ spinner2 } alt='loading..' />
    </>
  );
};

export default Spinner;