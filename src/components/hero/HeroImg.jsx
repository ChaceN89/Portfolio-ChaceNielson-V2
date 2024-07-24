import React from 'react';
import ImageComponent from '../common/layout/ImageComponent';

function HeroImg() {
  return (
    <div className="hero-img-wrapper">
      <ImageComponent 
        className="hero-img opacity-90"
        src={`${process.env.PUBLIC_URL}/png-portraits/chace-2.png`} 
        lowResSrc={`${process.env.PUBLIC_URL}/png-portraits/chace-2-small-2.png`} 
        alt="Hero" 
      />
    </div>
  );
}

export default HeroImg;
