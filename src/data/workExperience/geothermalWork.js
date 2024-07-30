/**
 * @file geothermalWork.js
 * @module geothermalWork
 * @desc Contains data for the Energi Simulation Centre for Geothermal Systems Research work experience.
 * This data includes company name, role, dates, image, description, achievements, responsibilities, technologies, and soft skills.
 * 
 * @example
 * import { geothermalWork } from '../workExperience/geothermalWork';
 * 
 * @exports geothermalWork
 * 
 * @ChaceN89
 * @created 2024-07-28
 * @updated 2024-07-29
 */

import IconSkills from "../iconSkills";

export const geothermalWork = { // Geothermal
  name: 'Energi Simulation Centre for Geothermal Systems Research',
  role: 'Software Developer',
  img: process.env.PUBLIC_URL + '/png-icons/geothermal.png',
  dates: ['May 2022', 'Jan 2024'],
  description: 'Developed a web application to simulate geothermal systems and analyze drilling data.',
  link: 'https://ucalgary.ca/labs/geothermal-energy/centre',
  achievements: [
    'Developed a responsive web application using React',
    'Intern of Merit Award Recipient for outstanding performance',
    'Application was used to analyze geothermal wells in New Mexico and Germany',
  ],
  responsibilities: [
    'Presentation of project progress to stakeholders',
    'Conducted code reviews and provided feedback to team members',
    'Conducted interviews for new developers',
  ],
  skills: [
    IconSkills.REACT,
    IconSkills.DOCKER,
    IconSkills.POSTGRESQL,
    IconSkills.FASTAPI,
  ],
  softSkills: [
    IconSkills.PROBLEM_SOLVING,
    IconSkills.TEAM_COLLABORATION,
    IconSkills.LEADERSHIP,
    IconSkills.SELF_MOTIVATION,
  ],
};
