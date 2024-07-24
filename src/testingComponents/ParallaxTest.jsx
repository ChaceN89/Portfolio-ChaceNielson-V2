import React, {useRef} from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import BackgroundWrapper from '../components/common/layout/BackgroundWrapper';

const scrollStart = 0;
const scrollMiddle = window.innerHeight;
const scrollEnd = 2 * window.innerHeight;

const translateStartFirst = -100; // Move up by 100 pixels at the start for the first content
const translateMiddleFirst = 0; // No movement in the middle
const translateEndFirst = 100; // Move down by 100 pixels at the end for the first content

const translateStartSecond = -200; // Move up by 200 pixels at the start for the second content
const translateMiddleSecond = 20; // 
const translateEndSecond = 200; // Move down by 200 pixels at the end for the second content

const translateStartThird = -300; // Move up by 300 pixels at the start for the second content
const translateMiddleThird = -20; // 
const translateEndThird = 300; // Move down by 300 pixels at the end for the second content

const parallaxConfigFirst = {
  scrollRange: [scrollStart, scrollMiddle, scrollEnd],
  translateYRange: [translateStartFirst, translateMiddleFirst, translateEndFirst],
};

const parallaxConfigSecond = {
  scrollRange: [scrollStart, scrollMiddle, scrollEnd],
  translateYRange: [translateStartSecond, translateMiddleSecond, translateEndSecond],
};

const parallaxConfigThird = {
  scrollRange: [scrollStart, scrollMiddle, scrollEnd],
  translateYRange: [translateStartThird, translateMiddleThird, translateEndThird],
};

function ParallaxTest({ num }) {
  const scrollRef = useRef(null)
  const { scrollY } = useScroll({ container: scrollRef });
  const yFirst = useTransform(scrollY, parallaxConfigFirst.scrollRange, parallaxConfigFirst.translateYRange);
  const ySecond = useTransform(scrollY, parallaxConfigSecond.scrollRange, parallaxConfigSecond.translateYRange);
  const yThird = useTransform(scrollY, parallaxConfigThird.scrollRange, parallaxConfigThird.translateYRange);



  return (
    <BackgroundWrapper
      src={process.env.PUBLIC_URL + "/png-backgrounds/detailed/range-b&w5-trim.png"}
      ref={scrollRef}
      className="section-wrapper-height overflow-hidden relative items-center justify-center px-6 grid grid-cols-4 gap-2"
    >
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-2 z-0">
        {Array.from({ length: 12 * 12 }).map((_, i) => (
          <div
            key={i}
            className="border border-gray-200 h-full w-full opacity-25"
          />
        ))}
      </div>
      
      <motion.div 
        className="flex items-center justify-center border-2 border-red-200 p-2 z-10 text-white bg-black"
        style={{ y: yFirst }}

      >
        <ol>
          <li>Component num: 1</li>
          <li>translateStartFirst: {translateStartFirst}</li>
          <li>translateMiddleFirst: {translateMiddleFirst}</li>
          <li>translateEndFirst: {translateEndFirst}</li>
        </ol>
      </motion.div>

      <motion.div 
        className="flex items-center justify-center border-2 border-red-200 p-2 z-10 text-white bg-black"
        style={{ y: ySecond }}

      >
        <ol>
          <li>Component num: 1</li>
          <li>translateStartSecond: {translateStartSecond}</li>
          <li>translateMiddleSecond: {translateMiddleSecond}</li>
          <li>translateEndSecond: {translateEndSecond}</li>
        </ol>   
      </motion.div>

      <motion.div 
        className="flex items-center justify-center border-2 border-red-200 p-2 z-10 text-white bg-black"
        style={{ y: yThird }}
      >
        <ol>
          <li>Component num: 3.</li>
          <li>translateStartThird: {translateStartThird}</li>
          <li>translateMiddleThird: {translateMiddleThird}</li>
          <li>translateEndThird: {translateEndThird}</li>
        </ol>        
      </motion.div>

      <div className="flex items-center justify-center border-2 border-red-200 p-2 z-10 text-white bg-black">
        <ol>
          <li>Component num: {num}</li>
          <li>----</li>
          <li>--Static--</li>
          <li>----</li>
        </ol>   
      </div>
    </BackgroundWrapper>
  );
}

export default ParallaxTest;
