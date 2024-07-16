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

function Home() {
  
  return (
    <div>
      <Navbar />
      <section id="Home">
        <Hero/>
        <CallToAction />
        <Line/>
      </section>
      <section id='AboutMe'>
        <AboutMe />
        <MySkills/>
        <Line/>
        <Experience/>
      </section>
      <section id='Projects'>
        <ProjectSection/>
        <Line/>
      </section>
      <section id='ContactMe'>
        <ContactForm/>
      </section>

      <Footer />

      <Outlet />
    </div>
  );
}

export default Home;
