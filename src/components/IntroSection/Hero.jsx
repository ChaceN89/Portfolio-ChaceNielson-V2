import React from 'react';
import { motion } from 'framer-motion';
import ImageComponent from '../resuableComponents/ImageComponent';
import './Hero.css';
import { Link as ScrollLink } from 'react-scroll';
import { globals } from '../../googleAnalytics/globals';
import SlidingText from './SlidingText';
import ScrollWheel from './ScrollWheel';

function Hero() {
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



  

  return (
    <section className="section-wrapper-height relative hero">
      <SlidingText />
      <ScrollWheel />

      <div className="flex flex-col justify-center gap-1 p-4 border-4 border-pink-800 w-3/5 z-5">
        <h3 className='hover:bg-red-400'>Hi my name is</h3>
        <h1>CHACE NIELSON</h1>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquam exercitationem commodi excepturi neque minus.</h3>
        <div className="buttons flex justify-center md:justify-start">
          <ScrollLink 
            to="Projects"
            spy={true}
            smooth={true}
            offset={globals.ScrollLink.offset} 
            duration={globals.ScrollLink.duration}
            className="p-5 border border-white rounded-lg bg-transparent text-white mr-5 hover:cursor-pointer font-light"
          >
            My Projects</ScrollLink>
          <button className="p-5 border border-white rounded-lg bg-transparent text-white cursor-pointer font-light">Let's work Together</button>
        </div>
      </div>


      {/* <motion.div
        className="h-full "
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
      
        <motion.h3 variants={textVariants} >
          Hi my name is
        </motion.h3>
        <motion.h1 variants={textVariants} >
          CHACE NIELSON
        </motion.h1>
        <motion.h3 variants={textVariants} >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquam exercitationem commodi excepturi neque minus.
        </motion.h3>


        <motion.div variants={textVariants}  className="buttons flex justify-center md:justify-start">


          <ScrollLink
            className="hover:cursor-pointer p-5 border border-white rounded-lg bg-transparent text-white mr-5 cursor-pointer font-light"
            to="CallToAction"
            spy={true}
            smooth={true}
            offset={globals.ScrollLink.offset} 
            duration={globals.ScrollLink.duration}
          >
        <motion.div
          variants={textVariants} 
        >
            My Projects
        </motion.div>
          </ScrollLink>


          <motion.button 
            variants={textVariants}  
            className="p-5 border border-white rounded-lg bg-transparent text-white mr-5 cursor-pointer font-light"
          >
              My Projects
          </motion.button>
          <motion.button 
            variants={textVariants}  
            className="p-5 border border-white rounded-lg bg-transparent text-white cursor-pointer font-light"
          >
            Let's work Together
          </motion.button>
        </motion.div>

      </motion.div> */}



      <div className="h-full absolute top-0 right-0">
        <ImageComponent src={`${process.env.PUBLIC_URL}/logos/chace2.png`} alt="Hero" className="h-full w-full object-cover " />
      </div>
    </section>
  );
}

export default Hero;




<div className="flex flex-col justify-center gap-10 p-4 ">
  <h3>Hi my name is</h3>
  <h1>CHACE NIELSON</h1>
  <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquam exercitationem commodi excepturi neque minus.</h3>
  <div className="buttons flex justify-center md:justify-start">
    <button className="p-5 border border-white rounded-lg bg-transparent text-white mr-5 cursor-pointer font-light">My Projects</button>
    <button className="p-5 border border-white rounded-lg bg-transparent text-white cursor-pointer font-light">Let's work Together</button>
  </div>
  </div>