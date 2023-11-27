import { ChevronsUpDown } from 'lucide-react';
import React from 'react';

import { cn } from '@/lib/utils';

import countryList from '@/country_dial_info.json';

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
          'bg-black-400 flex h-12 w-full items-center justify-center rounded-2xl border px-4',
          isError ? 'border-red-500' : 'border-black-300'
        )}
      >
        <div className='flex items-center space-x-1'>
          <p>{countryList[0].flag}</p>
          <p className='text-white-500 text-base'>{countryList[0].dial_code}</p>
          <ChevronsUpDown className='text-white-500 w-4 cursor-pointer' />
        </div>
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

      {/* <CountryModal /> */}
    </>
  );
};

export default PhoneNumberInput;
