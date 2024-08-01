/**
 * @file SlideButton.jsx
 * @module SlideButton
 * @desc Reusable Button component that can function either as a ScrollLink, a standard button with an onClick event, or a link to an external page.
 * The component conditionally executes based on the presence of the 'to', 'onClick', or 'aLink' props.
 * The styling is consistent using the 'slide-button' class from the CSS file.
 * 
 * @component SlideButton
 * 
 * @requires react
 * @requires ../../data/globals
 * @requires ./handleClick
 * 
 * @see {@link https://github.com/fisshy/react-scroll|react-scroll documentation}
 * @see {@link https://tailwindcss.com/docs/installation|Tailwind CSS documentation}
 * 
 * @param {Object} props - The props object.
 * @param {string} [props.to] - The target element to scroll to. If provided, the component scrolls to the element.
 * @param {function} [props.onClick] - The click event handler. Used when 'to' is not provided.
 * @param {string} [props.aLink] - The external link to navigate to when the button is clicked.
 * @param {React.ReactNode} props.children - The content inside the button.
 * @param {string} [props.className] - Additional custom classes for styling.
 * @param {string} [props.buttonType='primary'] - The button style which determines the color (primary, secondary, accent).
 * @param {string} [props.type='button'] - The HTML button type (button, submit, reset).
 * @param {Object} [props.rest] - Additional props to be spread onto the rendered element.
 * 
 * @returns {JSX.Element} The rendered Button component.
 * 
 * @example
 * // As a ScrollLink:
 * <SlideButton
 *   to="Projects"
 *   className="additional-class"
 * >
 *   My Projects
 * </SlideButton>
 * 
 * // As a standard button:
 * <SlideButton
 *   onClick={() => console.log('Button clicked!')}
 *   className="additional-class"
 * >
 *   Click Me
 * </SlideButton>
 * 
 * // As an external link:
 * <SlideButton
 *   aLink="https://example.com"
 *   className="additional-class"
 * >
 *   Visit Example
 * </SlideButton>
 * 
 * @created 2024-07-11
 * @updated 2024-07-31
 */

import React from 'react';
import handleClick from './handleClick';
import './SlideButton.css';

const SlideButton = ({ to, onClick, aLink, children, className, type = 'button', ...rest }) => {
  const buttonClass = `slide-button-base slide-button ${className}`;

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={(event) => handleClick({ to, onClick, aLink, event })}
      {...rest}
    >
      <span className="slide-button-content">{children}</span>
    </button>
  );
};

export default SlideButton;
