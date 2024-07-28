import React, { useState, useEffect, useRef } from 'react';
import {useAnimation, useInView } from 'framer-motion';
import { galleryPhotos } from '../../data/pageData/galleryData';
import LazyLoad from 'react-lazy-load';
import { useMediaQuery } from 'react-responsive';
import Photo from './Photo';
import ModalPhotos from './ModalPhotos';



const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

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


  return (
    <div
 
      className='gallery px-4 md:px-6 py-2 text-center relative'
      initial="hidden"
      variants={sectionVariants}
    >
      {galleryPhotos.map((item, index) => (
       <Photo key={index} item={item} index={index} openModal={openModal} />
      ))}

      {isLargeScreen && (
        <ModalPhotos 
          isModalOpen={isModalOpen} 
          closeModal={closeModal} 
          activePhotoIndex={activePhotoIndex} 
          nextPhoto={nextPhoto} 
          prevPhoto={prevPhoto} 
          direction={direction}
        />
      )}
    </div>
  );
}
