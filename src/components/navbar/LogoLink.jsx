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
import React from 'react';
import { Link } from 'react-router-dom';

function LogoLink() {
  return (
    <Link to="/" className='flex gap-2 items-center text-primary'>
      <img 
        className="w-12 md:w-16 object-contain" 
        src={process.env.PUBLIC_URL + '/logos/Glass_Gecko_Games_Icon_clear.png'} 
        alt="Logo" 
      />
      <h1 className="text-xl">Glass Gecko Games</h1>
    </Link>
  )
}

export default LogoLink;
