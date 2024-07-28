/**
 * @file projectData.js
 * @module projectData
 * @desc Contains an array of project objects imported from individual project files.
 * This data is used in the project section of the application.
 * 
 * @requires geoPredict from '../projects/geoPredict'
 * @requires capstone from '../projects/capstone'
 * @requires musicPlayer from '../projects/musicPlayer'
 * @requires portfolio from '../projects/portfolio'
 * @requires voiceIdentification from '../projects/voiceIdentification'
 * @requires imageProcessor from '../projects/imageProcessor'
 * @requires jobDashboard from '../projects/jobDashboard'
 * @requires photoApp from '../projects/photoApp'
 * @requires genrePrediction from '../projects/genrePrediction'
 * @requires jenga from '../projects/jenga'
 * @requires cubeGame from '../projects/cubeGame'
 * @requires flappyBirdClone from '../projects/flappyBirdClone'
 * @requires spaceSurvive from '../projects/spaceSurvive'
 * @requires glassGeckoGames from '../projects/glassGecko'
 * @requires drillbotics from '../projects/drillbotics'
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * 
 * @example
 * // Example usage of projects data in a component
 * import { projects } from './projectData';
 * 
 * function ProjectSection() {
 *   return (
 *     <div>
 *       {projects.map((project, index) => (
 *         <div key={index}>
 *           <h3>{project.name}</h3>
 *           <p>{project.description}</p>
 *         </div>
 *       ))}
 *     </div>
 *   );
 * }
 * 
 * @exports projects
 * 
 * @created 2024-07-28
 * @updated 2024-07-28
 */

import { geoPredict } from "../projects/geoPredict";
import { capstone } from "../projects/capstone";
import { musicPlayer } from "../projects/musicPlayer";
import { portfolio } from "../projects/portfolio";
import { voiceIdentification } from "../projects/voiceIdentification";
import { imageProcessor } from "../projects/imageProcessor";
import { jobDashboard } from "../projects/jobDashboard";
import { photoApp } from "../projects/photoApp";
import { genrePrediction } from "../projects/genrePrediction";
import { jenga } from "../projects/jenga";
import { cubeGame } from "../projects/cubeGame";
import { flappyBirdClone } from "../projects/flappyBirdClone";
import { spaceSurvive } from "../projects/spaceSurvive";
import { glassGeckoGames } from "../projects/glassGecko";
import { drillbotics } from "../projects/drillbotics";

export const projects = [
  glassGeckoGames,
  geoPredict,
  capstone,
  drillbotics,
  voiceIdentification,
  photoApp,
  musicPlayer,
  jenga,
  spaceSurvive,
  cubeGame,
  flappyBirdClone,
  portfolio,
  imageProcessor,
  jobDashboard,
  genrePrediction,
];
