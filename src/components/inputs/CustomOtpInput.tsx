import React, { useCallback, useEffect, useState } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import OtpInput from 'react-otp-input';

import { cn } from '@/lib/utils';

interface CustomOtpInputProps {
  otp: string;
  setOtp: (otp: string) => void;
}

const CustomOtpInput = ({ otp, setOtp }: CustomOtpInputProps) => {
  const [timer, setTimer] = useState(60);

  const [isDisplayTimer, setIsDisplayTimer] = useState<boolean>(false);

  const timeOutCallback = useCallback(() => {
    return setTimer((currTimer) => currTimer - 1);
  }, []);

  let resendCodeTimeout: NodeJS.Timeout;

  useEffect(() => {
    if (timer > 0) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      resendCodeTimeout = setTimeout(timeOutCallback, 1000);
    }
    return () => clearTimeout(resendCodeTimeout);
  }, [timer, timeOutCallback]);

  const handleDisplayTimer = useCallback(() => {
    setTimer(60);
    setIsDisplayTimer(true);
  }, []);

  return (
    <>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={4}
        renderSeparator={<span>{` `}</span>}
        renderInput={(props) => <input {...props} />}
        containerStyle='flex items-center gap-x-2'
        inputStyle='min-w-[48px] h-[48px] rounded-2xl bg-black-400 text-white-500 placeholder:text-white-900 border border-black-300 outline-0 focus:outline-0 active:outline-0 ring-0 focus:ring-0 active:ring-0'
        inputType='tel'
        shouldAutoFocus={true}
        placeholder='0000'
      />

      <div className='flex items-center '>
        <p
          onClick={handleDisplayTimer}
          className={cn(
            'cursor-pointer text-sm',
            isDisplayTimer ? 'text-white-900' : 'text-white-500 underline'
          )}
        >
          Resend code{' '}
          {isDisplayTimer && (
            <span
              className={cn(
                'cursor-pointer text-sm',
                isDisplayTimer ? 'text-white-900' : 'text-white-500 underline'
              )}
            >
              in
            </span>
          )}
        </p>
        <div className='-ml-[9px] mt-[10px] '>
          {isDisplayTimer && (
            <CircularProgressbar
              maxValue={60}
              minValue={0}
              value={timer}
              text={`${timer}`}
              className='h-7 w-8'
              styles={buildStyles({
                textSize: '50px',
                trailColor: 'transparent',
                textColor: '#7F7E80',
              })}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default React.memo(CustomOtpInput);
