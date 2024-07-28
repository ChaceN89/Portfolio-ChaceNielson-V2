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
 * @requires react-icons/bs { BsYoutube, BsInstagram, BsLinkedin, BsGithub }
 * @requires useMediaQuery from 'react-responsive'
 * @requires Tooltip from '../uiElements/Tooltip'
 * 
 * @see {@link https://react.dev/ | React Documentation}
 * @see {@link https://github.com/react-icons/react-icons | React Icons Documentation}
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
import { BsYoutube, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import Tooltip from '../uiElements/Tooltip';
import { useMediaQuery } from 'react-responsive';

function MediaLinks() {
  const isMediumScreen = useMediaQuery({ query: '(min-width: 768px)' });

  const mediaLinks = [
    { name: "GitHub", icon: BsGithub, link: "https://github.com/ChaceN89" },
    { name: "YouTube", icon: BsYoutube, link: "https://www.youtube.com/@chacenielson5413" },
    { name: "Instagram", icon: BsInstagram, link: "https://www.instagram.com/chacenielson" },
    { name: "LinkedIn", icon: BsLinkedin, link: "https://www.linkedin.com/in/chace-nielson" }
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
              bg-primary hover:bg-accent text-secondary hover:text-primary 
              transition duration-300"
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
