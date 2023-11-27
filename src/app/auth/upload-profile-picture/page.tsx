'use client';

import { useRouter } from 'next/navigation';
import React, { useCallback, useRef, useState } from 'react';

import Button from '@/components/buttons/Button';
import ImageUpload from '@/components/uploads/ImageUpload';

/* eslint-disable @typescript-eslint/no-explicit-any */
const UploadProfilePicture = () => {
  const router = useRouter();

  const goBack = useCallback(() => {
    router.push('/auth/signup');
  }, [router]);

  const [selectedImage, setSelectedImage] = useState(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedImage(reader.result as any);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <section className='bg-blackish flex min-h-screen w-full items-center justify-center pb-[174px]'>
      <section className='flex w-[384px] flex-col items-stretch gap-y-16'>
        <div className='flex flex-col items-stretch gap-y-8'>
          <div className='flex flex-col items-center gap-y-12'>
            <div className='flex flex-col items-stretch gap-y-2'>
              <h2 className='text-white-500 text-center text-[32px] font-medium leading-none -tracking-[1.28px]'>
                Profile picture
              </h2>
              <p className='text-black-100 text-center text-base leading-5 '>
                Add a cool pic to be easily recognizable.
              </p>
            </div>

            <ImageUpload
              selectedImage={selectedImage}
              handleImageClick={handleImageClick}
              fileInputRef={fileInputRef}
              handleImageChange={handleImageChange}
            />
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
            <Button variant='secondary' size='base' disabled={!selectedImage}>
              Finish
            </Button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default UploadProfilePicture;
