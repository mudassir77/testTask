import { ChevronsUpDown } from 'lucide-react';
import React from 'react';

import { cn } from '@/lib/utils';

import { Country } from '@/components/modals/CountryModal/CountryItem';

interface PhoneNumberInputProps {
  name: string;
  value: string;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  inputClassName?: string;
  inputContainerClassName?: string;
  leftIcon?: React.ReactNode;
  error?: string;
  onClick?: (flag: boolean) => void;
  selectedCountry?: Country;
}

const PhoneNumberInput = ({
  name,
  value,
  onBlur,
  onChange,
  error,
  placeholder,
  onClick,
  selectedCountry,
}: PhoneNumberInputProps) => {
  return (
    <div className='flex w-full flex-col'>
      <div
        className={cn(
          'bg-black-400 flex h-12 w-full items-center justify-center rounded-2xl border px-4',
          error ? 'border-red-600' : 'border-black-300'
        )}
      >
        <div className='flex items-center space-x-1'>
          <p>{selectedCountry?.flag}</p>
          <p className='text-white-500 text-base'>
            {selectedCountry?.dial_code}
          </p>
          <ChevronsUpDown
            onClick={() => onClick?.(true)}
            className='text-white-500 w-4 cursor-pointer'
          />
        </div>
        <input
          type='number'
          className='text-white-900 w-full rounded-2xl border-none bg-transparent text-base leading-4 outline-none ring-0 focus:border-none focus:outline-none focus:ring-0'
          inputMode='numeric'
          placeholder={placeholder}
          name={name}
          value={value}
          onBlur={onBlur as React.FocusEventHandler<HTMLInputElement>}
          onChange={onChange}
        />
      </div>
      {!!error && (
        <div className='mt-3'>
          <p className='text-sm font-[450] italic leading-none text-red-600'>
            Incorrect phone number
          </p>
        </div>
      )}
    </div>
  );
};

export default PhoneNumberInput;
