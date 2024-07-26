import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Hero from '../components-old/hero/Hero';
import CallToAction from '../components-old/callToAction/CallToAction';
import AboutMe from '../components-old/aboutMe/AboutMe';
import JobExperience from '../components-old/jobExperience/JobExperience';
import ProjectSection from '../components-old/Projects/ProjectSection';
import ContactForm from '../components-old/contactMe/ContactForm';
import Line from '../components-old/common/uiElements/Line';

function Home() {
  const location = useLocation();

  return (
    <>
      <div id='Home'>
        <Hero/>
        <div className='flex space-x-3 p-10'>
          <NavLink
            className="border-2 border-white rounded-xl p-4 hover:bg-white hover:text-black"
            to="/projects/proj1"
            state={{ previousLocation: location }}
          >
            Project1 Link
          </NavLink>
          <NavLink
            className="border-2 border-white rounded-xl p-4 hover:bg-white hover:text-black"
            to="/skills/webDesign"
            state={{ previousLocation: location }}
          >
            Webdesign
          </NavLink>
        </div>
        <CallToAction />
      </div>
      <div id='AboutMe'>
        <AboutMe />
        <JobExperience/>
      </div>
      <div id='Projects'>
        <ProjectSection/>
        <Line/>
      </div>
      <div id='ContactMe'>
        <ContactForm/>
      </div>
    </>
  );
};

export default Home;
