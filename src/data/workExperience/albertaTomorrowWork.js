/**
 * @file albertaTomorrowWork.js
 * @module albertaTomorrowWork
 * @desc Contains data for the Alberta Tomorrow work experience.
 * This data includes company name, role, dates, image, description, achievements, responsibilities, technologies, and soft skills.
 * 
 * @example
 * import { albertaTomorrowWork } from '../workExperience/albertaTomorrowWork';
 * 
 * @exports albertaTomorrowWork
 * 
 * @ChaceN89
 * @created 2024-07-29 
 * @updated 2024-07-29
 */

import IconSkills from "../iconSkills";

export const albertaTomorrowWork = { // Alberta Tomorrow
  name: 'Alberta Tomorrow',
  role: 'Software Developer',
  img: process.env.PUBLIC_URL + '/png-icons/alberta-tomorrow.jpg',
  dates: ['Jan 2024', 'Current'],
  description: 'Web application development for environmental education and land use planning.',
  link: 'https://www.albertatomorrow.com',
  achievements: [
    'Simulation tool focused on sustainable land use in Alberta and BC',
    'Integrated Mapbox API to display interactive maps',
  ],
  responsibilities: [
    'Development and feature additions to the web application',
    'Communication and collaboration with stakeholders',
  ],
  skills: [
    IconSkills.AWS,
    IconSkills.VUE,
    IconSkills.MAPBOX_GL,
    IconSkills.CSS,
  ],
  softSkills: [
    IconSkills.PROBLEM_SOLVING,
    IconSkills.ADAPTABILITY,
    IconSkills.TIME_MANAGEMENT,
    IconSkills.SELF_MOTIVATION,
  ],
};
