import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ImageComponent from '../common/layout/ImageComponent';
import Button from '../common/uiElements/Button';
import BackgroundWrapper from '../common/layout/BackgroundWrapper';

const parallaxConfig = {
  scrollRange: [0, 500, 1000],
  translateYRange: [-100, 0, 100],
};

function CallToAction() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, parallaxConfig.scrollRange, parallaxConfig.translateYRange);

  return (
    <BackgroundWrapper
      id="CallToAction"
      className="section-wrapper-height overflow-hidden relative flex items-center justify-center px-6"
      src={process.env.PUBLIC_URL + "/png-backgrounds/detailed/range-b&w2-trim.png"}
      lowResSrc={process.env.PUBLIC_URL + "/png-backgrounds/detailed/range-b&w2-trim-small.png"}
      backgroundSize='contain'
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
      backgroundAttachment='fixed'
    >
      <motion.div 
        className='border-2 border-white bg-primary text-secondary bg-opacity-90 rounded-lg flex items-center justify-center z-10'
        style={{ y }}
      >
        <ImageComponent 
          src="/png-portraits/chace-3.png"
          alt="Range Logo"
          className="h-56 md:h-96"
        />

        <div className='p-4 flex flex-col justify-center text-left max-w-md'>
          <h2>Ready to Bring Your Vision to Life?</h2>
          <h4 className='mt-2'>Every <span className='text-accent'>Great Journey</span> begins with a single step. Let's tackle your next big project together and reach new heights. Whether it's an ambitious idea or a creative challenge, I'm here to help you conquer it.</h4>
          <div className='mt-6'>
            <Button to="ContactMe" smooth={true} duration={1000}>
              Message Me
            </Button>
          </div>
        </div>
      </motion.div>

      <div className="w-full h-full flex justify-center items-end absolute inset-0 z-0 opacity-20">
        <div className="w-full absolute z-5">
          absolute component
        </div>
      </div> 
    </BackgroundWrapper>
  );
}

export default CallToAction;
