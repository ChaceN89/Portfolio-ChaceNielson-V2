/**
 * @file albertaTomorrowWork.js
 * @module albertaTomorrowWork
 * @desc Contains data for the Alberta Tomorrow work experience.
 * This data includes company name, role, dates, image, description, achievements, responsibilities, and soft skills.
 * 
 * @example
 * import { albertaTomorrowWork } from '../workExperience/albertaTomorrowWork';
 * 
 * @exports albertaTomorrowWork
 * 
 * @author Chace Nielson
 * @version 2.1
 * @created 2024-07-29
 * @updated 2024-08-05
 */

import IconSkills from "../iconSkills";

export const albertaTomorrowWork = { // Alberta Tomorrow
  name: 'Alberta Tomorrow',
  role: 'Software Developer',
  img: process.env.PUBLIC_URL + '/png-icons/alberta-tomorrow.jpg',
  dates: ['Jan 2024', 'Current'],
  description: 'Developed a web application focusing on interactive maps, data visualization, and gamification for sustainable land use in Alberta and BC.',
  link: 'https://www.albertatomorrow.ca',
  achievements: [
    'Created a simulation tool for sustainable land use in Alberta and BC',
    'Integrated Mapbox API to display interactive maps',
  ],
  responsibilities: [
    'Developed features and enhancements for the web application',
    'Communicated and collaborated with stakeholders',
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
