/**
 * @file webDesign.js
 * @module webDesign
 * @desc Contains data for the Web Design skills section.
 * 
 * @name Web Design
 * 
 * @ChaceN89
 * @created 2024-07-28
 * @updated 2024-07-28
 */

import IconSkills from "../iconSkills";

export const webDesign = { 
  id: "web-design",
  name: "Web Design",
  linkName: "See My Web Design Toolkit", 
  description: (
    <span>
      With 3 years of experience, I specialize in creating interactive and responsive web designs for application development.
    </span>
  ),
  topSkills: [
    IconSkills.REACT,
    IconSkills.JAVASCRIPT,
    IconSkills.TAILWINDCSS,
    IconSkills.NODE_JS,
  ],
  minorSkills: [
    IconSkills.VUE,
    IconSkills.NETLIFY,
    IconSkills.VERCEL,
    IconSkills.AWS,
    IconSkills.TYPESCRIPT,
    IconSkills.CHART_JS,
    IconSkills.REDUX,
    IconSkills.HTML,
    IconSkills.CSS,
    IconSkills.FRAMER_MOTION,
    IconSkills.BLURHASH,
  ],
};
