'use client';

import { useRouter } from 'next/navigation';
import React, { useCallback, useState } from 'react';
import { Controller } from 'react-hook-form';
import * as Yup from 'yup';

import { useFormWithSchema } from '@/hooks';

import Button from '@/components/buttons/Button';
import PhoneNumberInput from '@/components/inputs/PhoneNumberInput';
import CountryModal from '@/components/modals/CountryModal';
import { Country } from '@/components/modals/CountryModal/CountryItem';
import NextImage from '@/components/NextImage';

import { APP_IMAGES } from '@/constant/images';
import countryList from '@/country_dial_info.json';

const LoginValidationSchema = Yup.object({
  phone: Yup.string().required('First name is required.').min(2),
});

const initialValues = {
  phone: '',
};

const LoginPage = () => {
  const [isCountryModalOpen, setIsCountryModalOpen] = useState<boolean>(false);

  const [selectedCountry, setSelectedCountry] = useState<Country>(
    countryList[0]
  );

  const router = useRouter();

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useFormWithSchema(LoginValidationSchema);

  const onSubmit = useCallback(() => {
    router.push('/auth/verify');
  }, [router]);

  const handleCountrySelection = useCallback((flag: boolean) => {
    setIsCountryModalOpen(flag);
  }, []);

  return (
    <>
      <section className='bg-blackish flex min-h-screen w-full items-center justify-center pb-[174px]'>
        <section className='flex w-[384px] flex-col items-stretch gap-y-16'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex items-center justify-center pb-16'>
              <NextImage
                useSkeleton
                width={64}
                height={64}
                src={APP_IMAGES.logo}
                alt='logo'
              />
            </div>
            <div className='flex flex-col items-stretch gap-y-8'>
              <div className='flex flex-col items-stretch gap-y-12'>
                <div className='flex flex-col items-stretch gap-y-2'>
                  <h2 className='text-white-500 text-center text-[32px] font-medium leading-none -tracking-[1.28px]'>
                    Let's get you started.
                  </h2>
                  <p className='text-black-100 text-center text-base leading-5 '>
                    Sign in or create an account.
                  </p>
                </div>
                <div className='flex items-center'>
                  <Controller
                    render={({ field: { onChange, onBlur, value, name } }) => {
                      return (
                        <PhoneNumberInput
                          name={name}
                          value={value}
                          onChange={onChange}
                          onBlur={onBlur}
                          placeholder='Phone Number'
                          error={errors?.phone?.message}
                          onClick={handleCountrySelection}
                          selectedCountry={selectedCountry}
                        />
                      );
                    }}
                    name='phone'
                    control={control}
                    defaultValue={initialValues.phone}
                  />
                </div>
              </div>
              <div className='flex flex-col gap-y-2'>
                <Button
                  type='submit'
                  variant='secondary'
                  size='base'
                  disabled={!!errors.phone}
                >
                  Continue
                </Button>
                <div>
                  <p className='text-white-900 text-center text-sm font-[450] leading-none'>
                    Having Trouble?{' '}
                    <span className='text-white-500 cursor-pointer font-[450]'>
                      Contact us
                    </span>{' '}
                  </p>
                </div>
              </div>
            </div>
          </form>
        </section>
      </section>

      {isCountryModalOpen && (
        <CountryModal
          setSelectedCountry={setSelectedCountry}
          onClose={handleCountrySelection}
        />
      )}
    </>
  );
};

export default LoginPage;
