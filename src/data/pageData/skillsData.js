import React from 'react';
import { FaReact, FaNodeJs, FaUnity, FaNode } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { DiPostgresql } from "react-icons/di";
import { ImGit } from "react-icons/im";
import { SiFastapi, SiTailwindcss, SiJavascript } from "react-icons/si";
import { MdOutlineAnimation } from "react-icons/md";
import { Link } from 'react-router-dom';


export const skillPageData = {
  title: "Technical Skills",
  description: "A Comprehensive Overview of My Technical Expertise",
};

const SkillLink = ({ link, name }) => (
  <Link 
    to={"/skills/" + link}
    className="text-accent hover:text-accent-dark cursor-pointer"
  >
    {name}
  </Link>
);


export const techSkills = [
  { // Web Design 
    id: "web-design",
    name: "Web Design", 
    description: (
      <span>
        I have been designing web applications for 2 years. My main frontend stack includes React, JavaScript, and TailwindCSS. <SkillLink link="web-design" name="View More skills."/>
      </span>
    ),
    topSkills: [
      { name: "React", icon: FaReact, color: "lightblue" },
      { name: "JavaScript", icon: SiJavascript, color: "yellow" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "#38BDF9" },
      { name: "Node.js", icon: FaNode, color: "#68A063" },
    ],
    minorSkills: [
      "Vue", "AWS", "Netlify", "Vercel", "TypeScript", "Chart.js", "Redux", "HTML5", "CSS", "Framer Motion",
    ],
  },
  { // Backend Design 
    id: "backend-design",
    name: "Backend Design", 
    description: (
      <span>
        I have been designing backend applications for 2 years. My main backend stack includes Python, Express.js, FastAPI, and PostgreSQL. <SkillLink link="backend-design" name="View More skills."/>
      </span>
    ),
    topSkills: [
      { name: "Python", SVG_path: "python.svg" },
      { name: "Express.js", icon: FaNodeJs, color: "#079487" },
      { name: "FastAPI", icon: SiFastapi, color: "yellow" },
      { name: "PostgreSQL", icon: DiPostgresql, color: "white" },
    ],
    minorSkills: [
      "Plotly Dash", "Streamlit", "Django", "MongoDB", "MySQL", "SQLite", "Docker", "REST API",
    ],
  },
  { // Engineering
    id: "engineering",
    name: "Engineering", 
    description: (
      <span>
        I have been working on engineering projects for 2 years. My main engineering stack includes Git, GitHub, Java, and C++. <SkillLink link="engineering" name="View More skills."/>
      </span>
    ),
    topSkills: [
      { name: "Git", icon: ImGit, color: "#EE513B" },
      { name: "GitHub", icon: AiOutlineGithub, color: "white" },
      { name: "Java", SVG_path: "java.svg" },
      { name: "C++", SVG_path: "c-plus-plus.svg" },
    ],
    minorSkills: [
      "Jupyter Notebook", "Hadoop", "Apache Spark", "VS Code", "CI/CD",
    ],
  },
  { // Game Design 
    id: "game-design",
    name: "Game Design", 
    description: (
      <span>
        I have worked with Unity and Blender to create 3D games and animations. <SkillLink link="game-design" name="View More skills."/>
      </span>
    ),
    topSkills: [
      { name: "Unity", icon: FaUnity, color: "white" },
      { name: "Blender", SVG_path: "blender.svg" },
      { name: "C#", SVG_path: "c-sharp.svg" },
      { name: "Animation", icon: MdOutlineAnimation, color: "white" },
    ],
    minorSkills: [
      "Game Design", "Animation", "Game Physics",
    ],
  },
];
