'use client';

import { useRouter } from 'next/navigation';
import React, { useCallback, useState } from 'react';

import Button from '@/components/buttons/Button';
import PhoneNumberInput from '@/components/inputs/PhoneNumberInput';
import NextImage from '@/components/NextImage';

import { APP_IMAGES } from '@/constant/images';

const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const router = useRouter();

  const handlePhoneNumberChange = useCallback((value: string) => {
    setPhoneNumber(value);
  }, []);

  const handlePhoneSubmit = useCallback(() => {
    // eslint-disable-next-line no-console
    console.log('phone submit');
    router.push('/auth/verify');
  }, [router]);

  return (
    <section className='bg-blackish flex min-h-screen w-full items-center justify-center pb-[174px]'>
      <section className='flex w-[384px] flex-col items-stretch gap-y-16'>
        <div className='flex items-center justify-center'>
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
              <PhoneNumberInput
                value={phoneNumber}
                setValue={handlePhoneNumberChange}
                isError={false}
              />
            </div>
          </div>
          <div className='flex flex-col gap-y-2'>
            <Button
              variant='secondary'
              size='base'
              disabled={false}
              onClick={handlePhoneSubmit}
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
      </section>
    </section>
  );
};

export default LoginPage;
