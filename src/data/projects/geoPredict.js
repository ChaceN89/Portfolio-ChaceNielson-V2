
import { BsYoutube } from "react-icons/bs"
import { CgWebsite } from "react-icons/cg"


const long = <div className='space-y-2'>
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
        I assumed the role of project manager, which presented the opportunity to oversee a small team. My responsibilities involved task assignment, code reviews, as well as screening resumes, conducting interviews, and delivering presentations.
      </p>
      <p>
        The application has been utilized in drilling wells located in Germany, New Mexico, and Sweden.
      </p>
    </div>
  const short ="Full-Stack Web Application for analyzing drilling data."


export const geoPredict = {
    starred:true,
    id:"geo-predict", // id and folder name in the projects folder
    name:"GEO Predict",  
    tag:"Full-Stack",
    Blurb: short, 
    description: long,
    blurhash:"qD9%h%tkNYo|WAofM{oeD$t7xubGt7RjWCRi_4V@M{jZRiogjZt7xVa}WYj[a}j[j[oJtSaeV@bFoJoffkkC^*flNHoMRkoeWBoe",
    images:[
      {src:"crossPlot.jpg", blurhash:"q2Hog|GOtj%4nAwQ$n$-=OnBr_kBX4XNkUbq+S#uVtNYXfXNNrSb*EPKSva3nAm@m@nADhaMxcs;NFR%ozoy:vr2srgJS[Xfkob="},
      {src:"highlight.jpg", blurhash:"qC9G,ZtkS0tRR%ogNFoe9Xt7xubFt7RjWVRj_4V@M{jZRjofays;xVa}WYj[bHj[j[oKkYaeada{oJofkCkC^*flRkoMRkoeWBs."},
      {src:"homePage.jpg", blurhash:"qANAxJD*9Z%LNGxvRixu00t7?bV@-;R*%LWB~WaxD%bIIUt6M|WCIVt6adR+Rjn~WYR+00WBxtogs;j=j]a#IAj[RjjFWBWqV@of"},
      {src:"login.jpg", blurhash:"q7Mtjn8^xU-oVrxsn#t6xtRia_odj?a_axj[9a?wNyIpo$R.bcWC-=x^a%RnWFj^j]WV^kDinN%2nOnhjExaxWMwsjxWs*n#jYoJ"},
    ],
    techStack:[
      "Full-Stack", 
      "Authentication", 
      "React", 
      "FastAPI", 
      "PostgreSQL", 
      "Tailwind", 
      "Docker", 
      "Cloud Deployment"
    ],
    externalLinks:[
        {name:"Overview", link:"https://youtu.be/oTU0C_8-dSw", icon:BsYoutube},
        {name:"Website", link:"http://136.159.140.62/", icon:CgWebsite}
    ],

}