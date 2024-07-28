import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import ImageComponent from '../../wrappers/ImageComponent';
import { galleryPhotos } from '../../data/pageData/galleryData';
import LazyLoad from 'react-lazy-load';
import { useMediaQuery } from 'react-responsive';

Modal.setAppElement('#root'); // This is to avoid screen reader issues

export default function GalleryPhotos() {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [direction, setDirection] = useState(0);
  const isLargeScreen = useMediaQuery({ query: '(min-width: 640px)' }); // Tailwind's sm breakpoint is 640px

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      } else if (event.key === 'ArrowRight') {
        nextPhoto();
      } else if (event.key === 'ArrowLeft') {
        prevPhoto();
      }
    };

    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  const openModal = (index) => {
    if (isLargeScreen) {
      setActivePhotoIndex(index);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActivePhotoIndex(0);
  };

  const nextPhoto = () => {
    setDirection(1);
    setActivePhotoIndex((prevIndex) => (prevIndex + 1) % galleryPhotos.length);
  };

  const prevPhoto = () => {
    setDirection(-1);
    setActivePhotoIndex((prevIndex) => (prevIndex - 1 + galleryPhotos.length) % galleryPhotos.length);
  };

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        x: direction > 0 ? -1000 : 1000,
        opacity: 0
      };
    }
  };

  return (
    <div className='gallery p-4 md:p-6 text-center relative'>
      {galleryPhotos.map((item, index) => (
        <div key={index} className='py-2'>
          <div className='flex flex-col max-w-full'>
            <LazyLoad height={300} offsetVertical={300}>
              <div 
                className='relative hover:opacity-70' 
                style={{ height: '300px', width: '100%' }}
                onClick={() => openModal(index)}
              >
                <ImageComponent
                  src={`${process.env.PUBLIC_URL}/gallery-photos/${item.photo}`}
                  alt={`Photo ${index + 1}`}
                  className='object-cover w-full h-full rounded-sm sm:cursor-pointer'
                  blurHash={item.blurhash}
                />
              </div>
            </LazyLoad>
          </div>
        </div>
      ))}

      {isLargeScreen && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Photo Modal"
          className="flex items-center justify-center outline-none"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-30 flex items-center justify-center"
        >
          <div className='relative z-35 h-120 min-w-[34rem] w-full bg-secondary p-10 rounded'>
            <button
              onClick={closeModal}
              className='absolute top-0 right-0 p-2 text-primary hover:text-accent transition-transform transform hover:scale-110'
            >
              <FaTimes size={24} />
            </button>
            <button
              onClick={prevPhoto}
              className='absolute left-0 top-1/2 transform -translate-y-1/2 p-2 text-primary hover:text-accent transition-transform hover:scale-110'
            >
              <FaArrowLeft size={24} />
            </button>
            <div className='relative w-full h-full overflow-hidden'>
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={activePhotoIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  className='absolute top-0 left-0 w-full h-full'
                >
                  <ImageComponent
                    src={`${process.env.PUBLIC_URL}/gallery-photos/${galleryPhotos[activePhotoIndex].photo}`}
                    alt={`Photo ${activePhotoIndex + 1}`}
                    className='object-cover w-full  rounded-sm'
                    blurHash={galleryPhotos[activePhotoIndex].blurhash}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <button
              onClick={nextPhoto}
              className='absolute right-0 top-1/2 transform -translate-y-1/2 p-2 text-primary hover:text-accent transition-transform hover:scale-110'
            >
              <FaArrowRight size={24} />
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}
