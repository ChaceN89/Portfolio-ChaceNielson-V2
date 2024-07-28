import React from 'react';
import ParallaxMountains from './ParallaxMountains';
import ScrollWheel from '../../components/uiElements/ScrollWheel'
import HeroImg from './HeroImg';
import HeroText from './HeroText';
import FadeTransition from '../../routing/FadeTransition';
import './Hero.css';

function Hero() {
  return (
    <FadeTransition>
      <section className="hero">
        <HeroText />
        <ParallaxMountains />
        <ScrollWheel to="CallToAction" />
        <HeroImg />
      </section>
    </FadeTransition>
  );
}

export default Hero;
