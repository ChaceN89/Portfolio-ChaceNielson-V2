import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ImageComponent from '../common/layout/ImageComponent';

function ParallaxMountains() {
  const { scrollY } = useScroll();
  // the first array is the range of the scrollY value [0] is the start and [500] is the end
  // the second array is the range of the movement [0] is the start and [80] is the end
  // the last number of the 4 in the useTransform function is the distance the image will move
  const y1 = useTransform(scrollY, [0, 500], [0, 280]);
  const y2 = useTransform(scrollY, [0, 500], [0, 200]); 

  return (
    <div className="w-full h-full flex justify-center items-end absolute inset-0 z-0 opacity-15 ">
      <motion.div className="w-full absolute z-5" style={{ y: y1 }}>
        <ImageComponent
          src={`${process.env.PUBLIC_URL}/png-backgrounds/hero-mountains/mountains-back.png`}
          alt="Mountains Back"
          className="w-full"
        />
      </motion.div>
      <motion.div className="w-full absolute z-10" style={{ y: y2 }}>
        <ImageComponent
          src={`${process.env.PUBLIC_URL}/png-backgrounds/hero-mountains/mountains-mid.png`}
          alt="Mountains Mid1"
          className="w-full"
        />
      </motion.div>
      <motion.div className="w-full absolute z-15">
        <ImageComponent
          src={`${process.env.PUBLIC_URL}/png-backgrounds/hero-mountains/mountains-front.png`}
          alt="Mountains Mid2"
          className="w-full"
        />
      </motion.div>
    </div>
  );
}

export default ParallaxMountains;
