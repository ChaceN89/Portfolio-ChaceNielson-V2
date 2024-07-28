/**
 * @file ScrollWheel.jsx
 * @module ScrollWheel
 * @desc React component that displays a scroll button to navigate to the next section.
 * The button bounces and fades in, and is hidden on smaller screens.
 * 
 * @component ScrollWheel
 * 
 * @param {Object} props - The component props.
 * @param {string} [props.to="CallToAction"] - The target section to scroll to.
 * 
 * @requires react
 * @requires framer-motion { motion }
 * @requires globals from '../../data/globals'
 * @requires react-scroll { Link as ScrollLink }
 * @requires ImageComponent from '../../wrappers/ImageComponent'
 * 
 * @see {@link https://react.dev/ | React Documentation}
 * @see {@link https://www.framer.com/docs/ | Framer Motion Documentation}
 * @see {@link https://www.npmjs.com/package/react-scroll | React Scroll Documentation}
 * 
 * @returns {JSX.Element} The ScrollWheel button component that scrolls to the next section.
 * 
 * @example
 * // Example usage of ScrollWheel component
 * import ScrollWheel from './ScrollWheel';
 * 
 * function Section() {
 *   return (
 *     <div className="section">
 *       // Other content
 *       <ScrollWheel to="NextSection" />
 *     </div>
 *   );
 * }
 * 
 * @exports ScrollWheel
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-28
 */

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
    <div className="hidden absolute inset-0 z-5 md:flex justify-center items-end">
      {/* Transparent background */}
      <div className="absolute inset-0 z-0 bg-secondary opacity-0" />
      
      {/* Scroll button content */}
      <motion.div className="mb-4 z-10" {...fadeInProps}>
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
              className="h-12 lg:h-14 xl:h-16 hover:scale-110 opacity-45 hover:opacity-75 cursor-s-resize"
            />
          </ScrollLink>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ScrollWheel;
