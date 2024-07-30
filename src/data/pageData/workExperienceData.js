/**
 * @file workExperienceData.js
 * @module workExperienceData
 * @desc Contains data for the professional experiences used in various parts of the application.
 * This data includes company names, roles, dates, images, descriptions, technologies, achievements, responsibilities, links, and soft skills.
 * 
 * @example
 * // Example usage of workExperienceData in a component
 * import { workExperienceData } from './workExperienceData';
 * 
 * function ExperienceSection() {
 *   return (
 *     <div>
 *       {workExperienceData.map((experience, index) => (
 *         <div key={index}>
 *           <h2>{experience.name}</h2>
 *           <p>{experience.role}</p>
 *           <p>{experience.technologies[0]}</p>
 *         </div>
 *       ))}
 *     </div>
 *   );
 * }
 * 
 * @exports experienceData
 * 
 * @ChaceN89
 * @created 2024-07-28
 * @updated 2024-07-28
 */
import IconSkills from "../iconSkills";


export const workExperiencePageData = {
  title: 'Work Experience',
  description: 'Technical work',
}

export const workExperience = [
  { // Glass Gecko Games
    name: 'Glass Gecko Games',
    role: 'Software Developer',
    dates: ['June 2024', 'Current'],
    img: process.env.PUBLIC_URL + '/png-icons/glass-gecko-games-icon.png',
    description: 'Developing games using Unity and C#',
    technologies: ['Unity', 'C#', 'React', 'Tailwind CSS'],
    achievements: [
      'Developed and launched a website using React and Tailwind CSS',
      'Created macOS builds of existing games',
      'Implemented a multiplayer networking system using Unity',
    ],
    responsibilities: [
      'Collaborated with a team of designers and developers to create engaging game features',
      'Worked with multiple disciplines on the team to create a game',
      'Conducted code reviews and provided feedback to team members',
      'Participated in planning and meetings'
    ],
    links:[
      { name: 'Glass Gecko Games Website', link: 'https://www.glassgeckogames.com' }
    ],
    skills: [
      IconSkills.DOCKER,
      IconSkills.REST_API,
      IconSkills.POSTGRESQL,
      IconSkills.REACT,
      IconSkills.FASTAPI,
    ],
    softSkills: [
      IconSkills.PROBLEM_SOLVING,
      IconSkills.TEAM_COLLABORATION,
      IconSkills.COMMUNICATION,
      IconSkills.TIME_MANAGEMENT,
      IconSkills.LEADERSHIP,
    ],
  },
  { // Alberta Tomorrow
    name: 'Alberta Tomorrow',
    role: 'Software Developer',
    img: process.env.PUBLIC_URL + '/png-icons/alberta-tomorrow.jpg',
    dates: ['July 2024', 'Current'],
    description: 'Developing a web application using Vue and Node.js',
    technologies: ['Vue', 'Node.js', 'Mapbox', 'AWS'],
    achievements: [
      'Developed a responsive web application using Vue',
      'Implemented a RESTful API using Node.js',
      'Integrated Mapbox API to display interactive maps',
    ],
    responsibilities: [
      'Assessed client needs',
      'Participated in planning and design meetings',
      'Assisted with troubleshooting and debugging issues',
    ],
    links:[
      { name: 'Alberta Tomorrow Website', link: 'https://www.albertatomorrow.com' }
    ],
    skills: [
      IconSkills.DOCKER,
      IconSkills.REST_API,
      IconSkills.AWS,
      IconSkills.VUE,
      IconSkills.NODE_JS,
      IconSkills.PYTHON,
 
    ],
    softSkills: [
      IconSkills.PROBLEM_SOLVING,
      IconSkills.TEAM_COLLABORATION,
      IconSkills.COMMUNICATION,
      IconSkills.TIME_MANAGEMENT,
      IconSkills.LEADERSHIP,
    ],
  },
  { // Geothermal
    name: 'Energi Simulation Centre for Geothermal Systems Research',
    role: 'Software Developer',
    img: process.env.PUBLIC_URL + '/png-icons/geothermal.png',
    dates: ['May 2022', 'Jan 2024'],
    description: 'Developed a web application using React and FastAPI',
    achievements: [
      'Developed a responsive web application using React',
      'Implemented a RESTful API using FastAPI',
      'Integrated PostgreSQL database to store user data',
      'Performed hiring interviews for new developers'
    ],
    responsibilities: [
      'Collaborated with a team of designers and developers to create engaging web features',
      'Conducted code reviews and provided feedback to team members',
      'Participated in planning and design meetings',
    ],
    skills: [
      IconSkills.DOCKER,
      IconSkills.REST_API,
      IconSkills.POSTGRESQL,
      IconSkills.REACT,
      IconSkills.FASTAPI,
    ],
    softSkills: [
      IconSkills.PROBLEM_SOLVING,
      IconSkills.TEAM_COLLABORATION,
      IconSkills.COMMUNICATION,
      IconSkills.TIME_MANAGEMENT,
      IconSkills.LEADERSHIP,
    ],
  }
];
