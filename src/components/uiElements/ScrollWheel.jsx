import React from 'react';
import { motion } from 'framer-motion';
import { globals } from '../../data/globals';
import { Link as ScrollLink } from 'react-scroll';
import ImageComponent from '../../wrappers/ImageComponent';

function ScrollWheel({ to = "CallToAction" }) {
  const bounceProps = {
    initial: { y: 0 }, // Initial position in the middle of the screen
    animate: { y: [0, -20, 0] }, // Keyframes for the bouncing effect
    transition: {
      duration: 2, // Duration of the animation
      times: [0, 0.5, 1], // Timing for each keyframe
      repeat: Infinity, // Repeat the animation indefinitely
      repeatDelay: 1, // Delay before repeating the animation
      ease: 'easeInOut', // Easing function
    },
  };

  const fadeInProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay: 2, duration: 1 }, // 2-second delay and 1-second fade-in duration
  };

  return (
    <div className="absolute inset-0 z-5 flex justify-center items-end">
      
      {/* transparent background  */}
      <div className="absolute inset-0 z-0 bg-secondary opacity-0"/>
      
      {/* rest of content */}
      <motion.div  className="mb-4 z-10"  {...fadeInProps}  >
        <motion.div {...bounceProps}>
          <ScrollLink
            className="hover:cursor-pointer"
            to={to}
            spy={true}
            smooth={true}
            offset={globals.ScrollLink.offset}
            duration={globals.ScrollLink.duration}
          >
            <ImageComponent
              src={`${process.env.PUBLIC_URL}/png-icons/scroll.png`}
              alt="Scroll"
              className="h-12 lg:h-14 xl:h-16 hover:scale-110 opacity-45 hover:opacity-75"
            />
          </ScrollLink>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ScrollWheel;
