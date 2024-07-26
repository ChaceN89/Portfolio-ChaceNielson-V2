

import Hero from '../homeSections/hero/Hero';
import CallToAction from '../homeSections/callToAction/CallToAction';

import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <div id='Home'>
        <Hero/>
        <CallToAction />
        <div className='h-60 w-72 flex space-x-4 p-20'>

          <Link className=' h-10 border-2 border-white bg-purple-200 text-black hover:text-purple-200 hover:bg-red-300' to="/photos">Photos</Link>
          <Link className=' h-10 border-2 border-white bg-purple-200 text-black hover:text-purple-200 hover:bg-red-300' to="/project/a">Projects</Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;  