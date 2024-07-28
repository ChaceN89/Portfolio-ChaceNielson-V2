import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import BackgroundWrapper from '../../wrappers/BackgroundWrapper';
import InnerCallToAction from './InnerCallToAction';
import ScrollWheel from '../../components/uiElements/ScrollWheel';

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
  const y = useTransform(scrollY, parallaxConfig.scrollRange, parallaxConfig.translateYRange);

  return (
    <BackgroundWrapper
      id="CallToAction"
      className="md:h-section-height min-h-108 relative flex items-center justify-center "
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
