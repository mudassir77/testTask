import { X } from 'lucide-react';
import React, { useState } from 'react';

import SearchInput from '@/components/inputs/SearchInput';
import ModalWrapper from '@/components/modals/ModalWrapper';
import Positions from '@/components/modals/PositionModal/Positions';

import { POSITIONS } from '@/constant/common';

interface PositionModalProps {
  onClose: (flag: boolean) => void;
  setSelectedPosition: (position: string) => void;
}

const PositionModal = ({
  setSelectedPosition,
  onClose,
}: PositionModalProps) => {
  const [filteredPositions, setFilteredPositions] = useState(POSITIONS);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filtered = POSITIONS.filter((position) =>
      position.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredPositions(filtered);
  };

  return (
    <ModalWrapper className='bg-blackish h-[70vh] max-h-[90vh] w-[384px] max-w-[384px] border-transparent shadow-[8px_8px_16px_0px_#0000003D]'>
      <div className='border-black-300 flex items-center justify-between border-b px-4 py-3'>
        <div className='py-4 pl-4'>
          <X
            onClick={() => onClose(false)}
            className='text-white-500 h-5 w-5 cursor-pointer'
          />
        </div>
        <p className='text-white-500 text-2xl'>Position</p>
        <div />
      </div>

      <div className='flex h-full flex-col'>
        <div className='flex items-center space-x-4 px-6 py-2 '>
          <SearchInput
            placeholder='Search'
            onChange={handleSearch}
            inputClassName='placeholder:text-white-900'
          />
          <p className='text-white-900 cursor-pointer text-base'>Cancel</p>
        </div>

        <Positions
          data={filteredPositions}
          setSelectedPosition={setSelectedPosition}
          onClose={onClose}
        />
      </div>
    </ModalWrapper>
  );
};

export default React.memo(PositionModal);
