'use client';

import { ChevronsUpDown } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useCallback, useState } from 'react';
import { Controller } from 'react-hook-form';
import * as Yup from 'yup';

import { useFormWithSchema } from '@/hooks';

import Button from '@/components/buttons/Button';
import TextInput from '@/components/inputs/TextInput';
import PositionModal from '@/components/modals/PositionModal';

const SignupValidationSchema = Yup.object({
  firstName: Yup.string().required('First name is required.').min(2),
  lastName: Yup.string().required('Last name is required.').min(2),
  position: Yup.string(),
});

const initialValues = {
  firstName: '',
  lastName: '',
  position: '',
};

const SignupPage = () => {
  const router = useRouter();

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useFormWithSchema(SignupValidationSchema);

  const [isPositionModalOpen, setIsPositionModalOpen] =
    useState<boolean>(false);

  const [selectedPosition, setSelectedPosition] = useState<string>();

  const onSubmit = useCallback(() => {
    router.push('/auth/upload-profile-picture');
  }, [router]);

  const handlePositionSelection = useCallback((flag: boolean) => {
    setIsPositionModalOpen(flag);
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
                    <Controller
                      render={({
                        field: { onChange, onBlur, value, name },
                      }) => {
                        return (
                          <TextInput
                            name={name}
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            placeholder='First Name'
                            error={errors?.firstName?.message}
                          />
                        );
                      }}
                      name='firstName'
                      control={control}
                      defaultValue={initialValues.firstName}
                    />
                    <Controller
                      render={({
                        field: { onChange, onBlur, value, name },
                      }) => {
                        return (
                          <TextInput
                            name={name}
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            placeholder='Last Name'
                            error={errors?.lastName?.message}
                          />
                        );
                      }}
                      name='lastName'
                      control={control}
                      defaultValue={initialValues.firstName}
                    />
                  </div>

                  <div className='relative'>
                    <Controller
                      render={({
                        field: { onChange, onBlur, value, name },
                      }) => {
                        return (
                          <TextInput
                            name={name}
                            value={selectedPosition || value}
                            onChange={onChange}
                            onBlur={onBlur}
                            placeholder='Position'
                            leftIcon={
                              <ChevronsUpDown
                                onClick={() => handlePositionSelection(true)}
                                className='text-white-500 w-6 cursor-pointer'
                              />
                            }
                          />
                        );
                      }}
                      name='position'
                      control={control}
                      defaultValue={initialValues.firstName}
                    />
                  </div>
                </div>
              </div>
              <Button
                type='submit'
                variant='secondary'
                size='base'
                disabled={
                  !!errors.firstName || !!errors.lastName || !selectedPosition
                }
              >
                Continue
              </Button>
            </div>
          </section>
        </section>
      </form>

      {isPositionModalOpen && (
        <PositionModal
          setSelectedPosition={setSelectedPosition}
          onClose={() => handlePositionSelection(false)}
        />
      )}
    </>
  );
};

export default SignupPage;
