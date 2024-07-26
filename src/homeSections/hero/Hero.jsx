import React from 'react';

import './Hero.css';
import ParallaxMountains from './ParallaxMountains';
import ScrollWheel from '../common/uiElements/ScrollWheel';
import HeroImg from './HeroImg';
import HeroText from './HeroText';

function Hero() {

  return (
    <section className="hero section-wrapper-height">
      {/* relative components */}
      {/* <HeroText /> */}
      {/* absolute components */}
      {/* <ParallaxMountains />
      <ScrollWheel />
      <HeroImg /> */}
    </section>
  );
}

export default Hero;
