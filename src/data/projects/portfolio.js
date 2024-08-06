/**
 * @file portfolio.js
 * @module portfolio
 * @desc Contains data for the Portfolio project.
 * 
 * @name My Portfolio V1
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-28
 * @since 2.1
 */

import IconSkills from "../iconSkills";

// Short description (blurb) to be displayed on the project card
const short = "My original portfolio.";

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className='space-y-2'>
    <p>
      This is the second version of my personal portfolio website, showcasing my projects, skills, and experiences. Built using React and Tailwind CSS, it highlights significant improvements in organization, animations, and the use of reusable components over the initial version.
    </p>
    <p>
      Note: The original lacked some features, and the new version uses blurhashing to blur images on load and Framer Motion to create animations.
    </p>
    <p>
      The portfolio features a clean and modern design, providing an overview of my work and contact information. The updated version ensures a more engaging and seamless user experience. The project is deployed using Vercel, demonstrating the use of modern web technologies to create an effective personal branding website.
    </p>
  </div>
);

export const portfolio = {
  starred: true,
  id: "portfolio",
  name: "My Portfolio",
  tag: "UI/UX",
  blurb: short,
  description: long,
  images: [
    { src: "portfolio.jpg", blurhash: "L78g,54m9F_4X9V?aexv9Ft7s;I." },
  ],
  mainStack: [
    IconSkills.REACT,
    IconSkills.TAILWINDCSS,
  ],
  extendedStack: [
    IconSkills.FRAMER_MOTION,
    IconSkills.BLURHASH,
    IconSkills.VERCEL,
  ],
  externalLinks: [
    { name: "Code", link: "https://github.com/ChaceN89/Portfolio-ChaceNielson", icon: IconSkills.GITHUB.icon },
  ],
};
