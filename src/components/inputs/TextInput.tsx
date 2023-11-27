import React from 'react';

import { cn } from '@/lib/utils';

interface TextInputProps {
  name: string;
  value?: string;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  inputClassName?: string;
  inputContainerClassName?: string;
  leftIcon?: React.ReactNode;
  error?: string;
}

const customInputContainerStyle =
  'w-full text-gray-primary flex gap-x-2 items-center rounded-2xl border-none bg-black-400 p-4';

const customInputStyle =
  'w-full bg-black-400 text-sm text-white-500 placeholder:text-base placeholder:text-gray-primary focus:outline-none focus:ring-0 border-none p-0';

const TextInput = ({
  name,
  value,
  onBlur,
  onChange,
  leftIcon,
  error,
  placeholder,
  inputClassName,
  inputContainerClassName,
}: TextInputProps) => {
  return (
    <div className='relative'>
      <div className={cn(customInputContainerStyle, inputContainerClassName)}>
        <input
          type='text'
          placeholder={placeholder}
          className={cn(customInputStyle, inputClassName)}
          name={name}
          value={value}
          onBlur={onBlur as React.FocusEventHandler<HTMLInputElement>}
          onChange={onChange}
        />
        {leftIcon && leftIcon}
      </div>
      {!!error && (
        <p className='absolute -bottom-5 left-[2px] text-[10px] italic text-red-600'>
          {error}
        </p>
      )}
    </div>
  );
};

export default React.memo(TextInput);
