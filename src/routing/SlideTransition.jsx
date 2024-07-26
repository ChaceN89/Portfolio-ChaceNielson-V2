import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const SlideTransition = ({ 
  children,
  enter = 'left', 
  exit = 'left', 
  duration = 0.3, 
  delay = 0.1, 
  translationDist = 100  
}) => {

  // get the location
  const location = useLocation();

  // set the x-axis translation distance
  const movX = translationDist;

  // set the variants for the animation for when the component is hidden, entering, and exiting
  const variants = {
    hidden: { opacity: 0, x: enter === 'left' ? -1 * movX : movX },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: exit === 'left' ? -1 * movX : movX }, // Adjusted the exit position
  };

  // set the transition for the animation
  const transition = {
    type: 'tween', 
    duration: duration,
    ease: 'easeInOut', // options: easeIn, easeOut, easeInOut
    delay: delay,
  };


  // return the SlideTransition Wrapper
  return (
    <motion.div
      key={location.pathname}
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default SlideTransition;
