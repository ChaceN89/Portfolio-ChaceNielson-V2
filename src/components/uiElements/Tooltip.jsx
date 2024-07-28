/**
 * @file Tooltip.jsx
 * @module Tooltip
 * @desc React component that displays a tooltip with a given text when the user hovers over the children elements.
 * The tooltip position adjusts based on the viewport boundaries to ensure it is fully visible.
 * 
 * @component Tooltip
 * 
 * @param {Object} props - The component props.
 * @param {string} props.text - The text to display inside the tooltip.
 * @param {number} [props.openDuration=1000] - The duration in milliseconds before the tooltip appears.
 * @param {string} [props.className=""] - Additional class names to style the tooltip.
 * @param {React.ReactNode} props.children - The child elements that trigger the tooltip on hover.
 * 
 * @requires react
 * @requires useState, useEffect, useRef from 'react'
 * 
 * @see {@link https://react.dev/ | React Documentation}
 * 
 * @returns {JSX.Element} The Tooltip component that displays a styled tooltip on hover.
 * 
 * @example
 * // Example usage of Tooltip component
 * import Tooltip from './Tooltip';
 * 
 * function App() {
 *   return (
 *     <div className="App">
 *       // Other components
 *       <Tooltip text="This is a tooltip">
 *         <button>Hover over me</button>
 *       </Tooltip>
 *     </div>
 *   );
 * }
 * 
 * @exports Tooltip
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-28
 */

import React, { useState, useEffect, useRef } from 'react';

const Tooltip = ({ text, openDuration = 1000, className = "", children }) => {
  const [hovered, setHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipStyle, setTooltipStyle] = useState({});
  const tooltipRef = useRef(null);

  // Effect to handle the tooltip visibility based on hover state
  useEffect(() => {
    if (hovered) {
      const timer = setTimeout(() => setShowTooltip(true), openDuration);
      return () => clearTimeout(timer);
    } else {
      setShowTooltip(false);
    }
  }, [hovered, openDuration]);

  // Effect to adjust the tooltip position based on viewport boundaries
  useEffect(() => {
    if (showTooltip && tooltipRef.current) {
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      let newStyle = {};

      if (tooltipRect.right > viewportWidth) {
        newStyle.right = 0;
        newStyle.left = 'auto';
      } else if (tooltipRect.left < 0) {
        newStyle.left = 0;
        newStyle.right = 'auto';
      }

      if (tooltipRect.bottom > viewportHeight) {
        newStyle.bottom = '100%';
        newStyle.top = 'auto';
      } else if (tooltipRect.top < 0) {
        newStyle.top = '100%';
        newStyle.bottom = 'auto';
      }

      setTooltipStyle(newStyle);
    }
  }, [showTooltip, hovered]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      {showTooltip && (
        <div
          ref={tooltipRef}
          className={`absolute z-10 p-1 text-sm text-primary bg-secondary border-2 border-primary rounded w-fit whitespace-nowrap ${className}`}
          style={{ ...tooltipStyle, bottom: '100%', marginBottom: '2px' }}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
