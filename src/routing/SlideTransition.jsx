import React from 'react';
import { delay, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const SlideTransition = ({ children, enter = 'left', exit = 'left', delay  }) => {
  const location = useLocation();

  const variants = {
    hidden: { opacity: 0, x: enter === 'left' ? -200 : 200 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: exit === 'left' ? -200 : 200 }, // Adjusted the exit position
  };

  const transition = {
    type: 'tween', 
    duration: 0.4,
    ease: 'easeInOut',
    delay: 0.1,
  };


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
