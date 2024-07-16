import React from 'react';
import IntroText from './IntroText';
import MediaLinks from '../resuableComponents/MediaLinks';
import { motion } from 'framer-motion';
import '../../styles/Hero.css'; // Import the CSS file for other styles
import ImageComponent from '../resuableComponents/ImageComponent';

const textVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1 } }
};

const imageRevealVariants = {
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  visible: { clipPath: 'inset(0 0% 0 0)', transition: { duration: 1 } }
};

function Hero() {
  return (
    <section className="section-wrapper border-2 border-secondary">
        Hero

      {/* <motion.div
        className="relative z-10 flex flex-col justify-center items-start w-1/2 p-4"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <IntroText />

        <div className="flex justify-start w-full mt-4">
          <MediaLinks />
        </div>

        <div className="mt-4">
          <button className="animated-border-button border-t border-b border-white p-2">
            Let's Work Together
          </button>
        </div>
      </motion.div>

      <motion.div
        className="relative w-1/2 flex justify-center items-center"
        initial="hidden"
        animate="visible"
        variants={imageRevealVariants}
      >
        <ImageComponent
          className="w-full h-full"
          src={process.env.PUBLIC_URL + '/logos/mountain_portrait.jpg'}
          alt="Mountain Portrait"
        />
      </motion.div> */}
    </section>
  );
}

export default Hero;
