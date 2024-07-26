import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const variants = {
  hidden: { opacity: 0, x: -200 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 200 },
};

const SlideTransition = ({ children }) => {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname} // This ensures the transition happens on every route change
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: 'linear' }}
    >
      {children}
    </motion.div>
  );
};

export default SlideTransition;
