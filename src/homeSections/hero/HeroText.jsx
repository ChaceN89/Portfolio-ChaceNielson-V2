import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { homePageData } from '../../data/homePageData';

import MyButton from '../../components/uiElements/MyButton'

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
  const y = useTransform(scrollY, [0, 500], [0, 140]);

  return (
    <motion.div
      className="text-container"
      variants={textVariants}
      initial="initial"
      animate="animate"
      style={{ y }}
    >
      <motion.div variants={textVariants}>
        <motion.h3 variants={textVariants} className='pl-2'>{homePageData.top}</motion.h3>
        <motion.h1 variants={textVariants} className="pb-2">{homePageData.name}</motion.h1>
        <motion.div variants={textVariants} className="pb-4">{homePageData.description}</motion.div>
        <motion.div variants={textVariants} className="text-buttons">
          {homePageData.buttons.map((button) => (
            <motion.div key={button.id} variants={textVariants}>
              <MyButton to={button.id}>
                {button.name}
              </MyButton>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default HeroText;
