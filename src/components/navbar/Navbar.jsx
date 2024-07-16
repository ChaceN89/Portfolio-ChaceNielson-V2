/**
 * @file Navbar.jsx
 * @module Navbar
 * @desc Component that represents the navigation bar of the website.
 * It includes a logo, a title, and a hamburger menu for mobile devices.
 * 
 * @component Navbar
 * 
 * @requires react
 * @requires react-icons/fa
 * @requires ./NavbarItems
 * @requires ./LogoLink
 * @requires ../../styles/Navbar.css
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * @see {@link https://react-icons.github.io/react-icons/|React Icons Documentation}
 * 
 * @returns {JSX.Element} The rendered Navbar component.
 * 
 * @author Chace Nielson
 * @created 2024-07-10
 * @updated 2024-07-10
 */

import React, { useState } from 'react';
import NavbarItems from './NavbarItems';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isHamburgerNavOpen, setIsHamburgerNavOpen] = useState(false);
  const [animateMenu, setAnimateMenu] = useState(false);

  const toggleMenu = () => {
    if (!isHamburgerNavOpen) {
      setIsHamburgerNavOpen(true);
      setAnimateMenu(true);
    } else {
      setAnimateMenu(false);
      setTimeout(() => setIsHamburgerNavOpen(false), 150); // slight delay to allow animation to finish to better match fade out of menu
    }
  };

  return (
    <nav className="bg-secondary p-2 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-end md:justify-center items-center">
        <div className="hidden md:flex">
          <NavbarItems textSize="text-lg" />
        </div>

        <button onClick={toggleMenu} className="text-primary block md:hidden z-20">
          {isHamburgerNavOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {isHamburgerNavOpen && (
          <div className={`fixed md:hidden top-0 left-0 z-10 w-full h-full bg-secondary bg-opacity-90 flex justify-center items-center transition-opacity duration-300 ${animateMenu ? 'opacity-100 fade-in' : 'opacity-0 fade-out'}`}>
            <NavbarItems toggleMenu={toggleMenu} textSize="text-2xl" />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
