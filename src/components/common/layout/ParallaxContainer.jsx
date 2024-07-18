import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxContainer = ({ children, scrollRange, translateYRange, className }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, scrollRange, translateYRange);

  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

ParallaxContainer.defaultProps = {
  scrollRange: [0, 500, 1000],
  translateYRange: [-100, 0, 100],
};

export default ParallaxContainer;
