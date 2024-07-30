/**
 * @file glassGeckoWork.js
 * @module glassGeckoWork
 * @desc Contains data for the Glass Gecko Games work experience.
 * This data includes company name, role, dates, image, description, achievements, responsibilities, technologies, and soft skills.
 * 
 * @example
 * import { glassGeckoWork } from '../workExperience/glassGeckoWork';
 * 
 * @exports glassGeckoWork
 * 
 * @ChaceN89
 * @created 2024-07-28
 * @updated 2024-07-29
 */

import IconSkills from "../iconSkills";

export const glassGeckoWork = {
  name: 'Glass Gecko Games',
  img: process.env.PUBLIC_URL + '/png-icons/glass-gecko-games-icon.png',
  description: 'Developing games using Unity and C#, with a focus on website design and marketing.',
  role: 'Marketing, Website Development, Game Design',
  dates: ['May 2024', 'Current'],
  link: 'https://glassgeckogames.com/',
  achievements: [
    'Developed and launched the company website',
    'Implemented a robust multiplayer networking system in Unity',
  ],
  responsibilities: [
    'Collaborated with multidisciplinary teams of designers and developers',
    'Actively participated in planning and design meetings',
    'Resolved complex game design issues and challenges',
  ],
  skills: [
    IconSkills.UNITY,
    IconSkills.PLASTIC_SCM,
    IconSkills.WEB_DESIGN,
    IconSkills.REACT,
  ], 
  softSkills: [
    IconSkills.TEAM_COLLABORATION,
    IconSkills.CREATIVITY,
    IconSkills.COMMUNICATION,
    IconSkills.ADAPTABILITY,
  ],
};
