import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { globals } from '../../googleAnalytics/globals';

function HeroText() {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };


  return(
    <div className='border-2 border-red-600
    2xl:w-3/5
    '>
      <h3 className='hover:bg-red-400'>Hi my name is</h3>
      <h1>CHACE NIELSON</h1>
      <div> I am a software developer with a passion for music and the outdoors. I have a background in engineering and have worked on a variety of projects from web design to unity games. I am always looking for new challenges and opportunities to learn.</div>



    </div>
  )



  return (
    <div className="flex flex-col justify-center gap-1 p-4 border-4 border-pink-800 w-3/5 z-5">
        <h3 className='hover:bg-red-400'>Hi my name is</h3>
        <h1>CHACE NIELSON</h1>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquam exercitationem commodi excepturi neque minus.</h3>
        <div className="buttons flex justify-center md:justify-start">
          <ScrollLink 
            to="Projects"
            spy={true}
            smooth={true}
            offset={globals.ScrollLink.offset} 
            duration={globals.ScrollLink.duration}
            className="p-5 border border-white rounded-lg bg-transparent text-white mr-5 hover:cursor-pointer font-light"
          >
            My Projects</ScrollLink>
          <button className="p-5 border border-white rounded-lg bg-transparent text-white cursor-pointer font-light">Let's work Together</button>
        </div>
      </div>
  )
}

export default HeroText