/**
 * @file globals.js
 * @module globals
 * @desc Contains global settings and constants used throughout the application.
 * This file serves as a central location for configuration values that may be needed in multiple places.
 * 
 * @exports globals - An object containing various global settings.
 * 
 * @example
 * // Example usage of globals in a component
 * import { globals } from './globals';
 * 
 * function SomeComponent() {
 *   return (
 *     <ScrollLink
 *       to="someSection"
 *       spy={true}
 *       smooth={true}
 *       duration={globals.ScrollLink.duration}
 *       offset={globals.ScrollLink.offset}
 *     >
 *       Scroll to Section
 *     </ScrollLink>
 *   );
 * }
 * 
 * @example
 * // Example usage of parallaxConfigCallToAction in a component
 * import { globals } from './globals';
 * import { motion, useScroll, useTransform } from 'framer-motion';
 * 
 * function CallToAction() {
 *   const { scrollY } = useScroll(); // Get the current scroll position
 *   const y = useTransform(scrollY, globals.parallaxConfigCallToAction.scrollRange, globals.parallaxConfigCallToAction.translateYRange);
 *   
 *   return (
 *     <motion.div style={{ y }}>
 *       <InnerCallToAction />
 *     </motion.div>
 *   );
 * }
 * 
 * @created 2024-07-28
 * @updated 2024-07-28
 */

// Parallax settings for Call to Action section
// Define the scroll ranges and translation values for the parallax effect
const scrollStart = 0; // Start of the scroll range (0 pixels from the top of this section)
const scrollMiddle = window.innerHeight; // Middle of the scroll range (1x the window height)
const scrollEnd = 2 * window.innerHeight; // End of the scroll range (2x the window height)

// Define the translation values for the parallax effect
const translateStart = -100; // Move up by 100 pixels at the start
const translateMiddle = 0; // No movement in the middle
const translateEnd = 100; // Move down by 100 pixels at the end

/**
 * Global settings object
 * @type {Object}
 * @property {Object} ScrollLink - Configuration settings for react-scroll ScrollLink component.
 * @property {number} ScrollLink.duration - The duration of the scroll animation in milliseconds.
 * @property {number} ScrollLink.offset - The offset to account for fixed headers, etc.
 * @property {Object} parallaxConfigCallToAction - Configuration settings for the parallax effect in the Call to Action section.
 * @property {number[]} parallaxConfigCallToAction.scrollRange - The scroll range values for the parallax effect.
 * @property {number[]} parallaxConfigCallToAction.translateYRange - The translation values for the parallax effect.
 */
export const globals = {
  ScrollLink:{
    duration: 1000, // Duration of the scroll animation in milliseconds
    offset: -70 // Offset to account for fixed headers
  },
  parallaxConfigCallToAction:{
    scrollRange: [scrollStart, scrollMiddle, scrollEnd], // Scroll range values
    translateYRange: [translateStart, translateMiddle, translateEnd], // Translation values for parallax effect
  },

  project: {
    slide:0.4,
    initialSlide:0.8

  }
}
