import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ImageComponent from '../../wrappers/ImageComponent';

function ParallaxMountains() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 240]);
  const y2 = useTransform(scrollY, [0, 500], [0, 180]);
  const y3 = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <div className=" md:w-full h-full flex justify-center items-end absolute inset-0 z-0 opacity-15">
      <motion.div className="w-full absolute z-5" style={{ y: y1 }}>
        <ImageComponent
          src={`${process.env.PUBLIC_URL}/png-backgrounds/hero-mountains/mountains-back.png`}
          alt="Mountains Back"
          className="w-full object-cover md:object-contain md:h-auto h-full scale-150 sm:scale-100"
        />
      </motion.div>
      <motion.div className="w-full absolute z-10" style={{ y: y2 }}>
        <ImageComponent
          src={`${process.env.PUBLIC_URL}/png-backgrounds/hero-mountains/mountains-mid.png`}
          alt="Mountains Mid1"
          className="w-full object-cover md:object-contain md:h-auto h-full scale-150 sm:scale-100"
        />
      </motion.div>
      <motion.div className="w-full absolute z-15" style={{ y: y3 }}>
        <ImageComponent
          src={`${process.env.PUBLIC_URL}/png-backgrounds/hero-mountains/mountains-front.png`}
          alt="Mountains Mid2"
          className="w-full  object-cover md:object-contain md:h-auto h-full scale-150 sm:scale-100"
        />
      </motion.div>
    </div>
  );
}

export default ParallaxMountains;
