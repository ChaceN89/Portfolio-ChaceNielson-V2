/**
 * @file Hero.jsx
 * @module Sections/Hero
 * @desc Hero section component for the landing page. Introduces the developer with animated titles and a call-to-action.
 *       Includes scroll-triggered navigation and motion-based bullet point animations.
 *
 * @features
 * - Intro text with staggered animations using Framer Motion
 * - Role highlights using icons (Software Engineer, Full-Stack Developer, Game Developer)
 * - Animated scroll-to-section button
 * - Call-to-action button with GA tracking ("Let's Talk")
 *
 * @see {@link /components/buttons/MyBtn | MyBtn}
 * @see {@link /components/uiElements/ScrollWheelBtn | ScrollWheelBtn}
 * @see {@link https://www.framer.com/motion/ | Framer Motion Docs}
 *
 * @author Chace Nielson
 * @created Jan 26, 2025
 * @updated Aug 19, 2026
 */

// components 
import ScrollWheelBtn from '../uiElements/ScrollWheelBtn';

import { motion } from 'framer-motion';

// icons
import { FaComputer } from "react-icons/fa6";
import { IoLogoGameControllerB } from "react-icons/io";
import { FaCogs } from "react-icons/fa";

// context
import { useInitialLoading } from '../routing/InitialLoadingContext';
import { useAnimationSettings } from '@/components/animations/AnimationContext'; // for disabling animations on small screens if this component is too much computationally expensive on mobile devices

export default function Hero() {

  const { prefersReducedMotion } = useAnimationSettings(); // Get animation settings from context



  // SHould the animation be shown or not based on the loading state of the app
  const { InitialLoadingDone } = useInitialLoading();
  const shouldAnimate = !InitialLoadingDone;

  // Global delay for the splash screen
  const splashScreenDelay = 2.5; // seconds to wait before starting the animation

  // list of all delays
  const delays = [
    splashScreenDelay + 0,
    splashScreenDelay + 0.2,
    splashScreenDelay + 0.4,
    splashScreenDelay + 0.6,
    splashScreenDelay + 0.8,
    splashScreenDelay + 1.0,
  ];


  // The specific animation info for each element with a delay as a prop so they can be staggered
  const animationInfo = (delay) => {

    if (prefersReducedMotion) return {}; // Disable animations if on small screens

    return {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: shouldAnimate
        ? { delay, duration: 0.4, ease: 'easeOut' }
        : { duration: 0 },
    };
  }

  return (
    <div className="w-screen min-h-[85vh] pt-24 flex flex-col lg:flex-row lg:flex-reverse items-center justify-center px-4 md:px-20 py-12 gap-12 relative overflow-hidden">

      {/* Left Text Block */}
      <div className="flex flex-col gap-4 z-10">

        <motion.h1 {...animationInfo(delays[0])} className="relative inline-block">
          <span className="hero-gradient-text">Chace Nielson</span>
          <div className="absolute left-0 bottom-1 h-[2px] w-full hero-gradient-bg" />
        </motion.h1>

        {/* Bullet points */}
        <BulletPoint animationInfo={animationInfo} delay={delays[1]} icon={<FaCogs />} text="Software Engineer" />
        <BulletPoint animationInfo={animationInfo} delay={delays[2]} icon={<IoLogoGameControllerB />} text="Game Developer" />
        <BulletPoint animationInfo={animationInfo} delay={delays[3]} icon={<FaComputer />} text="Web Developer" />

        <motion.div
          {...animationInfo(delays[4])}
          className="opacity-90 italic space-y-1"
        >
          <p>“Making games, telling stories, and building systems.</p>
          <p>Turning ideas into experiences.”</p>
        </motion.div>

      </div>

      {/* Right Side Visual */}
      <motion.div
        {...animationInfo(delays[0])}
        className="max-w-sm md:max-w-md flex-[1_1_300px] z-0 hidden  lg:flex justify-center  "
      >
        <img
          src="/logos/my-logos/logo562x562.png"
          alt="Chace working"
          width="562"
          height="562"
          className="w-full max-w-[400px] p-2 my-drop-shadow-lg flex justify-center"
        />
      </motion.div>

      <ScrollWheelBtn to="featured-projects" extraDelay={4} />
    </div>
  );
}

// Specific Bullet point component to use in the hero section
function BulletPoint({ animationInfo, delay, icon, text }) {
  return (
    <motion.h4
      {...animationInfo(delay)}
      className="opacity-80 flex items-center gap-2 "
    >
      {icon}
      <span className='hero-gradient-text'>

        {text}
      </span>
    </motion.h4>
  );
}