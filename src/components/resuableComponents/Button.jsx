/**
 * @file Button.jsx
 * @module Button
 * @desc Reusable Button component that can function either as a ScrollLink or a standard button with an onClick event.
 * The component conditionally renders based on the presence of the 'to' prop. If 'to' is provided, it renders a ScrollLink;
 * otherwise, it renders a standard button element. The styling is consistent using the 'buttonStyle' class from the CSS file.
 * 
 * @component Button
 * 
 * @requires react
 * @requires react-scroll
 * @requires ../../globals
 * @requires ./Button.css
 * 
 * @see {@link https://github.com/fisshy/react-scroll|react-scroll documentation}
 * @see {@link https://tailwindcss.com/docs/installation|Tailwind CSS documentation}
 * 
 * @param {Object} props - The props object.
 * @param {string} [props.to] - The target element to scroll to. If provided, the component renders a ScrollLink.
 * @param {function} [props.onClick] - The click event handler. Used when rendering a standard button.
 * @param {React.ReactNode} props.children - The content inside the button.
 * @param {string} [props.className] - Additional custom classes for styling.
 * @param {Object} [props.rest] - Additional props to be spread onto the rendered element.
 * 
 * @example
 * // As a ScrollLink:
 * <Button
 *   to="Projects"
 *   className="additional-class"
 * >
 *   My Projects
 * </Button>
 * 
 * // As a standard button:
 * <Button
 *   onClick={() => console.log('Button clicked!')}
 *   className="additional-class"
 * >
 *   Click Me
 * </Button>
 * 
 * @returns {JSX.Element} The rendered Button component.
 * 
 * @author [Your Name]
 * @created 2024-07-17
 * @updated 2024-07-17
 */

import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { globals } from '../../globals';
import './Button.css';

function Button({ to, onClick, children, className, ...rest }) {

  return to ? (
    <ScrollLink
      to={to}
      spy={true}
      smooth={true}
      offset={globals.ScrollLink.offset}
      duration={globals.ScrollLink.duration}
      className="buttonStyle"
      {...rest}
    >
      {children}
    </ScrollLink>
  ) : (
    <button
      onClick={onClick}
      className="buttonStyle"
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
