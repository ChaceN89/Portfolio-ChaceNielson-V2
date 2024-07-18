import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../resuableComponents/Button';
import { homePageData } from '../../data/homePageData';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

function HeroText() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <motion.div
      className="text-container z-10 px-2"
      variants={textVariants}
      initial="initial"
      animate="animate"
      style={{ y }}
    >
      <motion.div variants={textVariants}>
        <motion.h3 variants={textVariants}>{homePageData.top}</motion.h3>
        <motion.h1 variants={textVariants} className="pb-2">{homePageData.name}</motion.h1>
        <motion.div variants={textVariants} className="pb-4">{homePageData.description}</motion.div>
        <motion.div variants={textVariants} className="text-buttons">
          {homePageData.buttons.map((button) => (
            <motion.div key={button.id} variants={textVariants}>
              <Button to={button.id}>
                {button.name}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default HeroText;
