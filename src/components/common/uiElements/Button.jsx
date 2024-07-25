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
import { globals } from '../../../globals';

const ButtonContent = ({ children }) => (
  <>
    <span className="absolute inset-0 overflow-hidden rounded-xl z-50">
      <span className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(204,85,0,0.6)_0%,rgba(204,85,0,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
      </span>
    </span>
    <div className="relative z-50 flex items-center px-6 py-3 space-x-2 rounded-xl bg-primary-dark/50 ring-1 ring-secondary/10 ">
      <span>{children}</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
        data-slot="icon" className="w-6 h-6">
        <path 
          fillRule="evenodd"
          d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-accent/0 via-secondary/90 to-accent/0 transition-opacity duration-500 group-hover:opacity-40"/>
  </>
);

function Button({ to, onClick, children, className, ...rest }) {
  const buttonClass = `relative inline-block p-0.5 font-semibold leading-6 text-secondary no-underline bg-primary shadow-2xl cursor-pointer group rounded-xl shadow-primary-dark border-2 border-opacity-45 border-secondary ${className}`;

  return to ? (
    <ScrollLink
      to={to}
      spy={true}
      smooth={true}
      offset={globals.ScrollLink.offset}
      duration={globals.ScrollLink.duration}
      className={buttonClass}
      {...rest}
    >
      <ButtonContent>{children}</ButtonContent>
    </ScrollLink>
  ) : (
    <button
      onClick={onClick}
      className={buttonClass}
      {...rest}
    >
      <ButtonContent>{children}</ButtonContent>
    </button>
  );
}

export default Button;
