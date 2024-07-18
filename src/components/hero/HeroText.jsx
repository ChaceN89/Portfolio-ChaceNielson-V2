import React from 'react';

import Button from '../resuableComponents/Button';
import { homePageData } from '../../data/homePageData';

function HeroText() {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="text-container ">
      <div>
        <h3>{homePageData.top}</h3>
        <h1 className='pb-2'>{homePageData.name}</h1>
        <div className='pb-4'>{homePageData.description}</div>
        <div className="text-buttons">
          {homePageData.buttons.map((button) => (
            <Button to={button.id} key={button.id}>
              {button.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}


export default HeroText