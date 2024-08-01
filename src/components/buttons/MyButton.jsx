/**
 * @file MyButton.jsx
 * @module MyButton
 * @desc Reusable Button component that can function either as a ScrollLink or a standard button with an onClick event.
 * The component conditionally scrolls based on the presence of the 'to' prop. If 'to' is provided, it scrolls to the target;
 * otherwise, it triggers the onClick event. The styling is consistent using the 'buttonStyle' class from the CSS file.
 * 
 * @component MyButton
 * 
 * @requires react
 * @requires react-scroll
 * @requires ../../globals
 * 
 * @see {@link https://github.com/fisshy/react-scroll|react-scroll documentation}
 * @see {@link https://tailwindcss.com/docs/installation|Tailwind CSS documentation}
 * 
 * @param {Object} props - The props object.
 * @param {string} [props.to] - The target element to scroll to. If provided, the component scrolls to the element.
 * @param {function} [props.onClick] - The click event handler. Used when 'to' is not provided.
 * @param {React.ReactNode} props.children - The content inside the button.
 * @param {string} [props.className] - Additional custom classes for styling.
 * @param {Object} [props.rest] - Additional props to be spread onto the rendered element.
 * 
 * @example
 * // As a ScrollLink:
 * <MyButton
 *   to="Projects"
 *   className="additional-class"
 * >
 *   My Projects
 * </MyButton>
 * 
 * // As a standard button:
 * <MyButton
 *   onClick={() => console.log('Button clicked!')}
 *   className="additional-class"
 * >
 *   Click Me
 * </MyButton>
 * 
 * @returns {JSX.Element} The rendered Button component.
 * 
 * @created 2024-07-17
 * @updated 2024-07-31
 */

import React from 'react';
import handleClick from './handleClick';
import './GlowButton.css';

function MyButton({ to, onClick, aLink, children, className, type = 'button', ...rest }) {
  const buttonClass = `glow-on-hover border border-secondary border-opacity-50 ${className}`;

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={(event) => handleClick({ to, onClick, aLink, event })}
      {...rest}
      >
      <span>{children}</span>
    </button>
  );
}

export default MyButton;
