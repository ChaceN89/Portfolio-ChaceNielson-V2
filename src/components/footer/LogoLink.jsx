/**
 * @file LogoLink.jsx
 * @module LogoLink
 * @desc Component representing the logo link, which either scrolls to the top of the home page or navigates to the home page.
 * The component adjusts its size based on the provided size prop.
 * 
 * @component LogoLink
 * 
 * @param {Object} props - The component props.
 * @param {string} [props.size="large"] - The size of the logo link, either "large" or "small".
 * 
 * @requires react
 * @requires useEffect from 'react'
 * @requires useLocation, useNavigate from 'react-router-dom'
 * @requires react-scroll { Link as ScrollLink }
 * @requires ImageComponent from '../../wrappers/ImageComponent'
 * @requires globals from '../../data/globals'
 * @requires ./LogoLink.css
 * 
 * @see {@link https://react.dev/ | React Documentation}
 * @see {@link https://reactrouter.com/ | React Router Documentation}
 * @see {@link https://www.npmjs.com/package/react-scroll | React Scroll Documentation}
 * 
 * @returns {JSX.Element} The LogoLink component that either scrolls to the top of the home page or navigates to the home page.
 * 
 * @example
 * // Example usage of LogoLink component
 * import LogoLink from '../logo/LogoLink';
 * 
 * function Header() {
 *   return (
 *     <header>
 *       <LogoLink size="small" />
 *     </header>
 *   );
 * }
 * 
 * @exports LogoLink
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-28
 */

import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import ImageComponent from '../../wrappers/ImageComponent';
import { globals } from '../../data/globals';
import './LogoLink.css';

function LogoLink({ size = "large" }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const sizes = {
    large: {
      container: { width: '34px', height: '34px' },
      logoClass: "max-w-12 max-h-12 md:max-w-16 md:max-h-16",
      textClass: "text-xl"
    },
    small: {
      container: { width: '22px', height: '22px' },
      logoClass: "max-w-6 max-h-6 md:max-w-8 md:max-h-8",
      textClass: "text-base"
    }
  };

  const currentSize = sizes[size];

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <div className='logo-link flex gap-0 items-center text-primary hover:cursor-pointer'>
      {location.pathname === '/' ? (
        <ScrollLink
          to="Home"
          spy={true}
          smooth={true}
          duration={globals.ScrollLink.duration}
          offset={globals.ScrollLink.offset}
          className="w-full h-full flex gap-0 items-center"
        >
          <div
            className={`w-full h-full flex-shrink-0 ${currentSize.logoClass}`}
            style={currentSize.container}
          >
            <ImageComponent
              className="object-contain rounded-full"
              src={process.env.PUBLIC_URL + '/png-portraits/chace-2.png'}
              lowResSrc={process.env.PUBLIC_URL + '/png-portraits/chace-2-small-2.png'}
              alt="Logo"
            />
          </div>
          <h1 className={`text-nowrap titleFont underline-effect ${currentSize.textClass}`}> CHACE NIELSON </h1>
        </ScrollLink>
      ) : (
        <div onClick={handleLogoClick} className="w-full h-full flex gap-0 items-center">
          <div
            className={`w-full h-full flex-shrink-0 ${currentSize.logoClass}`}
            style={currentSize.container}
          >
            <ImageComponent
              className="w-12 md:w-16 object-contain rounded-full"
              src={process.env.PUBLIC_URL + '/png-portraits/chace-2.png'}
              lowResSrc={process.env.PUBLIC_URL + '/png-portraits/chace-2-small-2.png'}
              alt="Logo"
            />
          </div>
          <h1 className={`text-nowrap titleFont underline-effect ${currentSize.textClass}`}> CHACE NIELSON </h1>
        </div>
      )}
    </div>
  );
}

export default LogoLink;
