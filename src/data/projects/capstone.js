

import { color } from "framer-motion";
import { BsYoutube } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"
import { FaUnity } from "react-icons/fa";
import { FaBlender } from "react-icons/fa";

const short = <>Unity simulation and physical prototype for CO<sub>2</sub> separation using deep ocean hydrostatic pressure.</>;
const long =     
<div className="space-y-2">
  <p>This capstone project, titled "Energy Storage and Direct Air Capture in the Deep Ocean," was completed at the University of Calgary. The project explores innovative methods for carbon dioxide (CO<sub>2</sub>) separation from the atmosphere, leveraging the deep ocean's hydrostatic pressure. Our team designed both a physical prototype and a comprehensive Unity simulation to test and demonstrate the concept. The prototype, tested in a controlled pool environment, successfully showed the feasibility of CO<sub>2</sub> condensation through pressure changes.</p>

  <p>The Unity simulation complements the prototype by providing an interactive visualization of the integration of energy storage and CO<sub>2</sub> separation systems. This simulation illustrates the device's operation and potential real-world applications, making complex processes accessible and understandable. Overall, this project lays the groundwork for future advancements in sustainable energy and carbon capture technologies, contributing valuable insights and practical solutions to the field.</p>
</div>;


export const capstone = {
    starred:true,
    id:"capstone", // id and folder name in the projects folder
    name:<span>C0<sub>2</sub> Separation</span>, 
    tag:"Unity and Engineering",
    blurb: short, 
    description: long,
    images:[
      {src:"highlight.jpg", blurhash:""},
      {src:"capstone1.jpg", blurhash:"LCCtg~4#5[xt~bkMITWU0C-s-qRj"},
      {src:"capstone2.jpg", blurhash:"L8HeI3D4^H_4~B=sDj^*-BH;00%L"},
      {src:"capstone3.jpg", blurhash:"LAD11#-;^dQ.}+?RS%E+=|kiV:I]"},
      {src:"capstone5.jpg", blurhash:"L3Ss50%g?aM{?aIV%Mxt00Mx_4t7"},
      {src:"capstone6_sim.jpg", blurhash:"LnD_REohbujd_7oxWBk8%Wobawf8"},
      {src:"capstone7_sim.jpg", blurhash:"LQEEl-NTX9t9~YRXtRa_^|bzb:i^"},
      {src:"capstone8_sim.jpg", blurhash:"LdEz+.kHT2ng_9t0oZkD%CoubWkC"},
    ],
    mainStack:[
      {name:"Unity", icon:FaUnity, color:"black"},
      {name:"Blender", svg_path:"blender.svg"}, 
      {name:"C#", svg_path:"c-sharp.svg"} 
    ],
    extendedStack:[
      {name:"Simulation", svg_path:"computer.svg"} ,
      {name:"Engineering", svg_path:"engineering.svg"} ,
      {name:"3D Design and Printing", svg_path:"3d-cube.svg"} ,
      {name:"Circuity Design", svg_path:"circuit-board.svg"} ,
    ],
    externalLinks:[
        {name:"Overview Video", link:"https://www.youtube.com/watch?v=TvnBOPB7dhc", icon:BsYoutube},
        {name:"Simulation", link:"https://dev3933.d18ixp0pwlw4ex.amplifyapp.com/", icon:FaUnity},
        {name:"Unity Code", link:"https://github.com/ChaceN89/Capstone-Simulation", icon:BsGithub},
    ],
    pdfs:[
      {name:"Poster", link:"Capstone Poster.pdf"},
      {name:"Report", link:"Capstone Final Report.pdf"},
    ]

}