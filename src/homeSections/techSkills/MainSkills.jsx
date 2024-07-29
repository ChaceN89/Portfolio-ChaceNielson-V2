/**
 * @file MainSkills.js
 * @module MainSkills
 * @desc React component that displays a box of top skills with icons and tooltips.
 * This component maps through the provided topSkills array and renders each skill with a corresponding icon or image.
 *
 * @component MainSkills
 * 
 * @requires react
 * @requires Tooltip from '../../components/uiElements/Tooltip'
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * 
 * @example
 * // Example usage of MainSkills component
 * import MainSkills from './MainSkills';
 * 
 * function App() {
 *   const topSkills = [
 *     { name: 'React', icon: FaReact, color: 'lightblue' },
 *     { name: 'JavaScript', icon: SiJavascript, color: 'yellow' },
 *     { name: 'Python', svg_path: 'python.svg' }
 *   ];
 *   
 *   return (
 *     <MainSkills topSkills={topSkills} />
 *   );
 * }
 * 
 * @exports MainSkills
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-28
 */

import React from 'react';
import Tooltip from '../../components/uiElements/Tooltip';

function MainSkills({ topSkills }) {
  const size = 60;

  return (
    <div className="flex space-x-5 sm:space-x-10 justify-center md:justify-start py-3 lg:py-0">
      {topSkills.map((topSkill, idx) => (
        <div key={idx} className="flex-col text-center items-center">
          <Tooltip 
            openDuration={100} 
            className="max-w-xs"
            text={topSkill.name}
          >
            {topSkill.icon ? (
              <topSkill.icon size={size} color={topSkill.color} />
            ) : (
              <img
                width={size}
                height={size}
                src={process.env.PUBLIC_URL + '/svg-icons/' + topSkill.svg_path}
                alt={topSkill.name}
              />
            )}
          </Tooltip>
        </div>
      ))}
    </div>
  );
}

export default MainSkills;
