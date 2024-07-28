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
 * @created 2024-07-28
 * @updated 2024-07-28
 */

/**
 * Global settings object
 * @type {Object}
 * @property {Object} ScrollLink - Configuration settings for react-scroll ScrollLink component.
 * @property {number} ScrollLink.duration - The duration of the scroll animation in milliseconds.
 * @property {number} ScrollLink.offset - The offset to account for fixed headers, etc.
 */
export const globals = {
  ScrollLink:{
    duration: 1000, // Duration of the scroll animation in milliseconds
    offset: -70 // Offset to account for fixed headers
  }
}

// more globals here as they come up
