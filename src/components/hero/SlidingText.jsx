import React from 'react'
import { motion } from 'framer-motion';
import { ImGlass2 } from 'react-icons/im';


function SlidingText() {
  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-2000%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 180,
        ease: "linear",
        delay: 0,
      },
    },
  };

  return (
    <motion.div
    className="sliding-text-container"
    variants={sliderVariants}
    initial="initial"
    animate="animate"
  >
    {/* &nbsp;&nbsp; Code. Create. Innovate. Code. Create. Innovate. Code. Create. Innovate. Code. Create. Innovate. Code. Create. Innovate. Code. Create. Innovate. Code. Create. Innovate. Code. Create. Innovate. Code. Create. Innovate. Code. Create. Innovate. Code. Create. Innovate. Code. Create. Innovate. Innovate. Code. Create. Innovate. Innovate. Code. Create. Innovate. Innovate. Code. Create. Innovate. Innovate. Code. Create. Innovate. Innovate. Code. Create. Innovate. Innovate. Code. Create. Innovate. Innovate. Code. Create. Innovate. */}

    <div className='flex gap-1'>
      <img src={`${process.env.PUBLIC_URL}/logos/mountains2.png`} alt="Scroll" className=" mb-20 h-40 opacity-100" />
      <img src={`${process.env.PUBLIC_URL}/logos/mountains2.png`} alt="Scroll" className=" mb-20 h-40 opacity-100" />
      <img src={`${process.env.PUBLIC_URL}/logos/mountains2.png`} alt="Scroll" className=" mb-20 h-40 opacity-100" />
      <img src={`${process.env.PUBLIC_URL}/logos/mountains2.png`} alt="Scroll" className=" mb-20 h-40 opacity-100" />
      <img src={`${process.env.PUBLIC_URL}/logos/mountains2.png`} alt="Scroll" className=" mb-20 h-40 opacity-100" />
      <img src={`${process.env.PUBLIC_URL}/logos/mountains2.png`} alt="Scroll" className=" mb-20 h-40 opacity-100" />
      <img src={`${process.env.PUBLIC_URL}/logos/mountains2.png`} alt="Scroll" className=" mb-20 h-40 opacity-100" />
    </div>
  </motion.div>
  )
}

export default SlidingText