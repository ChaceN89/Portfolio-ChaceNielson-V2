import React, { useState, useEffect } from 'react';

const Tooltip = ({ text, children }) => {
  const [hovered, setHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (hovered) {
      const timer = setTimeout(() => setShowTooltip(true), 100);
      return () => clearTimeout(timer);
    }
    setShowTooltip(false);
  }, [hovered]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      {showTooltip && (
        <div className="absolute z-10 p-1 text-sm text-primary bg-secondary rounded bottom-full mb-2">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
