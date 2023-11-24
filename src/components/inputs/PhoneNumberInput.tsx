import React from 'react';

import { cn } from '@/lib/utils';

interface PhoneNumberInputProps {
  value: string;
  setValue: (value: string) => void;
  isError?: boolean;
}

const PhoneNumberInput = ({
  value = '',
  setValue,
  isError = false,
}: PhoneNumberInputProps) => {
  return (
    <>
      <div
        className={cn(
          'bg-black-400 flex h-12 w-full items-stretch justify-center rounded-2xl border px-4',
          isError ? 'border-red-500' : 'border-black-300'
        )}
      >
        <input
          type='number'
          placeholder='Phone number'
          className='text-white-900 w-full rounded-2xl border-none bg-transparent text-base leading-4 outline-none ring-0 focus:border-none focus:outline-none focus:ring-0'
          inputMode='numeric'
          defaultValue={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      {isError && (
        <div className='mt-3'>
          <p className='text-sm font-[450] leading-none text-red-500'>
            Incorrect phone number
          </p>
        </div>
      )}
    </>
  );
};

export default PhoneNumberInput;
