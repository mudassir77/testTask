'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';

import Button from '@/components/buttons/Button';
import CustomOtpInput from '@/components/inputs/CustomOtpInput';

const Verify = () => {
  const router = useRouter();

  const [otp, setOtp] = useState('');

  const handleContinue = useCallback(() => {
    router.push('/auth/signup');
  }, [router]);

  const goBack = useCallback(() => {
    router.push('/auth/login');
  }, [router]);

  return (
    <section className='bg-blackish flex min-h-screen w-full items-center justify-center pb-[174px]'>
      <section className='flex w-[384px] flex-col items-stretch gap-y-16'>
        <div className='flex flex-col items-stretch gap-y-8'>
          <div className='flex flex-col items-stretch gap-y-12'>
            <div className='flex flex-col items-stretch gap-y-2'>
              <h2 className='text-white-500 text-center text-[32px] font-medium leading-none -tracking-[1.28px]'>
                Verify
              </h2>
              <p className='text-black-100 text-center text-base leading-5 '>
                Enter the code we&apos;ve sent to{' '}
                <span className='text-white-500'>+1 123-456-7890</span>.
              </p>
            </div>
            <div className='flex flex-col items-center space-y-4'>
              <CustomOtpInput otp={otp} setOtp={setOtp} />
            </div>
          </div>

          <div className='flex items-center gap-x-2'>
            <Button
              variant='secondary'
              size='base'
              onClick={goBack}
              className='bg-black-400'
            >
              Back
            </Button>
            <Button
              disabled={otp.length !== 4}
              onClick={handleContinue}
              variant='secondary'
              size='base'
            >
              Continue
            </Button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Verify;
