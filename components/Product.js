import React from 'react';
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';

const builder = imageUrlBuilder({
  projectId: 'assvtyt4',
  dataset: 'production',
  apiVersion: '2021-09-01', // or whichever version you're using
  useCdn: false // set this to true if you want to enable the Content Delivery Network
});

function urlFor(source) {
  return builder.image(source);
}

export default function Product({ pet }) {
  return (
    
    <div className="mt-[10rem]">
      <div className="cursor-pointer">
        {pet.photo && (
          <Image
          width={600}
          height={600}
            className="h-auto "
            src={urlFor(pet.photo).url()}
            alt={pet.title}
          />
        )}
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2">{pet?.title}</h3>
          <p className="text-gray-600 mb-4">{pet?.description}</p>
          <p className="text-gray-600">{pet?.price} MNT</p>
        </div>
      </div>
    </div>
  );
}
