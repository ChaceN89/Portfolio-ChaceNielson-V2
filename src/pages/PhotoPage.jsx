import BackgroundWrapper from "../wrappers/BackgroundWrapper";
import { Link } from "react-router-dom";

const PhotoPage = () => {
  return (

    <BackgroundWrapper 
      className='space-x-4 h-screen'
      src={process.env.PUBLIC_URL + "/png-backgrounds/detailed/range-b&w5-trim.png"}
      bgOpacity={75}
    >
      <div className='flex space-x-3'>
        
        <h1>Photo Page</h1>
        <Link className='hover:text-accent' to="/project/Project222">Open Project222 Poject</Link>
      
      </div>
      <Link className='hover:text-accent' to="/">Open Home</Link>
    </BackgroundWrapper>

  );
};

export default PhotoPage;