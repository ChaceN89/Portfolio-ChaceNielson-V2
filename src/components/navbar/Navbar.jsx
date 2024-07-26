import React, { useState } from 'react';
import NavbarItems from './NavbarItems';
import LogoLink from '../logo/LogoLink';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
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
    <nav className="bg-secondary pb-1 fixed top-0 w-full z-45">
      <motion.div 
        className='w-full h-1 bg-accent origin-left z-40'
        style={{ scaleX: springScrollYProgress }}
      />
      <div className="container mx-auto flex justify-between md:justify-center items-center p-2">
        <div className="text-left flex justify-start md:hidden">
          <LogoLink />
        </div>
        <div className="hidden md:flex">
          <NavbarItems textSize="text-lg" />
        </div>
        <button onClick={toggleMenu} className="text-primary md:hidden z-50 hover:text-accent flex gap-1">
          {isHamburgerNavOpen ? <FaTimes size={24} /> : <><span className='font-bold'>Menu</span> <FaBars size={24} /> </>}
        </button>
        {isHamburgerNavOpen && (
          <div className={`fixed md:hidden top-0 left-0 z-50 w-full h-full bg-secondary bg-opacity-95 flex justify-center items-center transition-opacity duration-300 ${animateMenu ? 'opacity-100 fade-in' : 'opacity-0 fade-out'}`}>
            <NavbarItems toggleMenu={toggleMenu} textSize="text-2xl" />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
