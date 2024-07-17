import React from 'react';
import { motion } from 'framer-motion';
import ImageComponent from '../resuableComponents/ImageComponent';
import '../../styles/Hero.css';
import { Link as ScrollLink } from 'react-scroll';
import { globals } from '../../googleAnalytics/globals';

function Hero() {
  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-2000%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 180,
        ease: "linear",
        delay: 0,
      },
    },
  };

  const bounceProps = {
    initial: { y: 0 }, // Initial position in the middle of the screen
    animate: { y: [0, -10, 0] }, // Keyframes for the bouncing effect
    transition: {
      duration: 2, // Duration of the animation
      times: [0, 0.5, 1], // Timing for each keyframe
      repeat: Infinity, // Repeat the animation indefinitely
      repeatDelay: 1, // Delay before repeating the animation
      ease: 'easeInOut', // Easing function
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
        &nbsp;&nbsp; Code. Create. Innovate. Code. Create. Innovate. Code. Create. Innovate. Code. Create. Innovate. Code. Create. Innovate. Code. Create. Innovate. Code. Create. Innovate. Code. Create. Innovate.
      </motion.div>

      <div className="w-full h-full flex justify-center items-end absolute inset-0">
        <motion.div
          className="mb-4"
          {...bounceProps}
        >
          <ScrollLink
            className="hover:cursor-pointer"
            to="CallToAction"
            spy={true}
            smooth={true}
            offset={globals.ScrollLink.offset}  // Adjust this offset based on your fixed navbar height
            duration={globals.ScrollLink.duration}
          >
            <ImageComponent
              src={`${process.env.PUBLIC_URL}/logos/scroll.png`}
              alt="Scroll"
              className="h-7 sm:h-10 md:h-12 lg:h-14 xl:h-16"
            />
          </ScrollLink>
        </motion.div>
      </div>


      <div className="grid grid-cols-2 h-full">
        <div className="flex flex-col justify-center gap-10 p-4 ">
          <h3>Hi my name is</h3>
          <h1>CHACE NIELSON</h1>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquam exercitationem commodi excepturi neque minus.</h3>
          <div className="buttons flex justify-center md:justify-start">
            <button className="p-5 border border-white rounded-lg bg-transparent text-white mr-5 cursor-pointer font-light">My Projects</button>
            <button className="p-5 border border-white rounded-lg bg-transparent text-white cursor-pointer font-light">Let's work Together</button>
          </div>
        </div>
        <div className="flex items-end h-full">
          <ImageComponent src={`${process.env.PUBLIC_URL}/logos/chace2.png`} alt="Hero" className="w-full max-h-3/4 object-contain" />
        </div>
      </div>




    </section>
  );
}

export default Hero;
