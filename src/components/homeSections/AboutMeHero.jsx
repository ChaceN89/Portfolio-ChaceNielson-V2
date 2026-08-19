/**
 * AboutMeHero Component
 * @file AboutMeHero.jsx
 * @module AboutMeHero
 * @desc This component renders the "About Me" section of the homepage.
 * It includes a brief introduction, an image, and a button to connect.
 * 
 * @author Chace Nielson
 * @created May 12, 2025
 * @updated Aug 19, 2026
 */
import React, { useMemo, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ImageComponent from '@/components/uiElements/images/ImageComponent';
import MyBtn from '@/components/buttons/MyBtn';
import { useNavigate } from 'react-router-dom';
import { useAnimationSettings } from '@/components/animations/AnimationContext';

export default function AboutMeHero() {

  const { animationsEnabled } = useAnimationSettings(); // Get animation settings from context

  // Hook to get the current location and navigate
  const navigate = useNavigate();

  const sectionRef = useRef();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'], // scroll enters viewport
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.75, 1], [150, 0, -80, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 1], [0.6, 1, 1]);


  const animatedStyle = useMemo(() => {
    if (!animationsEnabled) return {};
    return { opacity, y, scale };
  }, [animationsEnabled, opacity, y, scale]);

  return (
    <motion.div
      id="about-me-hero"
      ref={sectionRef}
      className="flex flex-col md:flex-row items-center justify-center gap-10 px-4 py-12 "
      style={animatedStyle}
    >
      {/* Image */}
      <div className="min-w-48 lg:max-w-80 overflow-hidden rounded-xl rounded-bl-[100px] hover:rounded-bl-xl rounded-tr-[100px] hover:rounded-tr-xl transition-all duration-400 ease-in-out flex justify-center h-56 w-48  sm:h-80 sm:w-72 "
      >
        <ImageComponent
          src="/portraits/pngs/chace-2.png"
          alt="Chace Nielson"
          className="h-full w-full object-cover object-top flex justify-center"
          imgClass="w-full h-full transition-transform duration-400 ease-in-out hover:scale-110"
        />
      </div>

      {/* Text */}
      <div className="max-w-xl text-center md:text-left space-y-2">
        <h2 className="text-3xl font-bold">A Little About Me</h2>

        <p className="text-lg leading-relaxed">
          Hey, I'm <strong>Chace Nielson</strong>, a software engineer and game developer focused on <strong>gameplay programming, game design, and narrative</strong>. While I also have a background in web development, my passion is building games worth playing.
        </p>

        <p className="text-lg leading-relaxed">
          I love digging into <strong>research and worldbuilding</strong>, then turning those details into stronger stories, settings, and gameplay. Just as important is the polish that takes a game beyond a good idea, refining systems, details, and presentation until it feels complete.
        </p>

        <p className="text-lg leading-relaxed">
          I'm always looking for opportunities to collaborate on thoughtful, creative projects and work with people who care about making something great.
        </p>

        <MyBtn
          sm
          callBack={() => navigate('/contact')}
          GA_label="Hero Button"
        >
          Let's Talk
        </MyBtn>

      </div>
    </motion.div>
  );
}
