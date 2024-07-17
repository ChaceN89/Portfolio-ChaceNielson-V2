/**
 * @file LinkItem.jsx
 * @module LinkItem
 * @desc Component representing an individual navigation link item for the navbar.
 * Applies active and hover styles based on the navigation state.
 * 
 * @component LinkItem
 * 
 * @param {Object} props - The component props.
 * @param {string} props.to - The path to navigate to or the target to scroll to.
 * @param {React.ReactNode} props.children - The child elements to be rendered inside the link.
 * @param {Function} [props.onClick] - Optional click handler for the link.
 * @param {boolean} [props.routerLink] - If true, use NavLink for routing, otherwise use Link for scrolling.
 * 
 * @requires react
 * @requires react-scroll
 * @requires react-router-dom
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * @see {@link https://reactrouter.com/|React Router Documentation}
 * @see {@link https://www.npmjs.com/package/react-scroll|React Scroll Documentation}
 * 
 * @returns {JSX.Element} The rendered LinkItem component.
 * 
 * @example
 * // Example usage of LinkItem component for scrolling
 * <LinkItem to="about" onClick={handleClick}>
 *   Our Team
 * </LinkItem>
 * 
 * @example
 * // Example usage of LinkItem component for routing
 * <LinkItem to="/about" routerLink={true} onClick={handleClick}>
 *   About Us
 * </LinkItem>
 * 
 * @author Chace Nielson
 * @created 2024-07-10
 * @updated 2024-07-10
 */

import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import { globals } from '../../globals';

const LinkItem = ({ to, children, onClick, routerLink = false }) => {
  return routerLink ? (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${isActive ? 'bg-primary text-secondary rounded-3xl' : 
        'hover:text-accent bg-none duration-300'
        } 
        px-4 py-2 transition-all `
      }
      onClick={onClick}
    >
      {children}
    </NavLink>
  ) : (
    <ScrollLink
      to={to}
      spy={true}
      smooth={true}
      offset={globals.ScrollLink.offset}  // Adjust this offset based on your fixed navbar height
      duration={globals.ScrollLink.duration}
      className="px-4 py-2 transition-all hover:text-accent duration-300 cursor-pointer"
      activeClass="bg-primary text-secondary rounded-3xl"
      onClick={onClick}
    >
      {children}
    </ScrollLink>
  );
};

export default LinkItem;
