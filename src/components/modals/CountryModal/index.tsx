import { X } from 'lucide-react';
import React, { useCallback } from 'react';

import SearchInput from '@/components/inputs/SearchInput';
import CountryItem, {
  Country,
} from '@/components/modals/CountryModal/CountryItem';
import ModalWrapper from '@/components/modals/ModalWrapper';

import countryList from '@/country_dial_info.json';

interface CountryModalProps {
  onClose: (flag: boolean) => void;
  setSelectedCountry: (country: Country) => void;
}

const CountryModal = ({ onClose, setSelectedCountry }: CountryModalProps) => {
  const [filteredCountries, setFilteredCountries] = React.useState(
    countryList.slice(0, 10)
  );

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const filteredCountries = countryList.filter((each) =>
        each.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilteredCountries(filteredCountries);
    },
    [setFilteredCountries]
  );

  return (
    <ModalWrapper className='bg-blackish h-[50vh] max-h-[50vh] w-[384px] max-w-[384px] border-transparent shadow-[8px_8px_16px_0px_#0000003D]'>
      <div className='border-black-300 flex items-center justify-between border-b px-4 py-3'>
        <div className='py-4 pl-4'>
          <X
            onClick={() => onClose(false)}
            className='text-white-500 h-5 w-5 cursor-pointer'
          />
        </div>
        <p className='text-white-500 text-2xl'>Country</p>
        <div />
      </div>

      <div className=' flex flex-col'>
        <div className='px-6 py-2'>
          <SearchInput
            placeholder='Search'
            onChange={handleSearch}
            inputClassName='placeholder:text-white-900'
          />
        </div>

        {filteredCountries.slice(0, 10).map((each, idx) => (
          <CountryItem
            key={idx}
            data={each}
            setSelectedCountry={setSelectedCountry}
            onClose={onClose}
          />
        ))}
      </div>
    </ModalWrapper>
  );
};

export default React.memo(CountryModal);
