/**
 * @file imageProcessor.js
 * @module imageProcessor
 * @desc Contains data for the Image Task Queue project.
 * 
 * @name Image Task Queue
 * 
 * @ChaceN89
 * @created 2024-07-28
 * @updated 2024-07-28
 */

import IconSkills from "../iconSkills";

// Short description (blurb) to be displayed on the project card
const short = "Image processing task queue using React and FastAPI.";

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className='space-y-2'>
    <p>
      This project is an image processing task queue built with React and FastAPI. Users can upload images for processing, which are managed efficiently in a queue. The application is developed using TypeScript and showcases the seamless integration of frontend and backend technologies to handle asynchronous image processing tasks.
    </p>
    <p>
      Deployed on Railway, the system ensures efficient task management and provides a responsive user interface for monitoring the status of image processing jobs. It demonstrates robust handling of image processing workflows, delivering an effective solution for managing and processing large volumes of images asynchronously.
    </p>
  </div>
);

export const imageProcessor = {
  starred: true,
  id: "image-processor",
  name: "Image Task Queue",
  tag: "Full-Stack",
  blurb: short,
  description: long,
  images: [
    { src: "imageProcessor.jpg", blurhash: "LFEseT-^{v9#LfUvK%%M2hD19[#8" },
  ],
  mainStack:[
    IconSkills.REACT,
    IconSkills.FASTAPI,
    IconSkills.TYPESCRIPT,
  ],
  extendedStack:[
    IconSkills.PYTHON,
    IconSkills.RAILWAY,
  ],
  externalLinks: [
    { name: "Website", link: "https://main--img-processor.netlify.app/", icon: IconSkills.WORLD.icon },
    { name: "Code", link: "https://github.com/ChaceN89/image-processor", icon: IconSkills.GITHUB.icon },
  ],
};
