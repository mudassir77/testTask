import { X } from 'lucide-react';
import React from 'react';

import SearchInput from '@/components/inputs/SearchInput';
import ModalWrapper from '@/components/modals/ModalWrapper';

const CountryModal = () => {
  return (
    <ModalWrapper className='bg-blackish w-[384px] max-w-[384px] border-transparent'>
      <div className='border-black-300 flex items-center justify-between border-b px-4 py-3'>
        <X className='text-white-500 h-5 w-5 cursor-pointer' />
        <p className='text-white-500 text-2xl'>Country</p>
        <div />
      </div>

      <div className='px-6 py-2'>
        <SearchInput
          placeholder='Search'
          inputClassName='placeholder:text-white-900'
        />
      </div>
    </ModalWrapper>
  );
};

export default React.memo(CountryModal);
