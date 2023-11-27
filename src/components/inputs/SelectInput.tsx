import React from 'react';

import { cn } from '@/lib/utils';

export interface SelectInputOptionProps {
  value: number | string;
  label: string;
}
interface SelectInputProps {
  label?: string;
  name?: string;
  placeholder?: string;
  options?: SelectInputOptionProps[];
  styles?: string;
  onSelectChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectInput = ({
  label,
  placeholder,
  name,
  options,
  styles,
  onSelectChange,
}: SelectInputProps) => {
  return (
    <div className={cn('relative flex flex-col space-y-2', styles)}>
      <label htmlFor={name} className='text-gray-light text-sm'>
        {label}
      </label>
      <select
        onChange={onSelectChange}
        id={name}
        className='select text-gray-light border-blue-light text-gray-primary placeholder:text-gray-primary bg-black-400 w-full rounded-2xl border border-none p-4 text-sm placeholder:text-base'
        defaultValue={placeholder}
      >
        <option disabled>{placeholder}</option>
        {options &&
          options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
    </div>
  );
};

export default React.memo(SelectInput);
