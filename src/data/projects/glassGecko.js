/**
 * @file glassGeckoGames.js
 * @module glassGeckoGames
 * @desc Contains data for the Glass Gecko Games website project.
 * 
 * @name Glass Gecko Games
 * 
 * @ChaceN89
 * @created 2024-07-28
 * @updated 2024-07-28
 */

import { TfiWorld } from 'react-icons/tfi';

// Icons for skills
import { FaReact } from "react-icons/fa";
import { MdOutlineBlurOn } from "react-icons/md";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

// Short description (blurb) to be displayed on the project card
const short = "Website built for Glass Gecko Games.";

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className='space-y-2'>
    <p>
      This website was created for the Glass Gecko Games team, of which I am a part. Built using React and Tailwind CSS, it features animations and blurhashing of images and backgrounds for a smooth and seamless experience. The site highlights the team's projects, skills, and experiences, emphasizing a clean and modern design.
    </p>
    <p>
      The website ensures an engaging user experience through improved organization, animations using Framer Motion, and the use of reusable components. Deployed on Vercel, it demonstrates the effective integration of modern web technologies to create a dynamic and interactive platform for showcasing our team's work.
    </p>
  </div>
);

export const glassGeckoGames = {
  starred: true,
  id: "glass-gecko-games",
  name: "Glass Gecko Games",
  tag: "Frontend",
  blurb: short,
  description: long,
  images: [
    { src: "glassGecko.jpg", blurhash: "LBCjFmd7MM9FsK55xH%M4,=zR$RP" },
  ],
  mainStack: [
    { name: "React", icon: FaReact, color: "lightblue" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF9" },
  ],
  extendedStack: [
    { name: "Framer Motion", icon: TbBrandFramerMotion, color: "black" },
    { name: "Blush Hash", icon: MdOutlineBlurOn, color: "black" },
    { name: "Netlify", svg_path: "netlify.svg" },
  ],
  externalLinks: [
    { name: "website", link: "https://glassgeckogames.com", icon: TfiWorld },
    // maybe add the code
  ],
};
