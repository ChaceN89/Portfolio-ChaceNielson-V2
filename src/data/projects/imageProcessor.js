import { TfiWorld } from 'react-icons/tfi';
import { BsGithub } from "react-icons/bs";

const short = "Image processing task queue using React and FastAPI.";
const long = (
  <div className='space-y-2'>
    <p>
      This project is an image processing task queue built with React and FastAPI. It allows users to upload images for processing and manages the tasks in a queue.
    </p>
    <p>
      The application uses TypeScript and is deployed using Railway. It demonstrates the integration of frontend and backend technologies to handle asynchronous image processing tasks.
    </p>
    <p>
      The system ensures efficient task management and provides a responsive user interface for monitoring the status of image processing jobs.
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
  blurhash: "",
  images: [
    { src: "imageProcessor1.jpg", blurhash: "" },
    { src: "imageProcessor2.jpg", blurhash: "" },
  ],

  mainStack:[
    "React",
    "TypeScript",
    "FastAPI",
    "Railway"
  ],
  fullStack:[
    "React",
    "TypeScript",
    "FastAPI",
    "Railway"
  ],
  externalLinks: [
    { name: "Website", link: "https://main--img-processor.netlify.app/", icon: TfiWorld },
    { name: "Code", link: "https://github.com/ChaceN89/image-processor", icon: BsGithub },
  ],
};
