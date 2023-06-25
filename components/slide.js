import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import useBreakpoint from '../hooks/useBreakpoint';
import imageUrlBuilder from '@sanity/image-url';

export default function Slide({ pet }) {
  const handleClick = () => {
    console.log(`Button clicked for ${pet.title}`);
  };

  const [imageUrl, setImageUrl] = useState('');
  const breakpoint = useBreakpoint();

  useEffect(() => {
    const builder = imageUrlBuilder({
      projectId: 'assvtyt4',
      dataset: 'production',
      apiVersion: '2021-09-01', // or whichever version you're using
      useCdn: true // set this to true if you want to enable the Content Delivery Network
    });

    let image;
    if (breakpoint === 'xl') {
      image = pet.photo;
    } else {
      image = pet.secondPhoto;
    }

    setImageUrl(builder.image(image).auto('format').url());
  }, [breakpoint, pet]);

  return (
    <div className='relative lg:mt-[7.5rem] md:mt-[0rem] sm:mt-[0rem] mt-[4.5rem]'>
      <Image alt='kickz' src={imageUrl} width={2000} height={2000} objectFit="contain" />
      <div className='absolute bg-white lg:top-1/2 lg:left-1/4 transform lg:-translate-x-1/2 lg:-translate-y-1/2 md:top-1/1 md:left-1/2  md:-translate-x-1/2 md:-translate-y-1/2 sm:top-1/1 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 top-1/1 left-1/2   -translate-x-1/2  -translate-y-1/2 xl:w-[30rem] lg:w-[30rem] md:w-[53rem] sm:w-[40rem] w-[22rem] '>
        <div className='p-4 sm:p-6 md:p-6 xl:w-[25rem] lg:w-[23rem] md:w-[50rem] mx-auto   sm:w-[40rem] w-[20rem] lg:flex flex-col  lg:px-[0rem] lg:py-8 md:px-4'>
          <p className='text-sm text-gray-600 mb-2'>{pet?.title}</p>
          <h1 className='font-mono text-xl mb-4'>{pet?.main}</h1>
          <p className='text-[15px] text-gray-600 mb-4 '>
            {pet?.description}
          </p>
          {pet.button && (
            <button
              className='bg-black text-white px-8 py-3 hover:bg-[#1f1f1f]'
              onClick={handleClick}
            >
              {pet.button.text}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
