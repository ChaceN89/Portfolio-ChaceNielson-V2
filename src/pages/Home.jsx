import React from 'react';
import { Outlet } from 'react-router-dom';
import Intro from '../components/IntroSection/Intro';
import Navbar from '../components/navbar/Navbar';
import AboutMe from '../components/aboutMe/AboutMe';
import Footer from '../components/footer/Footer';
import ContactForm from '../components/contactMe/ContactForm';
import ProjectSection from '../components/Projects/ProjectSection';
import Line from '../components/resuableComponents/Line';

function Home() {
  
  return (
    <div>
      <Navbar />
      <Intro />
      <Line/>
      <AboutMe />
      <Line/>
      <ProjectSection/>

      <Line/>
      <ContactForm/>

      <Footer />

      
      <Outlet />
    </div>
  );
}

export default Home;
