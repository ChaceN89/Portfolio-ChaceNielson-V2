import React from 'react';
import Navbar from '../components/navbar/Navbar';
import { Outlet } from 'react-router-dom';


import Hero from '../components/hero/Hero';
import Footer from '../components/footer/Footer';

import AboutMe from '../components/aboutMe/AboutMe';
import ContactForm from '../components/contactMe/ContactForm';
import ProjectSection from '../components/Projects/ProjectSection';
import Line from '../components/common/uiElements/Line';
import CallToAction from '../components/action/CallToAction';
import MySkills from '../components/skills/MySkills';
import Experience from '../components/experience/Experience';
import ColorBoxes from '../testingComponents/ColorBoxes';

import ImageComponent from '../components/common/layout/ImageComponent';

function Home() {

  return (
    <div>
      <Navbar />
      <main>
        <div id='Home' className='mt-12'>
          <Hero/>
          <div className='container mx-auto bg-pink-300 h-40'>Text </div>

        </div>
      </main>


      {/* <main className='mt-12'>
        <div  id="Home">
          <CallToAction />
        </div>
        <ColorBoxes/>

        <div id='AboutMe'>
          <AboutMe />
          <MySkills/>
          <Line/>
          <Experience/>
        </div>

        <div id='Projects'>
          <ProjectSection/>
          <Line/>
        </div>
        
        <div id='ContactMe'>
          <ContactForm/>
        </div>
      </main> */}

      <Footer />
          
      <Outlet />
    </div>
  );
}

export default Home;
