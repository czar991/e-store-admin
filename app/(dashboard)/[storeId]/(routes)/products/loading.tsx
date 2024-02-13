'use client';

import { Loader } from '@/components/Loader';

const Loading = () => {
  return (
    <div className='flex flex-1 w-full items-center justify-center'>
      <Loader />
    </div>
  );
};

export default Loading;
