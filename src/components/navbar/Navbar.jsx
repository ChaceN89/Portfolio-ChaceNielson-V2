/**
 * @file Navbar.jsx
 * @module Navbar
 * @desc React component for the navigation bar. 
 * This component includes a logo link, navigation items, and a responsive hamburger menu for smaller screens.
 * It also displays a progress bar at the top of the navbar that indicates the scroll progress of the page.
 * 
 * @note This component is part of the main layout of the application.
 *
 * @component Navbar
 * 
 * @requires react
 * @requires useState from 'react'
 * @requires NavbarItems from './NavbarItems'
 * @requires LogoLink from '../logo/LogoLink'
 * @requires framer-motion { motion, useScroll, useSpring }
 * @requires hamburger-react { Squash as Hamburger }
 * @requires ./Navbar.css
 * 
 * @see {@link https://react.dev/ | React Documentation}
 * @see {@link https://www.framer.com/docs/ | Framer Motion Documentation}
 * @see {@link https://hamburger-react.netlify.app/ | Hamburger React Documentation}
 * 
 * @param none
 * 
 * @returns {JSX.Element} The Navbar component that provides navigation links and a responsive menu.
 * 
 * @example
 * // Example usage of Navbar in a layout component
 * import Navbar from '../components/navbar/Navbar';
 * 
 * function Layout() {
 *   return (
 *     <div className="layout">
 *       <Navbar />
 *       // Main content here
 *     </div>
 *   );
 * }
 * 
 * @exports Navbar
 * 
 * @created 2024-07-28
 * @updated 2024-07-29
 */

import React, { useState } from 'react';
import NavbarItems from './NavbarItems';
import LogoLink from '../footer/LogoLink';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Squash as Hamburger } from 'hamburger-react';
import "./Navbar.css";

function Navbar() {
  const [isHamburgerNavOpen, setIsHamburgerNavOpen] = useState(false);
  const [animateMenu, setAnimateMenu] = useState(false);

  // Create a spring animation for the scroll progress
  const { scrollYProgress } = useScroll();
  const springScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 30,
    mass: 1
  });

  // Toggle the hamburger menu
  const toggleMenu = () => {
    if (!isHamburgerNavOpen) {
      setIsHamburgerNavOpen(true);
      setAnimateMenu(true);
    } else {
      setAnimateMenu(false);
      setTimeout(() => setIsHamburgerNavOpen(false), 150); // slight delay to allow animation to finish
    }
  };

  return (
    <nav className="bg-secondary bg-opacity-95 pb-1 fixed top-0 w-full z-45">
      {/* Scroll progress bar */}
      <motion.div 
        className='w-full h-1 bg-accent origin-left z-40'
        style={{ scaleX: springScrollYProgress }}
      />
      <div className="container mx-auto flex justify-between md:justify-center items-center p-0.5 md:p-2">
        
        {/* Logo link for small screens */}
        <div className="text-left flex justify-start md:hidden">
          <LogoLink />
        </div>

        {/* Navigation items for large screens */}
        <div className="hidden md:flex">
          <NavbarItems textSize="text-lg" />
        </div>

        {/* Hamburger menu button for small screens */}
        <button onClick={toggleMenu} className="text-primary md:hidden z-50 hover:text-accent-dark flex gap-1">
          <Hamburger toggled={isHamburgerNavOpen} rounded />
        </button>

        {/* Hamburger menu items */}
        {isHamburgerNavOpen && (
          <div className={`fixed md:hidden top-0 left-0 z-45 w-full h-full bg-secondary bg-opacity-95 flex justify-center items-center transition-opacity duration-300 ${animateMenu ? 'opacity-100 fade-in' : 'opacity-0 fade-out'}`}>
            <NavbarItems toggleMenu={toggleMenu} textSize="text-2xl" />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
