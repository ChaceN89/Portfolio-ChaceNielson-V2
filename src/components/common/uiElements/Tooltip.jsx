import React from 'react'

const Tooltip = ({ text }) => (
  <div className="absolute z-10 p-1 text-sm text-primary bg-secondary rounded  bottom-full mb-2">
    {text}
  </div>
);

export default Tooltip