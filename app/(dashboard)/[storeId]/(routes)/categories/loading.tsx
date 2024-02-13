'use client';

import { Loader } from '@/components/Loader';

const Loading = () => {
  return (
    <div className='flex w-full items-center justify-center flex-1'>
      <Loader />
    </div>
  );
};

export default Loading;
