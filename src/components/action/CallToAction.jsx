import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ImageComponent from '../resuableComponents/ImageComponent';
import Button from '../resuableComponents/Button';

function CallToAction() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500, 1000], [-100, 0, 100]);

  return (
    <section 
      id="CallToAction"
      className='section-wrapper-height overflow-hidden relative flex items-center justify-center px-6'
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/logos/range-b&w2-trim.png)`,
        backgroundSize: 'contain', // This makes the background image smaller
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed', // This makes the background image stay fixed
      }}
    >

      {/* add parallax effect here */}
      <motion.div 
        className='border-2 border-white bg-primary text-secondary bg-opacity-90 rounded-lg flex h-full items-center'
        style={{ y }}
      >        <ImageComponent 
          src="/logos/chace3.png"
          alt="Range Logo"
          className="h-56 md:h-96"
        />

        {/* need better mountain pun in future */}
        <div className='p-4 flex flex-col justify-center h-full text-left max-w-md'>
          <h2 >Ready to Bring Your Vision to Life? </h2>
          <h4 className='mt-2'>Every <span className='text-accent'>Great Journey </span> begins with a single step. Let's tackle your next big project together and reach new heights. Whether it's an ambitious idea or a creative challenge, I'm here to help you conquer it.</h4>
          <div className='mt-6'>
            <Button to="ContactMe" smooth={true} duration={1000}>
              Message Me
            </Button>
          </div>
        </div>

        </motion.div>

      <div className="w-full h-full flex justify-center items-end absolute inset-0 z-0 opacity-20">
        <div className="w-full absolute z-5" >
          absolute component
        </div>
      </div> 
    </section>
  );
}

export default CallToAction;
