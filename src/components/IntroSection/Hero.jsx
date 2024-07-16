import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/Hero.css'; 

function Hero() {

  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
        delay: 2,
      },
    },
  };

  return (
    <section className="section-wrapper-height relative hero">
      <motion.div
        className="sliding-text-container"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Code. Create. Innovate. {"  "}
      </motion.div>

      {/* Other content remains commented out for now */}
      {/* <div className="absolute inset-0 z-0 text-white">
        <motion.div
          className="absolute "
          // initial={{ x: '-100%' }}
          // animate={{ x: '100%' }}
          // transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        >
          Code. Create. Innovate.
        </motion.div>
      </div> */}

      {/* <div className="wrapper max-w-[1366px] h-full mx-auto flex items-center">
        
        <div className="textContainer w-1/2 flex flex-col justify-center gap-10 p-4">
          <h2>Welcome</h2>
          <h1>CHACE NIELSON</h1>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquam exercitationem commodi excepturi neque minus.</h3>
          <div className="buttons flex justify-center md:justify-start">
            <button className="p-5 border border-white rounded-lg bg-transparent text-white mr-5 cursor-pointer font-light">My Projects</button>
            <button className="p-5 border border-white rounded-lg bg-transparent text-white cursor-pointer font-light">Let's work Together</button>
          </div>
        </div>


        <div >
          <ImageComponent
            src={`${process.env.PUBLIC_URL}/logos/chace1.png`}
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="imageContainer relative w-1/2 h-full">
          <motion.img
            src={`${process.env.PUBLIC_URL}/logos/chace1.png`}
            alt="Hero"
            className="w-full h-full object-cover"
 
          />
        </div>

      </div>

      <div className="scrollIcon absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <img src={`${process.env.PUBLIC_URL}/logos/scroll.png`} alt="Scroll" className="w-8 h-8" />
      </div> */}

    </section>
  );
}

export default Hero;
