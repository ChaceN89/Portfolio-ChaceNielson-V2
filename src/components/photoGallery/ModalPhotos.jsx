import React from 'react'
import ImageComponent from '../../wrappers/ImageComponent';
import Modal from 'react-modal';
import { galleryPhotos } from '../../data/pageData/galleryData';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion';



Modal.setAppElement('#root'); // This is to avoid screen reader issues


function ModalPhotos({isModalOpen, closeModal, activePhotoIndex, nextPhoto, prevPhoto, direction}) {

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        x: direction > 0 ? -1000 : 1000,
        opacity: 0,
      };
    },
  };

  return (
    <Modal
    isOpen={isModalOpen}
    onRequestClose={closeModal}
    contentLabel="Photo Modal"
    className="flex items-center justify-center outline-none pt-12"
    overlayClassName="fixed inset-0 bg-black bg-opacity-70 z-30 flex items-center justify-center"
  >
    <div className='relative z-35 max-h-section-height h-120 min-w-[34rem] w-full bg-secondary p-10 rounded'>
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
              className='object-cover w-full rounded-sm'
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

  )
}

export default ModalPhotos