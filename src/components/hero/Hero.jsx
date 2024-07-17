import React from 'react';
import { motion } from 'framer-motion';
import ImageComponent from '../resuableComponents/ImageComponent';
import './Hero.css';
import { Link as ScrollLink } from 'react-scroll';
import { globals } from '../../globals';
import SlidingText from './SlidingText';
import ScrollWheel from './ScrollWheel';
import HeroImg from './HeroImg';
import HeroText from './HeroText';

function Hero() {

  return (
    <section className="section-wrapper-height relative hero">
      <SlidingText />
      <ScrollWheel />
      <HeroText />
      <HeroImg />
    </section>
  );
}

export default Hero;
