/**
 * @file geoPredict.js
 * @module geoPredict
 * @desc Contains data for the GEO Predict project.
 * 
 * @name GEO Predict
 * 
 * @ChaceN89
 * @created 2024-07-28
 * @updated 2024-07-28
 */

import { BsYoutube } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

// Icons for skills
import { FaReact, FaDocker } from "react-icons/fa";
import { SiFastapi, SiTailwindcss, SiPostgresql } from "react-icons/si";

// Short description (blurb) to be displayed on the project card
const short = "Full-Stack Web Application for analyzing drilling data.";

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className='space-y-2'>
    <p>
      GEO Predict is a full-stack web application that allows users to upload drilling data and analyze it using machine learning models. The application is built using React, FastAPI, and PostgreSQL. The front-end is built using React and Tailwind CSS, and the back-end is built using FastAPI and PostgreSQL. The application is deployed using Docker and the University of Calgary cloud stack.
    </p>
    <p>
      I completed this application while working at the Energi Simulation Centre for Geothermal Systems Research at the University of Calgary. The primary objective was to develop an application for managing drilling data files for geothermal wells. The application is designed to handle security, user authentication, and the management of sensitive drilling data. Users can join organizations and share data among themselves.
    </p>
    <p>
      In addition to providing dynamic real-time data visualizations, the application included a set of analysis tools that significantly enhanced drilling efficiency. These tools encompassed physics-based models and machine-learning modules. While I didn't personally create the analysis tools, I dedicated time to reviewing and integrating code authored by others into the web application.
    </p>
    <p>
      I assumed the role of project manager, which presented the opportunity to oversee a small team. My responsibilities involved task assignment, code reviews, as well as screening resumes, conducting interviews, and delivering presentations. The application has been utilized in drilling wells located in Germany, New Mexico, and Sweden.
    </p>
  </div>
);

export const geoPredict = {
  starred: true,
  id: "geo-predict", // id and folder name in the projects folder
  name: "GEO Predict",  
  tag: "Full-Stack",
  blurb: short, 
  description: long,
  images: [
    { src: "highlight.jpg", blurhash: "qC9G,ZtkS0tRR%ogNFoe9Xt7xubFt7RjWVRj_4V@M{jZRjofays;xVa}WYj[bHj[j[oKkYaeada{oJofkCkC^*flRkoMRkoeWBs." },
    { src: "crossPlot.jpg", blurhash: "q2Hog|GOtj%4nAwQ$n$-=OnBr_kBX4XNkUbq+S#uVtNYXfXNNrSb*EPKSva3nAm@m@nADhaMxcs;NFR%ozoy:vr2srgJS[Xfkob=" },
    { src: "homePage.jpg", blurhash: "qANAxJD*9Z%LNGxvRixu00t7?bV@-;R*%LWB~WaxD%bIIUt6M|WCIVt6adR+Rjn~WYR+00WBxtogs;j=j]a#IAj[RjjFWBWqV@of" },
    { src: "login.jpg", blurhash: "q7Mtjn8^xU-oVrxsn#t6xtRia_odj?a_axj[9a?wNyIpo$R.bcWC-=x^a%RnWFj^j]WV^kDinN%2nOnhjExaxWMwsjxWs*n#jYoJ" },
  ],
  mainStack: [
    { name: "React", icon: FaReact, color: "lightblue" },
    { name: "FastAPI", icon: SiFastapi, color: "#079487" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "white" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF9" },
  ],
  extendedStack: [
    { name: "Full-Stack", svg_path: "full-stack.svg" },
    { name: "Python", svg_path: "python.svg" },
    { name: "Docker", icon: FaDocker, color: "#089CEC" },
    { name: "Data Analysis", svg_path: "data-analysis.svg" },
    { name: "Cloud Deployment", svg_path: "cloud-computer.svg" },
    { name: "Machine Learning", svg_path: "machine-learning.svg" },
    { name: "Authentication", svg_path: "authentication.svg" },
  ],
  externalLinks: [
    { name: "Overview", link: "https://youtu.be/oTU0C_8-dSw", icon: BsYoutube },
    { name: "Website", link: "http://136.159.140.62/", icon: CgWebsite }
  ],
};
