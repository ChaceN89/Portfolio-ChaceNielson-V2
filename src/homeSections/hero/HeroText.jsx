/**
 * @file HeroText.jsx
 * @module HeroText
 * @desc React component that displays the text content of the hero section.
 * The text includes a title, subtitle, and buttons, with an option to open a PDF.
 *
 * @component HeroText
 * 
 * @requires react
 * @requires motion, useScroll, useTransform from 'framer-motion'
 * @requires heroData from '../../data/pageData/heroData'
 * @requires MyButton from '../../components/uiElements/MyButton'
 * @requires openPdf from '../../functions/utils'
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * @see {@link https://www.framer.com/motion/ | Framer Motion Documentation}
 * 
 * @example
 * // Example usage of HeroText component
 * import HeroText from './HeroText';
 * 
 * function App() {
 *   return (
 *     <div className="App">
 *       <HeroText />
 *     </div>
 *   );
 * }
 * 
 * @exports HeroText
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-28
 */

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { heroData } from '../../data/pageData/heroData';
import MyButton from '../../components/uiElements/MyButton';
import { openPdf } from '../../functions/utils';

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
      style={{ y, willChange: 'transform' }}
    >
      <motion.div variants={textVariants}>
        <motion.h3 variants={textVariants} className="pl-2">
          {heroData.top}
        </motion.h3>
        <motion.h1 variants={textVariants} className="pb-2">
          {heroData.name}
        </motion.h1>
        <motion.div variants={textVariants} className="pb-4">
          {heroData.description}
        </motion.div>
        <motion.div variants={textVariants} className="text-buttons">
          {heroData.buttons.map((button) => (
            <motion.div key={button.id} variants={textVariants}>
              <MyButton
                className="w-full"
                to={button.id}
                onClick={button.pdf ? () => openPdf(button.pdf) : undefined}
              >
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
