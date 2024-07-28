import React from 'react';
import ImageComponent from '../../wrappers/ImageComponent';
import { galleryPhotos } from '../../data/pageData/galleryPhotos';
import LazyLoad from 'react-lazy-load';

export default function GalleryPhotos() {
  return (
    <div className='gallery p-4 md:p-6 text-center'>
      {galleryPhotos.map((item, index) => (
        <div key={index} className='py-2'>
          <div className='flex flex-col max-w-full'>
            <LazyLoad height={350} offsetVertical={300}>
              <div className='relative' style={{ height: '350px', width: '100%' }}>
                <ImageComponent
                  src={`${process.env.PUBLIC_URL}/gallery-photos/${item.photo}`}
                  alt={`Photo ${index + 1}`}
                  className='object-cover w-full h-full rounded-sm'
                  blurHash={item.Blurhash}
                />
              </div>
            </LazyLoad>
          </div>
        </div>
      ))}
    </div>
  );
}
