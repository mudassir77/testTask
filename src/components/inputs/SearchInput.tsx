import { Search } from 'lucide-react';
import React from 'react';

import { cn } from '@/lib/utils';

interface SearchInputProps {
  placeholder?: string;
  inputClassName?: string;
  inputContainerClassName?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const customInputContainerStyle =
  'w-full text-gray-primary flex gap-x-2 items-center rounded-md border-none bg-black-400 px-4 py-3';
const customInputStyle =
  'w-full rounded-md bg-black-400 text-base text-white-500 placeholder:text-base placeholder:text-black-300 focus:outline-none focus:ring-0 border-none p-0';

const SearchInput = ({
  placeholder,
  inputClassName,
  inputContainerClassName,
  onChange,
}: SearchInputProps) => {
  return (
    <div className={cn(customInputContainerStyle, inputContainerClassName)}>
      <Search className='text-white-500 mr-3 w-4' />
      <input
        type='text'
        onChange={onChange}
        placeholder={placeholder}
        className={cn(customInputStyle, inputClassName)}
      />
    </div>
  );
};

export default React.memo(SearchInput);
