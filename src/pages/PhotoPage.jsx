import BackgroundWrapper from "../wrappers/BackgroundWrapper";
import { Link } from "react-router-dom";

const PhotoPage = () => {
  return (

    <BackgroundWrapper 
      className='space-x-4 h-screen'
      src={process.env.PUBLIC_URL + "/png-backgrounds/detailed/range-b&w3-mountain.png"}
      bgOpacity={75}
      backgroundAttachment='scroll'
    >
        
      <h1 className="container mx-auto pl-10 pt-32">My Photos </h1>

      <div className="">
        Gallery
      </div>
      
    </BackgroundWrapper>
  );
};

export default PhotoPage;