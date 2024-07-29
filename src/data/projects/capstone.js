/**
 * @file capstone.js
 * @module capstone
 * @desc Contains data for the CO2 Separation Capstone project.
 * 
 * @name CO2 Separation
 * 
 * @ChaceN89
 * @created 2024-07-28
 * @updated 2024-07-28
 */

import IconSkills from "../iconSkills";

// Short description (blurb) to be displayed on the project card
const short = <>Unity simulation and physical prototype for CO<sub>2</sub> separation using deep ocean hydrostatic pressure.</>;

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className="space-y-2">
    <p>This capstone project, titled "Energy Storage and Direct Air Capture in the Deep Ocean," was completed at the University of Calgary. The project explores innovative methods for carbon dioxide (CO<sub>2</sub>) separation from the atmosphere, leveraging the deep ocean's hydrostatic pressure. Our team designed both a physical prototype and a comprehensive Unity simulation to test and demonstrate the concept. The prototype, tested in a controlled pool environment, successfully showed the feasibility of CO<sub>2</sub> condensation through pressure changes.</p>
    <p>The Unity simulation complements the prototype by providing an interactive visualization of the integration of energy storage and CO<sub>2</sub> separation systems. This simulation illustrates the device's operation and potential real-world applications, making complex processes accessible and understandable. Overall, this project lays the groundwork for future advancements in sustainable energy and carbon capture technologies, contributing valuable insights and practical solutions to the field.</p>
  </div>
);

export const capstone = {
  starred: true,
  id: "capstone", // id and folder name in the projects folder
  name: <span>C0<sub>2</sub> Separation</span>,
  tag: "Unity and Engineering",
  blurb: short,
  description: long,
  images: [
    { src: "highlight.jpg", blurhash: "LYEEK4o$t7od_6e.X7W=-_aJkBWr" },
    { src: "capstone1.jpg", blurhash: "LCCtg~4#5[xt~bkMITWU0C-s-qRj" },
    { src: "capstone2.jpg", blurhash: "L8HeI3D4^H_4~B=sDj^*-BH;00%L" },
    { src: "capstone3.jpg", blurhash: "LAD11#-;^dQ.}+?RS%E+=|kiV:I]" },
    { src: "capstone5.jpg", blurhash: "L3Ss50%g?aM{?aIV%Mxt00Mx_4t7" },
    { src: "capstone6_sim.jpg", blurhash: "LnD_REohbujd_7oxWBk8%Wobawf8" },
    { src: "capstone7_sim.jpg", blurhash: "LQEEl-NTX9t9~YRXtRa_^|bzb:i^" },
    { src: "capstone8_sim.jpg", blurhash: "LdEz+.kHT2ng_9t0oZkD%CoubWkC" },
  ],
  mainStack: [
    IconSkills.UNITY,
    IconSkills.BLENDER,
    IconSkills.CSHARP,
  ],
  extendedStack: [
    IconSkills.SIMULATION,
    IconSkills.ENGINEERING,
    IconSkills.DESIGN_PRINTING,
    IconSkills.CIRCUITY,
  ],
  externalLinks: [
    { name: "Overview Video", link: "https://www.youtube.com/watch?v=TvnBOPB7dhc", icon: IconSkills.YOUTUBE.icon },
    { name: "Simulation", link: "https://dev3933.d18ixp0pwlw4ex.amplifyapp.com/", icon: IconSkills.UNITY.icon },
    { name: "Unity Code", link: "https://github.com/ChaceN89/Capstone-Simulation", icon: IconSkills.GITHUB.icon },
  ],
  pdfs: [
    { name: "Poster", link: "Capstone Poster.pdf", icon: IconSkills.PDF.icon },
    { name: "Report", link: "Capstone Final Report.pdf", icon: IconSkills.PDF.icon }
  ]
};
