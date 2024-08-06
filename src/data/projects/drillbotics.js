/**
 * @file drillbotics.js
 * @module drillbotics
 * @desc Contains data for the Drillbotics project.
 * 
 * @name Drillbotics
 *
 * @example
 * // Example usage of drillbotics data in a component
 * import { drillbotics } from './drillbotics';
 * 
 * function ProjectComponent() {
 *   return (
 *     <div>
 *       <h2>{drillbotics.name}</h2>
 *       <div>{drillbotics.description}</div>
 *     </div>
 *   );
 * }
 * 
 * @exports drillbotics
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-28
 * @since 2.1
 */

import IconSkills from "../iconSkills";

// Short description (blurb) to be displayed on the project card
const short = "Functional mini drill rig and GUI to record real-time drilling operations.";

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className='space-y-2'>
    <p>
      This project involved building a functional mini drill rig with the Drillbotics team at the University of Calgary. While I contributed to all aspects of the project, my primary responsibility was creating a graphical user interface (GUI) that could plot the drilling operation in real-time and provide interactive features.
    </p>
    <p>
      The GUI was developed using Plotly Dash and Python, offering a comprehensive and user-friendly interface to monitor and analyze the drilling process. The project showcases the integration of engineering principles with real-time data visualization, enhancing the efficiency and effectiveness of drilling operations.
    </p>
  </div>
);

export const drillbotics = {
  starred: true,
  id: "drillbotics",
  name: "Drillbotics",
  tag: "Engineering",
  blurb: short,
  description: long,
  images: [
    { src: "drillbotics1.jpg", blurhash: "LAH-rkQ,yG-ncrO@%M0L=}00-iIB" },
    { src: "drillbotics0.jpg", blurhash: "L2Ps@p00~nS^00OT_2D*008^R;Di" },
    { src: "drillbotics2.jpg", blurhash: "L3HL6nIp?J9b~W^%010000aL?Fsk" },
    { src: "drillbotics3.jpg", blurhash: "L8FYcCR2%OR-#zk[D%D%x{it~W%M" },
    { src: "drillbotics4.jpg", blurhash: "LCGIJw-;oLRk~WR+IoayIr-oRj%1" },
    { src: "drillbotics5.jpg", blurhash: "L7GudjTH=v~D%$Io9a-:01%LR+D*" },
    { src: "drillbotics6.jpg", blurhash: "LAF=jk~p-p?a_3o#tQRjR5RkIoRi" },
  ],
  mainStack: [
    IconSkills.PLOTLY_DASH,
    IconSkills.PYTHON,
  ],
  extendedStack: [
    IconSkills.ENGINEERING,
    IconSkills.CIRCUITY,
  ],
  externalLinks: [
    // Add external links if available
  ],
};
