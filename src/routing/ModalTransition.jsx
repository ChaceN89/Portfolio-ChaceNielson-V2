import React from 'react';
import { motion } from 'framer-motion';

const modalVariants = {
  hidden: { opacity: 0, x: '100%' },
  visible: { opacity: 1, x: '0%' },
  exit: { opacity: 0, x: '100%' },
};

const ModalTransition = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={modalVariants}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}

    >
      {children}
    </motion.div>
  );
};

export default ModalTransition;
