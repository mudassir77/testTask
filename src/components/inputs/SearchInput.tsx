import React from 'react';

import { cn } from '@/lib/utils';

interface SearchInputProps {
  placeholder?: string;
  inputClassName?: string;
  inputContainerClassName?: string;
}

const customInputContainerStyle =
  'w-full text-gray-primary flex gap-x-2 items-center rounded-md border-none bg-black-400 px-4 py-3';
const customInputStyle =
  'w-full rounded-md bg-black-400 text-sm text-gray-light placeholder:text-sm placeholder:text-gray-primary focus:outline-none focus:ring-0 border-none p-0';

const SearchInput = ({
  placeholder,
  inputClassName,
  inputContainerClassName,
}: SearchInputProps) => {
  return (
    <div className={cn(customInputContainerStyle, inputContainerClassName)}>
      <input
        type='text'
        placeholder={placeholder}
        className={cn(customInputStyle, inputClassName)}
      />
    </div>
  );
};

export default React.memo(SearchInput);
