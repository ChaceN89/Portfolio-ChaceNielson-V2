import React from 'react';
import IntroImages from './IntroImages';
import IntroText from './IntroText';
import MediaLinks from '../resuableComponents/MediaLinks';
import { motion } from 'framer-motion';
import '../../styles/Hero.css'; // Import the CSS file for other styles

const textVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1 } }
};

const imageVariants = {
  hidden: { width: 0 },
  visible: { width: '50%', transition: { duration: 1 } }
};

function Hero() {
  return (
    <div 
      id="Home" 
      className='container mx-auto flex flex-col md:flex-row justify-center items-center h-screen'
    >
      <div 
        className="relative z-10 flex flex-col justify-center items-start w-1/2 p-4"
      >
        <IntroText />

        <div className='flex justify-start w-full mt-4'>
          <MediaLinks />
        </div>
        
        <div className='mt-4'>
          <button className='animated-border-button border-t border-b border-white p-2'>Lets Work Together</button>
        </div>
      </div>

      <div className="relative z-10 flex justify-end items-center"
      >
        <img src={process.env.PUBLIC_URL + '/logos/mountain_portrait.jpg'} alt="Mountain Portrait" className="h-full object-cover" />
      </div>
    </div>
  );
}

export default Hero;
