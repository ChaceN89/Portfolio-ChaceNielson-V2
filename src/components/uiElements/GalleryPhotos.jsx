import React, { useState } from 'react';
import Modal from 'react-modal';
import ImageComponent from '../../wrappers/ImageComponent';
import { galleryPhotos } from '../../data/pageData/galleryData';
import LazyLoad from 'react-lazy-load';

Modal.setAppElement('#root'); // This is to avoid screen reader issues

export default function GalleryPhotos() {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index) => {
    setActivePhotoIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActivePhotoIndex(0);
  };

  const nextPhoto = () => {
    setActivePhotoIndex((prevIndex) => (prevIndex + 1) % galleryPhotos.length);
  };

  const prevPhoto = () => {
    setActivePhotoIndex((prevIndex) => (prevIndex - 1 + galleryPhotos.length) % galleryPhotos.length);
  };

  return (
    <div className='gallery p-4 md:p-6 text-center relative'>
      {galleryPhotos.map((item, index) => (
        <div key={index} className='py-2'>
          <div className='flex flex-col max-w-full'>
            <LazyLoad height={300} offsetVertical={300}>
              <div 
                className='relative' 
                style={{ height: '300px', width: '100%' }}
                onClick={() => openModal(index)}
              >
                <ImageComponent
                  src={`${process.env.PUBLIC_URL}/gallery-photos/${item.photo}`}
                  alt={`Photo ${index + 1}`}
                  className='object-cover w-full h-full rounded-sm cursor-pointer'
                  blurHash={item.blurhash}
                />
              </div>
            </LazyLoad>
          </div>
        </div>
      ))}

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Photo Modal"
        className="flex items-center justify-center outline-none "
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-30 flex items-center justify-center"
      >
        <div className='relative z-35 max-w-screen-lg w-full  h-114 min-w-96 bg-secondary p-10 rounded'>
          <button
            onClick={closeModal}
            className='absolute top-0 right-0 p-2 text-primary'
          >
            Close
          </button>
          <button
            onClick={prevPhoto}
            className='absolute left-0 top-1/2 transform -translate-y-1/2 p-2 text-primary'
          >
            &lt;
          </button>
          <div className='relative w-full h-full'>
            <ImageComponent
              src={`${process.env.PUBLIC_URL}/gallery-photos/${galleryPhotos[activePhotoIndex].photo}`}
              alt={`Photo ${activePhotoIndex + 1}`}
              className='object-cover w-full h-full rounded-sm'
              blurHash={galleryPhotos[activePhotoIndex].blurhash}
            />
          </div>
          <button
            onClick={nextPhoto}
            className='absolute right-0 top-1/2 transform -translate-y-1/2 p-2 text-primary'
          >
            &gt;
          </button>
        </div>
      </Modal>
    </div>
  );
}
