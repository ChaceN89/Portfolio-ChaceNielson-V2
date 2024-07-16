/**
 * @file LinkItem.jsx
 * @module LinkItem
 * @desc Component representing an individual navigation link item for the navbar.
 * Applies active and hover styles based on the navigation state.
 * 
 * @component LinkItem
 * 
 * @param {Object} props - The component props.
 * @param {string} props.to - The path to navigate to.
 * @param {React.ReactNode} props.children - The child elements to be rendered inside the link.
 * @param {Function} [props.onClick] - Optional click handler for the link.
 * 
 * @requires react
 * @requires react-router-dom
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * @see {@link https://reactrouter.com/|React Router Documentation}
 * 
 * @returns {JSX.Element} The rendered LinkItem component.
 * 
 * @example
 * // Example usage of LinkItem component
 * <LinkItem to="/about" onClick={handleClick}>
 *   Our Team
 * </LinkItem>
 * 
 * @author Chace Nielson
 * @created 2024-07-10
 * @updated 2024-07-10
 */

import React from 'react';
import { NavLink } from 'react-router-dom';

const LinkItem = ({ to, children, onClick }) => {
  return (
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
  );
};

export default LinkItem;
