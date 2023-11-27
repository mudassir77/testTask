'use client';

import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { cn } from '@/lib/utils';

interface ModalWrapperProps {
  children: React.ReactNode;
  id?: string;
  className: string;
}

const ModalWrapper = ({ children, id, className }: ModalWrapperProps) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <div
        className='modalScreenIsOpen absolute inset-0 z-[1000000] flex max-h-screen min-h-screen items-center justify-center backdrop-blur-[3px]'
        id={id}
      >
        <div className={cn('rounded-lg border', className)}>{children}</div>
      </div>
    </FormProvider>
  );
};

export default React.memo(ModalWrapper);
