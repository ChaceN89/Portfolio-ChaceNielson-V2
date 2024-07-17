import React from 'react'
import { motion } from 'framer-motion';


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
    &nbsp;&nbsp; Code. Create. Innovate. Code. Create. Innovate. Code. Create. Innovate. Code. Create. Innovate. Code. Create. Innovate. Code. Create. Innovate. Code. Create. Innovate. Code. Create. Innovate. Code. Create. Innovate. Code. Create. Innovate. Code. Create. Innovate. Code. Create. Innovate.
  </motion.div>
  )
}

export default SlidingText