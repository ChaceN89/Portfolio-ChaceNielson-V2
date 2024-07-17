import React from 'react';

import Button from '../resuableComponents/Button';
import { homePageData } from '../../data/homePageData';
import SmallImg from './SmallImg';

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
    <div className="text-container text-padding">
      <div className="flex flex-col gap-2 col-span-2 z-10">
        <h3 className="hero-text">{homePageData.top}</h3>
        <h1 className="hero-text">{homePageData.name}</h1>
        <div className="hero-text">{homePageData.description}</div>
        <div className="text-buttons">
          {homePageData.buttons.map((button) => (
            <Button to={button.id} className="additional-class" key={button.id}>
              {button.name}
            </Button>
          ))}
        </div>
        <SmallImg />
      </div>
    </div>
  );
}


export default HeroText