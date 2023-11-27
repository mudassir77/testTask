import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import React, { useCallback, useState } from 'react';

import { cn } from '@/lib/utils';

import { APP_IMAGES } from '@/constant/images';

interface Position {
  id: number;
  title: string;
  items: {
    itemTitle: string;
  }[];
}

interface PositionsProps {
  data: Position[];
  setSelectedPosition: (position: string) => void;
  onClose: (flag: boolean) => void;
}

const Positions = ({ data, setSelectedPosition, onClose }: PositionsProps) => {
  const [openListItems, setOpenListItems] = useState<number | null>(null);

  const handleOpenListItems = useCallback((index: number) => {
    setOpenListItems((prev) => (prev === index ? null : index));
  }, []);

  const handleSelectedPosition = useCallback(
    (position: string) => {
      setSelectedPosition(position);
      onClose(false);
    },
    [setSelectedPosition, onClose]
  );

  return (
    <>
      {!data.length ? (
        <div className='flex flex-col items-center justify-center space-y-6 pt-24'>
          <Image
            src={APP_IMAGES.crab}
            width={200}
            height={200}
            alt='crab'
            className='w-16'
          />
          <p className='text-white-800 text-lg'>
            Oh crab, we can&apos;t find a position
          </p>
        </div>
      ) : (
        data.map(({ id, items, title }: Position) => {
          const isCurrentOpen = openListItems === id;
          return (
            <li key={id} className='list-none'>
              <details className='w-full' open={!isCurrentOpen}>
                <summary
                  className={cn(
                    'flex w-full cursor-pointer flex-row items-center rounded-md focus:outline-none'
                  )}
                  onClick={() => handleOpenListItems(id)}
                >
                  <div className='border-black-300 flex w-full items-center justify-between space-x-1 border-b border-t py-4 pl-6 pr-3'>
                    <p className='text-white-800 text-base font-normal'>
                      {title}
                    </p>
                    <div>
                      {isCurrentOpen ? (
                        <ChevronUp size={24} className='text-white-800' />
                      ) : (
                        <ChevronDown size={24} className='text-white-800' />
                      )}
                    </div>
                  </div>
                </summary>
                {isCurrentOpen && (
                  <ul className='mx-2 mb-1 flex cursor-pointer flex-col space-y-[3.5px] pt-2 before:relative'>
                    {items.map((each: { itemTitle: string }, idx: number) => (
                      <div
                        onClick={() => handleSelectedPosition(each.itemTitle)}
                        key={idx}
                        className='text-white-800 hover:bg-white-500 hover:text-blackish flex w-full cursor-pointer items-center justify-between rounded-md px-3 py-[7px] text-base font-normal'
                      >
                        <p>{each.itemTitle}</p>
                      </div>
                    ))}
                  </ul>
                )}
              </details>
            </li>
          );
        })
      )}
    </>
  );
};

export default React.memo(Positions);
