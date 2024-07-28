/**
 * @file portfolio.js
 * @module portfolio
 * @desc Contains data for the Portfolio project.
 * 
 * @name My Portfolio V1
 * 
 * @ChaceN89
 * @created 2024-07-28
 * @updated 2024-07-28
 */

import { BsGithub } from "react-icons/bs";

// icons for skills
import { FaReact } from "react-icons/fa";
import { MdOutlineBlurOn } from "react-icons/md";
import { SiTailwindcss, SiVercel } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

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
  tag: "Frontend",
  blurb: short,
  description: long,
  images: [
    { src: "portfolio.jpg", blurhash: "L78g,54m9F_4X9V?aexv9Ft7s;I." },
  ],
  mainStack: [
    { name: "React", icon: FaReact, color: "lightblue" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF9" },
  ],
  extendedStack: [
    { name: "Framer Motion", icon: TbBrandFramerMotion, color: "black" },
    { name: "Blurhash", icon: MdOutlineBlurOn, color: "black" },
    { name: "Vercel", icon: SiVercel, color: "black" },
  ],
  externalLinks: [
    { name: "Code", link: "https://github.com/ChaceN89/Portfolio-ChaceNielson", icon: BsGithub },
  ],
};
