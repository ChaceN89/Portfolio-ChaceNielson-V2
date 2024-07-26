import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const FadeTransition = ({ 
  children, 
  duration = 0.6, 
  delay = 0
}) => {

  // get the location
  const location = useLocation();

  // set the variants for the animation for when the component is hidden, entering, and exiting
  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  };

  // set the transition for the animation
  const transition = {
    type: 'tween', 
    duration: duration,
    ease: 'easeInOut', // options: easeIn, easeOut, easeInOut
    delay: delay,
  };

  // return the FadeTransition Wrapper
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

export default FadeTransition;
