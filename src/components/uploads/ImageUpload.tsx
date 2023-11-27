import Image from 'next/image';
import React from 'react';

import { APP_IMAGES } from '@/constant/images';

/* eslint-disable @typescript-eslint/no-explicit-any */
interface ImageUploadProps {
  selectedImage: string | null;
  handleImageClick: () => void;
  fileInputRef: any;
  handleImageChange: (e: any) => void;
}

const ImageUpload = ({
  selectedImage,
  handleImageClick,
  fileInputRef,
  handleImageChange,
}: ImageUploadProps) => {
  return (
    <>
      {!selectedImage && (
        <div
          onClick={handleImageClick}
          className='bg-black-400 flex h-32 w-32 cursor-pointer flex-col items-center justify-center space-y-4 rounded-full'
        >
          <Image
            src={APP_IMAGES.photo}
            width={200}
            height={200}
            className='h-6 w-6'
            alt='avatar'
          />
        </div>
      )}
      <input
        type='file'
        ref={fileInputRef}
        className='hidden'
        accept='image/*'
        onChange={handleImageChange}
      />
      {selectedImage && (
        <div>
          <Image
            src={selectedImage}
            onClick={handleImageClick}
            width={200}
            height={200}
            alt='Selected'
            className='h-32 w-32'
          />
        </div>
      )}
    </>
  );
};

export default React.memo(ImageUpload);
