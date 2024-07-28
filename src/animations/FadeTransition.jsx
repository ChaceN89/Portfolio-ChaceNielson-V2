/**
 * @file FadeTransition.jsx
 * @module FadeTransition
 * @desc React component that provides a fade transition effect for route changes.
 * This component uses the framer-motion library to create smooth transition animations.
 *
 * @component FadeTransition
 * 
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child elements to be rendered inside the fade transition.
 * @param {number} [props.duration=0.6] - The duration of the fade transition in seconds.
 * @param {number} [props.delay=0] - The delay before the transition starts in seconds.
 * 
 * @requires react
 * @requires motion from 'framer-motion'
 * @requires useLocation from 'react-router-dom'
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * @see {@link https://www.framer.com/motion/ | Framer Motion Documentation}
 * 
 * @example
 * // Example usage of FadeTransition component
 * import FadeTransition from './FadeTransition';
 * 
 * function App() {
 *   return (
 *     <FadeTransition duration={0.8} delay={0.2}>
 *       <div>Your content here</div>
 *     </FadeTransition>
 *   );
 * }
 * 
 * @exports FadeTransition
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-28
 */

import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const FadeTransition = ({ children, duration = 0.6, delay = 0 }) => {
  // Get the current location
  const location = useLocation();

  // Set the variants for the animation for when the component is hidden, entering, and exiting
  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  };

  // Set the transition for the animation
  const transition = {
    type: 'tween', 
    duration: duration,
    ease: 'easeInOut', // Options: easeIn, easeOut, easeInOut
    delay: delay,
  };

  // Return the FadeTransition Wrapper
  return (
    <motion.div
      key={location.pathname}
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default FadeTransition;
