

import Hero from '../homeSections/hero/Hero';
import CallToAction from '../homeSections/callToAction/CallToAction';
import AboutMe from '../homeSections/aboutMe/AboutMe';
import JobExperience from '../homeSections/jobExperience/JobExperience';

import ReturnToTop from '../components/uiElements/ReturnToTop';

import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <div id='Home'>
        <Hero/>
        <div className='h-60 w-72 flex space-x-4 p-20'>

          <Link className='rounded-2xl  p-4  border-2 border-white bg-purple-200 text-black hover:text-purple-200 hover:bg-red-300' to="/photos">Photo page</Link>
          <Link className='rounded-2xl  p-4  border-2 border-white bg-purple-200 text-black hover:text-purple-200 hover:bg-red-300' to="/project/proj1">Project 1</Link>
        </div>
        <CallToAction />

      </div>
      <div id='AboutMe'>
          <AboutMe />
          <JobExperience/>
        </div>

      {/* ReturnToTop button positioned absolutely within BackgroundWrapper */}
      <ReturnToTop />
    </>
  );
};

export default HomePage;  