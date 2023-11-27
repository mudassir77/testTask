'use client';

import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react';

import Button from '@/components/buttons/Button';
import TextInput from '@/components/inputs/TextInput';

const SignupPage = () => {
  const router = useRouter();

  const handlePhoneSubmit = useCallback(() => {
    // eslint-disable-next-line no-console
    console.log('phone submit');
    router.push('/auth/verify');
  }, [router]);

  return (
    <section className='bg-blackish flex min-h-screen w-full items-center justify-center pb-[174px]'>
      <section className='flex w-[384px] flex-col items-stretch gap-y-16'>
        <div className='flex flex-col items-stretch gap-y-8'>
          <div className='flex flex-col items-stretch gap-y-12'>
            <div className='flex flex-col items-stretch gap-y-2'>
              <h2 className='text-white-500 text-center text-[32px] font-medium leading-none -tracking-[1.28px]'>
                Personal Information
              </h2>
              <p className='text-black-100 text-center text-base leading-5 '>
                Tell us a little bit about yourself.
              </p>
            </div>
            <div className='flex flex-col space-y-4'>
              <div className='flex items-center space-x-4'>
                <TextInput placeholder='First name' />
                <TextInput placeholder='Last name' />
              </div>

              <TextInput placeholder='Position' />
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
          </div>
        </div>
      </section>
    </section>
  );
};

export default SignupPage;
