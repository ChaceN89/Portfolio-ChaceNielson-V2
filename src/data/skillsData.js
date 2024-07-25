
// icons for skills
import { FaReact, FaNodeJs, FaUnity, FaNode } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { DiPostgresql } from "react-icons/di";
import { ImGit } from "react-icons/im";
import { SiFastapi, SiTailwindcss, SiJavascript} from "react-icons/si";
import { MdOutlineAnimation } from "react-icons/md";

 
export const techSkills = [
  { // Web Design 
    name: "Web Design", 
    description: "I have been designing web applications for 2 years. My main frontend stack includes React, JavaScript, and TailwindCSS.", 
    topSkills: [
      { name:"React", icon: FaReact, color: "lightblue" },
      { name:"JavaScript", icon:SiJavascript, color: "yellow" },
      { name:"TailwindCSS", icon:SiTailwindcss, color: "#38BDF9" },
      { name:"Node.js", icon:FaNode, color: "#68A063" },
    ],
    minorSkills: [
      "Vue", "AWS", "Netlify", "Vercel", "TypeScript", "Chart.js", "Redux", "HTML5", "CSS", "Framer Motion",
    ]
  },
  { // Backend Design 
    name: "Backend Design", 
    description: "I have been designing backend applications for 2 years. My main backend stack includes Python, FastAPI, and PostgreSQL.", 
    topSkills: [
      { name:"Python", SVG_path:"python.svg" },
      { name:"Express.js", icon:FaNodeJs, color: "#079487" },
      { name:"FastAPI", icon:SiFastapi, color: "yellow" },
      { name:"PostgreSQL", icon:DiPostgresql, color: "white" },
    ],
    minorSkills: [
      "Plotly Dash", "Streamlit", "Django",
      "MongoDB", "MySQL", "SQLite", "Docker", "REST API", 
    ]
  },
  { // Engineering
    name: "Engineering", 
    description: "I hold a degree in Software Engineering from the University of Calgary.", 
    topSkills: [
      { name:"Git", icon:ImGit, color: "#EE513B" },
      { name:"GitHub", icon:AiOutlineGithub, color: "white" },
      { name:"Java", SVG_path:"java.svg" },
      { name:"C++", SVG_path:"c-plus-plus.svg" },
    ],
    minorSkills: [
      "Jupyter Notebook", "Hadoop", "Apache Spark", "VS Code", "CI/CD"
    ]
  },
  { // Game Design 
    name: "Game Design", 
    description: "I have worked with Unity and Blender to create 3D games and animations.", 
    topSkills: [
      { name:"Unity", icon:FaUnity, color: "white" },
      { name:"Blender", SVG_path:"blender.svg" },
      { name:"C#", SVG_path:"c-sharp.svg" },
      { name:"Animation", icon:MdOutlineAnimation, color: "white" },
    ],
    minorSkills: [
      "Game Design", "Animation", "Game Physics", 
    ]
  },
]
