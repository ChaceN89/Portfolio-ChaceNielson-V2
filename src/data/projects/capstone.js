/**
 * @file capstone.js
 * @module capstone
 * @desc Contains data for the CO2 Separation Capstone project.
 * 
 * @name CO2 Separation
 * 
 * @example
 * // Example usage of capstone data in a component
 * import { capstone } from './capstone';
 * 
 * function ProjectComponent() {
 *   return (
 *     <div>
 *       <h2>{capstone.name}</h2>
 *       <div>{capstone.description}</div>
 *     </div>
 *   );
 * }
 * 
 * @exports capstone
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-28
 * @since 2.1
 */

import IconSkills from "../iconSkills";

// Short description (blurb) to be displayed on the project card
const short = <>Concept simulation and physical prototype for CO<sub>2</sub> separation device.</>;

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className="space-y-2">
    <p>
      This capstone project, titled "Energy Storage and Direct Air Capture in the Deep Ocean," was completed at the University of Calgary. The project explores innovative methods for carbon dioxide (CO<sub>2</sub>) separation from the atmosphere, leveraging the deep ocean's hydrostatic pressure. 
    </p>
    <p>
      Our team designed both a physical prototype and a comprehensive Unity simulation to test and demonstrate the concept. The prototype, tested in a controlled pool environment, successfully showed the feasibility of the device.
      </p>
    <p>
      The Unity simulation complements the prototype by providing an interactive visualization of the energy storage system and its real-world applications. The simulation allows users to explore the device's inner workings, including the energy storage system, CO<sub>2</sub> separation process, and the device's overall operation.
    </p>
  </div>
);

export const capstone = {
  starred: true,
  id: "capstone", // id and folder name in the projects folder
  name: <span>CO<sub>2</sub> Separation Capstone</span>,
  tag: "Engineering",
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
  youtubeEmbed: "https://www.youtube.com/watch?v=TvnBOPB7dhc",
  mainStack: [
    IconSkills.UNITY,
    IconSkills.BLENDER,
    IconSkills.CSHARP,
  ],
  extendedStack: [
    IconSkills.SIMULATION,
    IconSkills.ENGINEERING,
    IconSkills.CIRCUITY,
    IconSkills.ANIMATION,
    IconSkills.LEADERSHIP,
    IconSkills.ADAPTABILITY,
    IconSkills.DESIGN_3D,
    IconSkills.FABRICATION,
  ],
  externalLinks: [
    { name: "Unity Simulation", link: "https://dev3933.d18ixp0pwlw4ex.amplifyapp.com/", icon: IconSkills.UNITY.icon },
    { name: "Poster", pdf: "Capstone Poster.pdf", icon: IconSkills.PDF.icon },
    { name: "Report", pdf: "Capstone Final Report.pdf", icon: IconSkills.PDF.icon }
  ],
};
