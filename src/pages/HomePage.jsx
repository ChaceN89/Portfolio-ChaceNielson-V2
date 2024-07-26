import BackgroundWrapper from "../wrappers/BackgroundWrapper";
import { Link } from "react-router-dom";


import Hero from '../homeSections/hero/Hero';

const HomePage = () => {
  return (
    <>

    </>
    // <BackgroundWrapper 
    //   className=' h-screen relative'
    //   src={process.env.PUBLIC_URL + "/png-backgrounds/detailed/range-b&w2.png"}
    //   bgOpacity={75}
    // >
    //   <div className='flex space-x-3'>
    //     <h1>Home Page</h1>
    //     <Link className='hover:text-accent' to="/skills/Backend">Open Backend Skills</Link>
    //     <Link className='hover:text-accent' to="/skills/WebDesign">Open WebDesign Skills</Link>
    //     <Link className='hover:text-accent' to="/project/GeoPredict">Open GeoPredict Poject</Link>
    //   </div>

    // <div className='space-x-4'>

    //   <Link className='hover:text-accent' to="/photos">Open Photos</Link>
    //   <Link className='hover:text-accent' to="/thanks">Open Thanks</Link>
    // </div>

    // </BackgroundWrapper>
  );
};

export default HomePage;  