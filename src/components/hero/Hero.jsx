import React from 'react';

import './Hero.css';
import ParallaxMountains from './ParallaxMountains';
import ScrollWheel from './ScrollWheel';
import HeroImg from './HeroImg';
import HeroText from './HeroText';

function Hero() {

  return (
    <section className="hero section-wrapper-height">
      <ParallaxMountains />
      <ScrollWheel />
      <HeroText />
      <HeroImg />
    </section>
  );
}

export default Hero;
