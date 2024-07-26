import React from 'react';

import './Hero.css';
import ParallaxMountains from './ParallaxMountains';
import ScrollWheel from '../../components/uiElements/ScrollWheel'
import HeroImg from './HeroImg';
import HeroText from './HeroText';

function Hero() {

  return (
    <section className="hero">
      <HeroText />
      <ParallaxMountains />
      <ScrollWheel to="CallToAction" />
      <HeroImg />
    </section>
  );
}

export default Hero;
