

import Hero from '../homeSections/hero/Hero';
import CallToAction from '../homeSections/callToAction/CallToAction';
import AboutMe from '../homeSections/aboutMe/AboutMe';
import JobExperience from '../homeSections/jobExperience/JobExperience';
import ProjectSection from '../homeSections/projects/ProjectSection';
import ContactForm from '../homeSections/contactForm/ContactForm';

import ReturnToTop from '../components/uiElements/ReturnToTop';


const HomePage = () => {
  return (
    <>
      <div id='Home'>
        <Hero/>
        <CallToAction />
      </div>
      <div id='AboutMe'>
        <AboutMe />
        <JobExperience/>
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