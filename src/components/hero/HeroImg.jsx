import React from 'react';
import ImageComponent from '../resuableComponents/ImageComponent';

function HeroImg() {
  return (
    <div className="img-container">
      <ImageComponent 
        src={`${process.env.PUBLIC_URL}/png-portraits/chace-2.png`} 
        alt="Hero" 
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export default HeroImg;
