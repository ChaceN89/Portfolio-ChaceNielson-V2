import React from 'react';

import './Hero.css';
import SlidingText from './SlidingText';
import ScrollWheel from './ScrollWheel';
import HeroImg from './HeroImg';
import HeroText from './HeroText';
import SmallImg from './SmallImg';

function Hero() {

  return (
    <section className="hero section-wrapper-height ">
      <SlidingText />
      <ScrollWheel />
      <HeroText />
      <HeroImg />
    </section>
  );
}

export default Hero;
