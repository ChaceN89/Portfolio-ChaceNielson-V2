/**
 * @file MediaLinks.jsx
 * @module MediaLinks
 * @desc Component representing a list of social media links with icons.
 * Each icon is wrapped with a Tooltip component for displaying the name of the social media platform.
 * The icon size adjusts based on the screen size.
 * 
 * @component MediaLinks
 * 
 * @requires react
 * @requires useMediaQuery from 'react-responsive'
 * @requires Tooltip from '../uiElements/Tooltip'
 * @requires IconSkills from '../../data/iconSkills'
 * 
 * @see {@link https://react.dev/ | React Documentation}
 * @see {@link https://github.com/contra/react-responsive | React Responsive Documentation}
 * 
 * @param none
 * 
 * @returns {JSX.Element} The MediaLinks component that displays social media icons with tooltips.
 * 
 * @example
 * // Example usage of MediaLinks in a footer component
 * import MediaLinks from '../components/footer/MediaLinks';
 * 
 * function Footer() {
 *   return (
 *     <footer className="footer">
 *       <MediaLinks />
 *     </footer>
 *   );
 * }
 * 
 * @exports MediaLinks
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-28
 */

import React from 'react';
import Tooltip from '../uiElements/Tooltip';
import { useMediaQuery } from 'react-responsive';
import IconSkills from '../../data/iconSkills';

function MediaLinks() {
  const isMediumScreen = useMediaQuery({ query: '(min-width: 768px)' });

  const mediaLinks = [
    { name: "GitHub", icon: IconSkills.GITHUB.icon, link: "https://github.com/ChaceN89" },
    { name: "YouTube", icon: IconSkills.YOUTUBE.icon, link: "https://www.youtube.com/@chacenielson5413" },
    { name: "Instagram", icon: IconSkills.INSTAGRAM.icon, link: "https://www.instagram.com/chacenielson" },
    { name: "LinkedIn", icon: IconSkills.LINKEDIN.icon, link: "https://www.linkedin.com/in/chace-nielson" }
  ];

  const iconSize = isMediumScreen ? 28 : 20;

  return (
    <div className="flex justify-center space-x-0.5 relative">
      {mediaLinks.map((link) => (
        <Tooltip key={link.name} text={link.name}>
          <a
            href={link.link}
            aria-label={link.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center justify-center 
              w-8 h-8 md:w-12 md:h-12 rounded-full 
              button-secondary"
            >
              <link.icon size={iconSize} className="" />
            </div>
          </a>
        </Tooltip>
      ))}
    </div>
  );
}

export default MediaLinks;
