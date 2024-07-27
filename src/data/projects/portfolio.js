import { BsYoutube, BsGithub } from "react-icons/bs";
import { TfiWorld } from 'react-icons/tfi';

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
  SiFastapi, SiMongodb, SiTailwindcss,SiVercel,
  SiJavascript, SiStreamlit, SiRedux,
  SiApachespark, SiChartdotjs, SiJupyter,
  SiTypescript
} from "react-icons/si";

import { TbBrandFramerMotion } from "react-icons/tb";


const short = "My original portfolio.";
const long = (
  <div className='space-y-2'>
    <p>
      This is the second version of my personal portfolio website, showcasing my projects, skills, and experiences. Built using React and Tailwind CSS, it highlights significant improvements in organization, animations, and the use of reusable components over the initial version.
    </p>
    <p>
      The portfolio features a clean and modern design, providing an overview of my work and contact information. The updated version ensures a more engaging and seamless user experience. The project is deployed using Vercel, demonstrating the use of modern web technologies to create an effective personal branding website.
    </p>
  </div>
);

export const portfolio = {
  starred: true,
  id: "portfolio",
  name: "My Portfolio V1",
  tag: "Frontend",
  blurb: short,
  description: long,
  images: [
    { src: "portfolio.jpg", blurhash: "L78g,54m9F_4X9V?aexv9Ft7s;I." },
  ],
  mainStack: [
    {name:"React", icon:FaReact, color:"lightblue"},
    {name:"Tailwind", icon:SiTailwindcss, color:"#38BDF9"},
  ],
  extendedStack: [
    {name:"Framer Motion", icon:TbBrandFramerMotion, color:"black"},
    {name:"Vercel", icon:SiVercel, color:"black"},
  ],
  externalLinks: [
    { name: "Code", link: "https://github.com/ChaceN89/Portfolio-ChaceNielson", icon: BsGithub },
    // code for seciond profolio 
  ],
};
