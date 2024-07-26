import React from 'react';

import './Hero.css';
import ParallaxMountains from './ParallaxMountains';
import ScrollWheel from '../../components/uiElements/ScrollWheel'
import HeroImg from './HeroImg';
import HeroText from './HeroText';

function Hero() {

  return (
    <section className="overflow-hidden w-full relative flex items-center justify-start section-wrapper-height">
      {/* relative components */}
      <HeroText />
      {/* absolute components */}
      <ParallaxMountains />
      <ScrollWheel to="CallToAction" />

      <HeroImg />

      <div className="w-full h-full flex justify-center items-end absolute inset-0 z-0 opacity-20">
        <div className="w-full absolute z-5">
          absolute component in lower left
        </div>
      </div> 
    </section>
  );
}

export default Hero;
