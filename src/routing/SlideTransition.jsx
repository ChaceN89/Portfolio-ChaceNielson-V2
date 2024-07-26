import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const SlideTransition = ({ children, enter = 'left', exit='left' }) => {
  const location = useLocation();

  const variants = {
    hidden: { opacity: 0, x: enter === 'left' ? -200 : 200 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: exit === 'left' ? -200 : 200 },
  };

  return (
    <motion.div
      key={location.pathname} // This ensures the transition happens on every route change
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: 'linear' }}
      // transition={{ type: 'spring', stiffness: 100, damping: 30 }}

    >
      {children}
    </motion.div>
  );
};

export default SlideTransition;
