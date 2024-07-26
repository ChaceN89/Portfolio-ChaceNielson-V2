import { BsYoutube } from "react-icons/bs"
import { CgWebsite } from "react-icons/cg"

export const projects = [
  {
    starred:true,
    id:"geo-predict",
    name:"GEO Predict", 
    tag:"Full-Stack",
    Blurb:"Web site for anlayisis drilling data ",
    description:"loren ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", 
    img:'',
    blurhash:"aaa",
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
  },

  {
    id:"glass-gecko-games",
    name:"Glass Gecko Games", 
    tag:"Full-Stack",
    Blurb:"Web site for anlayisis drilling data ",
    description:"loren ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", 
    img:'',
    blurhash:"aaa",
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
        {name:"Website", link:"http://glassgeckogames.netlify.app/", icon:CgWebsite}
    ]    
  },
]