import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/Hero.css'; // Import the CSS file for additional styles

function Hero() {
  return (
    <section className="section-wrapper-height relative">
      <div className="absolute inset-0 z-0 slidingTextContainer">
        <motion.div
          className="absolute text-[50vh] bottom-[-120px] whitespace-nowrap text-[#ffffff09] w-1/2 font-bold"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        >
          Code. Create. Innovate.
        </motion.div>
      </div>
      <div className="wrapper max-w-[1366px] h-full mx-auto flex items-center">
        <div className="textContainer w-1/2 flex flex-col justify-center gap-10 p-4">
          <h2 >Welcome</h2>
          <h1 >CHACE NIELSON</h1>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquam exercitationem commodi excepturi neque minus.</h3>
          <div className="buttons">
            <button className="p-5 border border-white rounded-lg bg-transparent text-white cursor-pointer font-light">
              Button
            </button>
          </div>
        </div>
        <div className="imageContainer relative w-1/2 h-full">
          <motion.img
            src={`${process.env.PUBLIC_URL}/logos/chace1.png`}
            alt="Hero"
            className="w-full h-full object-cover"
            initial={{ y: -30 }}
            animate={{ y: 30 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
          />
        </div>
      </div>
      <div className="scrollIcon absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <img src={`${process.env.PUBLIC_URL}/logos/scroll.png`} alt="Scroll" className="w-8 h-8" />
      </div>
    </section>
  );
}

export default Hero;
