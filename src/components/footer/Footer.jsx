/**
 * @file Footer.jsx
 * @module Footer
 * @desc Footer component that appears at the bottom of the page.
 * Contains an avatar image, a link back to the top with the author's name, and a list of links to various social media or other resources.
 * 
 * @component Footer
 * 
 * @requires react
 * @requires LogoLink from '../logo/LogoLink'
 * @requires MediaLinks from './MediaLinks'
 * 
 * @see {@link https://react.dev/ | React Documentation}
 * 
 * @param none
 * 
 * @returns {JSX.Element} The Footer component that appears at the bottom of the page.
 * 
 * @example
 * // Example usage of Footer in a layout component
 * import Footer from '../components/footer/Footer';
 * 
 * function Layout() {
 *   return (
 *     <div className="layout">
 *       // Main content of the page
 *       <Footer />
 *     </div>
 *   );
 * }
 * 
 * @exports Footer
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-28
 */

import React from 'react';
import LogoLink from './LogoLink';
import MediaLinks from './MediaLinks';

function Footer() {
  return (
    <footer className="bg-secondary flex relative bottom-0">
      <div className='container mx-auto flex justify-between p-1 sm:p-2'>
        {/* Link back to top with the logo */}
        <LogoLink size='small' />
        {/* List of social media or other resource links */}
        <MediaLinks />
      </div>
    </footer>
  );
}

export default Footer;
