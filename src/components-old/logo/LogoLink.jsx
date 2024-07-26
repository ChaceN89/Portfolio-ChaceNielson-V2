import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import ImageComponent from '../common/layout/ImageComponent';
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
              className="w-12 md:w-16 object-contain rounded-full"
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
