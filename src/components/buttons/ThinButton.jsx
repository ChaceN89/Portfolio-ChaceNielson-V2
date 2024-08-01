import React from 'react';
import handleClick from './handleClick';
import './ThinButton.css';

const ThinButton = ({ buttonType = 1, to, onClick, aLink, children, className, type = 'button', ...rest }) => {
  
  let buttonClassInner = `btn btn-one ${className}`;

  if (buttonType === 2) {
    buttonClassInner = `btn btn-two ${className}`;
  }

  return (
    <div >
      <button
        type={type}
        className={buttonClassInner}
        onClick={(event) => handleClick({ to, onClick, aLink, event })}
        {...rest}
      >
        <span className="">{children}</span>
      </button>
    </div>
  );
};

export default ThinButton;
