/**
 * @file LogoLink.jsx
 * @module LogoLink
 * @desc Renders a logo link component. Main logo in left of navbar and footer.
 * 
 * @component LogoLink
 * 
 * @example
 * // Example usage of LogoLink component
 * return (
 *   <LogoLink />
 * )
 * 
 * @requires react
 * @requires react-router-dom
 * @requires ../ImageComponent
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * @see {@link https://reactrouter.com/|React Router Documentation}
 * 
 * @returns {JSX.Element} The rendered LogoLink component.
 * 
 * @author Chace Nielson
 * @created 2024-07-10
 * @updated 2024-07-14
 */


/**
 * @file LogoLink.jsx
 * @module LogoLink
 * @desc Renders a logo link component. Main logo in left of navbar and footer.
 * 
 * @component LogoLink
 * 
 * @example
 * // Example usage of LogoLink component
 * return (
 *   <LogoLink />
 * )
 * 
 * @requires react
 * @requires react-router-dom
 * @requires ../ImageComponent
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * @see {@link https://reactrouter.com/|React Router Documentation}
 * 
 * @returns {JSX.Element} The rendered LogoLink component.
 * 
 * @author Chace Nielson
 * @created 2024-07-10
 * @updated 2024-07-19
 */
/**
 * @file LogoLink.jsx
 * @module LogoLink
 * @desc Renders a logo link component. Main logo in left of navbar and footer.
 * 
 * @component LogoLink
 * 
 * @example
 * // Example usage of LogoLink component
 * return (
 *   <LogoLink size="small" />
 * )
 * 
 * @requires react
 * @requires react-router-dom
 * @requires ../ImageComponent
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * @see {@link https://reactrouter.com/|React Router Documentation}
 * 
 * @returns {JSX.Element} The rendered LogoLink component.
 * 
 * @author Chace Nielson
 * @created 2024-07-10
 * @updated 2024-07-23
 */
import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import ImageComponent from '../common/layout/ImageComponent';
import { globals } from '../../globals';

import './LogoLink.css';

function LogoLink({ size = "large",  }) {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const sizes = {
    large: {
      container: { width: '48px', height: '48px' },
      logoClass: "max-w-12 max-h-12 md:max-w-16 md:max-h-16",
      textClass: "text-2xl"
    },
    small: {
      container: { width: '24px', height: '24px' },
      logoClass: "max-w-6 max-h-6 md:max-w-8 md:max-h-8",
      textClass: "text-xl"
    }
  };

  const currentSize = sizes[size];

  return (
    <ScrollLink 
      to="Home"      
      spy={true}
      smooth={true} 
      duration={globals.ScrollLink.duration}
      offset={globals.ScrollLink.offset}  // Adjust this offset based on your fixed navbar height
      className='logo-link flex gap-0 items-center text-primary hover:cursor-pointer'
    >
      <div 
        className={`w-full h-full flex-shrink-0 ${currentSize.logoClass}`} 
        style={currentSize.container} // Set a constant height and width for the logo container
      >
        <ImageComponent 
          className="w-12 md:w-16 object-contain rounded-full"          
          src={process.env.PUBLIC_URL + '/png-portraits/chace-2.png'} 
          lowResSrc={process.env.PUBLIC_URL + '/png-portraits/chace-2-small-2.png'} 
          // style={{ visibility: 'hidden' }} // Hide the image if it's not loaded yet
          alt="Logo" 
        />
      </div>
      <h1 className={`text-nowrap titleFont underline-effect ${currentSize.textClass}`}> CHACE NIELSON </h1>
    </ScrollLink>
  );
}

export default LogoLink;

