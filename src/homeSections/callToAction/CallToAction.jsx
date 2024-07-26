import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import BackgroundWrapper from '../../wrappers/BackgroundWrapper';
import InnerCallToAction from './InnerCallToAction';
import ScrollWheel from '../../components/uiElements/ScrollWheel';
import ReturnToTop from '../../components/uiElements/ReturnToTop';

// Define the scroll ranges and translation values for the parallax effect
const scrollStart = 0; // Start of the scroll range (0 pixels from the top of this section)
const scrollMiddle = window.innerHeight; // Middle of the scroll range (1x the window height)
const scrollEnd = 2 * window.innerHeight; // End of the scroll range (2x the window height)

// Define the translation values for the parallax effect
const translateStart = -100; // Move up by 300 pixels at the start
const translateMiddle = 0; // No movement in the middle
const translateEnd = 100; // Move down by 300 pixels at the end

// Configure the parallax effect with scroll ranges and translation values
const parallaxConfig = {
  scrollRange: [scrollStart, scrollMiddle, scrollEnd],
  translateYRange: [translateStart, translateMiddle, translateEnd],
};

function CallToAction() {
  const { scrollY } = useScroll(); // Get the current scroll position
  // Map the scroll position to the translation values using useTransform
  const y = useTransform(scrollY, parallaxConfig.scrollRange, parallaxConfig.translateYRange);

  return (
    <BackgroundWrapper
      id="CallToAction"
      className="h-section-height overflow-hidden relative flex items-center justify-center px-6"
      src={process.env.PUBLIC_URL + "/png-backgrounds/detailed/range-b&w2-trim.png"}
      lowResSrc={process.env.PUBLIC_URL + "/png-backgrounds/detailed/range-b&w2-trim-small.png"}
      backgroundSize='contain'
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
      backgroundAttachment='fixed'
      bgOpacity={40}
    >
      {/* Parallax container with motion.div */}
      <motion.div 
        className='z-10'
        style={{ y }} // Apply the parallax effect to this element
      >
        <InnerCallToAction />
      </motion.div>

      {/* ScrollWheel positioned absolutely within BackgroundWrapper */}
      <ScrollWheel to="AboutMe" />


      <ReturnToTop />
      
    </BackgroundWrapper>
  );
}

export default CallToAction;

