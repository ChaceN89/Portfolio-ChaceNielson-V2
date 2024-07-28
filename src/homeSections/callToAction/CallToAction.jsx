/**
 * @file CallToAction.jsx
 * @module CallToAction
 * @desc React component that implements a call-to-action section with a parallax effect.
 * This component uses the framer-motion library to create a smooth scrolling effect
 * and adjusts the layout based on window size.
 *
 * @component CallToAction
 * 
 * @requires react
 * @requires useState, useEffect from 'react'
 * @requires motion, useScroll, useTransform from 'framer-motion'
 * @requires BackgroundWrapper from '../../wrappers/BackgroundWrapper'
 * @requires InnerCallToAction from './InnerCallToAction'
 * @requires ScrollWheel from '../../components/uiElements/ScrollWheel'
 * @requires globals from '../../data/globals'
 * @requires './CallToAction.css'
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * @see {@link https://www.framer.com/motion/ | Framer Motion Documentation}
 * 
 * @example
 * // Example usage of CallToAction component
 * import CallToAction from './CallToAction';
 * 
 * function App() {
 *   return (
 *     <div className="App">
 *       <CallToAction />
 *     </div>
 *   );
 * }
 * 
 * @exports CallToAction
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-28
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// components
import BackgroundWrapper from '../../wrappers/BackgroundWrapper';
import InnerCallToAction from './InnerCallToAction';
import ScrollWheel from '../../components/uiElements/ScrollWheel';

// data and styles
import { globals } from '../../data/globals';
import './CallToAction.css';

function CallToAction() {
  const { scrollY } = useScroll(); // Get the current scroll position
  const [isParallaxEnabled, setIsParallaxEnabled] = useState(true);

  // Function to check the window size
  const checkWindowSize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    if (width < 800 || height < 600) {
      setIsParallaxEnabled(false);
    } else {
      setIsParallaxEnabled(true);
    }
  };

  useEffect(() => {
    // Check window size on initial render
    checkWindowSize();
    // Add event listener to check window size on resize
    window.addEventListener('resize', checkWindowSize);
    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', checkWindowSize);
  }, []);

  // Map the scroll position to the translation values using useTransform
  const y = useTransform(scrollY, globals.parallaxConfigCallToAction.scrollRange, globals.parallaxConfigCallToAction.translateYRange);

  return (
    <BackgroundWrapper
      id="CallToAction"
      className="call-to-action-wrapper"
      src={process.env.PUBLIC_URL + "/png-backgrounds/detailed/range-b&w2-trim.png"}
      lowResSrc={process.env.PUBLIC_URL + "/png-backgrounds/detailed/range-b&w2-trim-small.png"}
      bgOpacity={40}
    >
      {isParallaxEnabled ? (
        <motion.div 
          className='z-10'
          style={{ y }} // Apply the parallax effect to this element
        >
          <InnerCallToAction />
        </motion.div>
      ) : (
        <div className='z-10'>
          <InnerCallToAction />
        </div>
      )}
      <ScrollWheel to="AboutMe" />
    </BackgroundWrapper>
  );
}

export default CallToAction;
