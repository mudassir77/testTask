'use client';

import React, { LegacyRef, useRef, useState } from 'react';

import Button from '@/components/buttons/Button';

const Verify = () => {
  const [inputValues, setInputValues] = useState(['', '', '', '']);
  const inputRefs = useRef<Array<LegacyRef<HTMLInputElement>> | undefined>([]);

  const handleInputChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);

    // if (value.length === 1 && inputRefs.current && index < inputRefs.current.length - 1) {
    // }
  };

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
              <div className='flex items-center space-x-2'>
                {inputValues.map((value, index) => (
                  <input
                    key={index}
                    type='text'
                    maxLength={1}
                    placeholder='0'
                    value={value}
                    onChange={(e) => handleInputChange(index, e)}
                    className='bg-black-400 border-black-300 placeholder:text-white-900 text-white-500 h-[48px] w-[48px] rounded-2xl border text-center text-base font-medium'
                    ref={inputRefs.current?.[index]}
                  />
                ))}
              </div>
              <p className='text-white-500 text-sm underline'>Resend code</p>
            </div>
          </div>
          <div className='flex items-center gap-x-2'>
            <Button
              variant='secondary'
              size='base'
              disabled={false}
              className='bg-black-400'
            >
              Back
            </Button>
            <Button variant='secondary' size='base' disabled={false}>
              Continue
            </Button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Verify;
//     }
//   };

//   return (
//     <section className='bg-blackish flex min-h-screen w-full items-center justify-center pb-[174px]'>
//       <section className='flex w-[384px] flex-col items-stretch gap-y-16'>
//         <div className='flex flex-col items-stretch gap-y-8'>
//           <div className='flex flex-col items-stretch gap-y-12'>
//             <div className='flex flex-col items-stretch gap-y-2'>
//               <h2 className='text-white-500 text-center text-[32px] font-medium leading-none -tracking-[1.28px]'>
//                 Verify
//               </h2>
//               <p className='text-black-100 text-center text-base leading-5 '>
//                 Enter the code we&apos;ve sent to <span className='text-white-500'>+1 123-456-7890</span>.
//               </p>
//             </div>
//             <div className='flex flex-col space-y-4 items-center'>
//               <div className='flex items-center space-x-2'>
//                 {inputValues.map((value, index) => (
//                   <input
//                     key={index}
//                     type='text'
//                     maxLength={1}
//                     placeholder='0'
//                     value={value}
//                     onChange={(e) => handleInputChange(index, e)}
//                     className='w-[48px] h-[48px] rounded-2xl bg-black-400 text-base font-medium text-center border border-black-300 placeholder:text-white-900 text-white-900'
//                     ref={inputRefs[index]}
//                   />
//                 ))}
//               </div>
//               <p className='text-white-500 text-sm underline'>Resend code</p>
//             </div>
//           </div>
//           <div className='flex items-center gap-x-2'>
//             <Button
//               variant='secondary'
//               size='base'
//               disabled={false}
//               className='bg-black-400'
//             >
//               Back
//             </Button>
//             <Button
//               variant='secondary'
//               size='base'
//               disabled={false}
//             >
//               Continue
//             </Button>

//           </div>
//         </div>
//       </section>
//     </section>
//   )
// }

// export default Verify
