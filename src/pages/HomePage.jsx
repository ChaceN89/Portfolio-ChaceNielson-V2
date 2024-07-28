import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { animateScroll as scroll, scroller } from 'react-scroll';

import Hero from '../homeSections/hero/Hero';
import CallToAction from '../homeSections/callToAction/CallToAction';
import TechSkills from '../homeSections/techSkills/TechSkills';
import JobExperience from '../homeSections/jobExperience/JobExperience';
import Interests from '../homeSections/interests/Interests';
import ProjectSection from '../homeSections/projects/ProjectSection';
import ContactForm from '../homeSections/contactForm/ContactForm';

import ReturnToTop from '../components/uiElements/ReturnToTop';
import SlideTransition from '../routing/SlideTransition';

import { globals } from '../data/globals';

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace('#', '');
      scroller.scrollTo(sectionId, {
        offset: globals.ScrollLink.offset +15,  // Adjust this offset based on your fixed navbar height
        duration: globals.ScrollLink.duration,
        spy:true,
        smooth:true
      });
    } else {
      scroll.scrollToTop();
    }
  }, [location]);

  return (
    <>
      <div id='Home'>
        <Hero />
        <CallToAction />
      </div>
      <div id='AboutMe'>
        <TechSkills/>
        <hr />
        <JobExperience/>
        <hr />
        <Interests/>
      </div>
      <div id='Projects'>
        <ProjectSection />
      </div>
      <div id='ContactMe'>
        <ContactForm />
      </div>
      <ReturnToTop />
    </>
  );
};

export default HomePage;
