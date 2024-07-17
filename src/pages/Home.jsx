import React from 'react';
import { Outlet } from 'react-router-dom';
import Hero from '../components/hero/Hero';
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

      <main className='mt-12'>
        <div  id="Home">
          <Hero/>
          <CallToAction />
          <Line/>
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
      </main>

      <Footer />
          
      <Outlet />
    </div>
  );
}

export default Home;
