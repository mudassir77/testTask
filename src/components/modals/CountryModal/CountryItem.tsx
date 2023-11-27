import React, { useCallback } from 'react';

export interface Country {
  name: string;
  dial_code: string;
  flag: string;
}

interface CountryItemProps {
  data: Country;
  setSelectedCountry: (country: Country) => void;
  onClose: (flag: boolean) => void;
}

const CountryItem = ({
  data,
  setSelectedCountry,
  onClose,
}: CountryItemProps) => {
  const handleCountrySelection = useCallback(() => {
    setSelectedCountry(data);
    onClose(false);
  }, [setSelectedCountry, onClose, data]);

  return (
    <div
      onClick={handleCountrySelection}
      className='hover:bg-black-100 group flex cursor-pointer items-center px-6 py-2'
    >
      <p className='mr-3 text-2xl'>{data.flag}</p>
      <p className='text-white-800 mr-4 text-base'>{data.dial_code}</p>
      <p className='text-white-900 group-hover:text-white-500 text-sm'>
        {data.name}
      </p>
    </div>
  );
};

export default React.memo(CountryItem);
