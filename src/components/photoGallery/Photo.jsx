/**
 * @file Photo.jsx
 * @module Photo
 * @desc React component for displaying an individual photo with a lazy loading feature and an animation effect when it comes into view.
 * This component uses Framer Motion for animations and LazyLoad for optimizing image loading.
 * 
 * @note This component is part of the photo gallery feature of the application.
 *
 * @component Photo
 * 
 * @requires react
 * @requires useRef, useEffect from 'react'
 * @requires LazyLoad from 'react-lazy-load'
 * @requires ImageComponent from '../../wrappers/ImageComponent'
 * @requires framer-motion
 * 
 * @see {@link https://react.dev/ | React Documentation}
 * @see {@link https://www.framer.com/docs/ | Framer Motion Documentation}
 * @see {@link https://github.com/twobin/react-lazyload | React LazyLoad Documentation}
 * 
 * @param {Object} item - The photo item to be displayed.
 * @param {number} index - The index of the photo item.
 * @param {function} openModal - Function to open the modal for the photo.
 * 
 * @returns {JSX.Element} The Photo component that displays an individual photo with lazy loading and animation.
 * 
 * @example
 * // Example usage of Photo in a parent component
 * import Photo from './Photo';
 * 
 * <Photo 
 *   item={photoItem} 
 *   index={index} 
 *   openModal={openModalFunction}
 * />
 * 
 * @exports Photo
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-28
 */

import React, { useRef, useEffect } from 'react';
import LazyLoad from 'react-lazy-load';
import ImageComponent from '../../wrappers/ImageComponent';
import { motion, useAnimation, useInView } from 'framer-motion';

const photoVariants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

function Photo({ item, index, openModal }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -200px 0px' });

  // Start the animation when the photo comes into view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      key={index}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={photoVariants}
    >
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
    </motion.div>
  );
}

export default Photo;
