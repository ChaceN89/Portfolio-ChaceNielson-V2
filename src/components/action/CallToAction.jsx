import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import ImageComponent from '../resuableComponents/ImageComponent';


function CallToAction() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 80]);

  return (
    <section 
      id="CallToAction"
      className='section-wrapper  overflow-hidden relative flex items-center justify-center '
    >
      <div className='border-2 border-white p-4 bg-secondary text-primary'>
      <div>Let's Connect</div>
      Little blurb about working with people and how to get in touch - lets work together button takes you to the contact section
      <div>Lets Work Together</div>

      </div>


      <div className="w-full h-full flex justify-center items-end absolute inset-0 z-0 opacity-20">
        <motion.div className="w-full absolute z-5" style={{ y: y1 }}>
          <ImageComponent
            src={`${process.env.PUBLIC_URL}/logos/mountains2.png`}
            alt="Mountains Back"
            className="w-full"
          />
        </motion.div>
      </div> 
    </section>
  )
}

export default CallToAction


