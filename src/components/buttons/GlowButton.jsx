import React from 'react';
import handleClick from './handleClick';
import './GlowButton.css';

const GlowButton = ({ to, onClick, aLink, children, className, type = 'button', ...rest }) => {
  const buttonClass = ` glow-on-hover border border-secondary border-opacity-50 ${className}`;

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={(event) => handleClick({ to, onClick, aLink, event })}
      {...rest}
    >
      <span className="">{children}</span>
    </button>
  );
};

export default GlowButton;
