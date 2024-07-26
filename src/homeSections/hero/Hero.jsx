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
    </section>
  );
}

export default Hero;
