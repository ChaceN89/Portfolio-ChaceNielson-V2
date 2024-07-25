import React from 'react';
import Navbar from '../components/navbar/Navbar';
import { Outlet } from 'react-router-dom';

import Hero from '../components/hero/Hero';
import CallToAction from '../components/callToAction/CallToAction';
import AboutMe from '../components/aboutMe/AboutMe';
import Experience from '../components/experience/Experience';
import ProjectSection from '../components/Projects/ProjectSection';
import ContactForm from '../components/contactMe/ContactForm';
import Footer from '../components/footer/Footer';
import Line from '../components/common/uiElements/Line';

function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <div id='Home' className='mt-12'>
          <Hero/>
          <CallToAction />
        </div>
        <div id='AboutMe'>
          <AboutMe />
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
