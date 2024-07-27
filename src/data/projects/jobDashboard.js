import { TfiWorld } from 'react-icons/tfi';
import { BsGithub } from "react-icons/bs";

// icons for skills
import { FaReact, FaNodeJs, FaUnity, FaCss3Alt, FaDocker, FaNode } from "react-icons/fa";
import { SiSqlite } from "react-icons/si";

import { SiRender } from "react-icons/si";



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


const short = "Job dashboard for managing job applications and interviews.";
const long = (
  <div className='space-y-2'>
    <p>
      This project is a job dashboard application designed to help users manage their job applications and interviews. It is built with Vue.js and FastAPI, and uses SQLite for data storage.
    </p>
    <p>
      The application features a clean and intuitive interface, making it easy for users to track their job search progress. It also includes various tools for organizing and analyzing job applications.
    </p>
    <p>
      The project is deployed using Netlify and Render, showcasing the integration of frontend and backend technologies for a seamless user experience.
    </p>
  </div>
);

export const jobDashboard = {
  starred: true,
  id: "job-dashboard",
  name: "Job Dashboard",
  tag: "Full-Stack",
  blurb: short,
  description: long,
  images: [
    { src: "jobDashboard.jpg", blurhash: "L7Op#=4mxu?cE2IokBxb9+%jj=Mv" },
  ],
  mainStack:[
    {name:"Vue", svg_path:"vue.svg"},
    {name:"Tailwind", icon:SiTailwindcss, color:"#38BDF9"},
    {name:"FastAPI", icon:SiFastapi, color:"#079487"},
    {name:"SQLite", svg_path:"sqlite.svg"}, 
  ],
  extendedStack:[
    {name:"Full-Stack", svg_path:"full-stack.svg"},
    {name:"Python", svg_path:"python.svg"},
    {name:"Netlify", svg_path:"netlify.svg"},
    {name:"Render", icon:SiRender, color:"black"},
  ],
  externalLinks: [
    { name: "Website", link: "https://job-dashboard-chace.netlify.app/", icon: TfiWorld },
    { name: "Code", link: "https://github.com/ChaceN89/job-dashboard", icon: BsGithub },
  ],
};
