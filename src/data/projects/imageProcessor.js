import { TfiWorld } from 'react-icons/tfi';
import { BsGithub } from "react-icons/bs";


// icons for skills
import { FaReact, FaNodeJs, FaUnity, FaCss3Alt, FaDocker, FaNode } from "react-icons/fa";

import { SiRailway } from "react-icons/si";



import { AiOutlineGithub } from "react-icons/ai";
import { GrMysql } from "react-icons/gr";
import { TiHtml5 } from "react-icons/ti";
import { DiPostgresql } from "react-icons/di";
import { ImGit } from "react-icons/im";
import { 
  SiFastapi, SiMongodb, SiTailwindcss,
  SiJavascript, SiStreamlit, SiRedux,
  SiApachespark, SiChartdotjs, SiJupyter,
  SiTypescript
} from "react-icons/si";

const short = "Image processing task queue using React and FastAPI.";
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
  blurhash: "",
  images: [
    { src: "imageProcessor.jpg", blurhash: "LFEseT-^{v9#LfUvK%%M2hD19[#8" },
  ],
  mainStack:[
    {name:"React", icon:FaReact, color:"lightblue"},
    {name:"FastAPI", icon:SiFastapi, color:"#079487"},
    {name:"TypeScript", icon:SiTypescript, color:"#38BDF9"},
  ],
  extendedStack:[
    {name:"Python", svg_path:"python.svg"},
    {name:"Railway", icon:SiRailway, color:"black"},
  ],
  externalLinks: [
    { name: "Website", link: "https://main--img-processor.netlify.app/", icon: TfiWorld },
    { name: "Code", link: "https://github.com/ChaceN89/image-processor", icon: BsGithub },
  ],
};
