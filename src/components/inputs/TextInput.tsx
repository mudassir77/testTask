import React from 'react';

import { cn } from '@/lib/utils';

interface TextInputProps {
  placeholder?: string;
  inputClassName?: string;
}

const customInputStyle =
  'w-full rounded-2xl bg-black-400 text-sm text-gray-light placeholder:text-base placeholder:text-gray-primary focus:outline-none focus:ring-0 border-none p-4';

const TextInput = ({ placeholder, inputClassName }: TextInputProps) => {
  return (
    <div className='flex items-center justify-between'>
      <input
        type='text'
        placeholder={placeholder}
        className={cn(customInputStyle, inputClassName)}
      />

      {/* <ChevronsUpDown className='text-white-500 w-4 cursor-pointer' /> */}
    </div>
  );
};

export default React.memo(TextInput);
