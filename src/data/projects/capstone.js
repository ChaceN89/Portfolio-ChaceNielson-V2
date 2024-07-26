

import { BsYoutube } from "react-icons/bs"
import { CgWebsite } from "react-icons/cg"

const short = "A physical device and Unity simulation designed for carbon dioxide separation using hydrostatic pressure.";
const long = "This project was completed for my capstone project at the University of Calgary. 'Energy Storage and Direct Air Capture in the Deep Ocean,' explores innovative methods for carbon dioxide (CO2) separation from the atmosphere. By leveraging deep ocean hydrostatic pressure, we designed a physical prototype and a comprehensive Unity simulation. The prototype, tested in a pool environment, demonstrates the feasibility of CO2 condensation using pressure changes. The Unity simulation illustrates the integration of energy storage and CO2 separation systems, providing an interactive visualization of the device's operation and potential real-world applications. This project lays the groundwork for future advancements in sustainable energy and carbon capture technologies.";


export const capstone = {
    starred:true,
    id:"capstone", // id and folder name in the projects folder
    name:"Capstone",  
    tag:"Unity and Engineering",
    blurb: short, 
    description: long,
    images:[
      {src:"highlight.jpg", blurhash:"qC9G,ZtkS0tRR%ogNFoe9Xt7xubFt7RjWVRj_4V@M{jZRjofays;xVa}WYj[bHj[j[oKkYaeada{oJofkCkC^*flRkoMRkoeWBs."},
      {src:"crossPlot.jpg", blurhash:"q2Hog|GOtj%4nAwQ$n$-=OnBr_kBX4XNkUbq+S#uVtNYXfXNNrSb*EPKSva3nAm@m@nADhaMxcs;NFR%ozoy:vr2srgJS[Xfkob="},
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