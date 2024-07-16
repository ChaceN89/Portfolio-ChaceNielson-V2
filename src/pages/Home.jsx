import React from 'react';
import { Outlet } from 'react-router-dom';
import Hero from '../components/IntroSection/Hero';
import Navbar from '../components/navbar/Navbar';
import AboutMe from '../components/aboutMe/AboutMe';
import Footer from '../components/footer/Footer';
import ContactForm from '../components/contactMe/ContactForm';
import ProjectSection from '../components/Projects/ProjectSection';
import Line from '../components/resuableComponents/Line';
import CallToAction from '../components/action/CallToAction';
import MySkills from '../components/skills/MySkills';
import Experience from '../components/experience/Experience';
import ColorBoxes from '../testingComponents/ColorBoxes';

function Home() {

  return (
    <div>
      <Navbar />
      <div className='nav-area mt-12' id="Home">
        <Hero/>
        <CallToAction />
        <Line/>
      </div>
      <ColorBoxes/>

      <div className='nav-area' id='AboutMe'>
        <AboutMe />
        <MySkills/>
        <Line/>
        <Experience/>
      </div>

      <div className='nav-area' id='Projects'>
        <ProjectSection/>
        <Line/>
      </div>
      
      <div className='nav-area' id='ContactMe'>
        <ContactForm/>
      </div>
      <Footer />
          
      <Outlet />
    </div>
  );
}

export default Home;
