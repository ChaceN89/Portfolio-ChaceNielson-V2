import React, { useState, useEffect, useRef } from 'react';

const Tooltip = ({ text, openDuration=1000, className="", children }) => {
  const [hovered, setHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipStyle, setTooltipStyle] = useState({});
  const tooltipRef = useRef(null);

  useEffect(() => {
    if (hovered) {
      const timer = setTimeout(() => setShowTooltip(true), openDuration);
      return () => clearTimeout(timer);
    } else {
      setShowTooltip(false);
    }
  }, [hovered, openDuration]);

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
