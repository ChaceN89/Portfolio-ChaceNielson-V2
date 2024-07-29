/**
 * @file SkillCategory.js
 * @module SkillCategory
 * @desc React component that displays a category of skills with an animated elevation effect.
 * This component uses the ElevateOnView animation, MainSkills to display the top skills, and 
 * Link from react-router-dom to navigate to the detailed skills page.
 *
 * @component SkillCategory
 * 
 * @requires react
 * @requires ElevateOnView from '../../animations/ElevateOnView'
 * @requires MainSkills from './MainSkills'
 * @requires Link from 'react-router-dom'
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * @see {@link https://reactrouter.com/ | React Router Documentation}
 * 
 * @example
 * // Example usage of SkillCategory component
 * import SkillCategory from './SkillCategory';
 * 
 * function App() {
 *   const category = {
 *     name: 'Web Development',
 *     id: 'web-development',
 *     linkName: 'See My Web Development Skills',
 *     description: 'This category includes HTML, CSS, JavaScript, and React.',
 *     topSkills: ['HTML', 'CSS', 'JavaScript', 'React']
 *   };
 *   
 *   return (
 *     <SkillCategory category={category} index={0} />
 *   );
 * }
 * 
 * @exports SkillCategory
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-29
 */
import React from 'react';
import ElevateOnView from '../../animations/ElevateOnView';
import MainSkills from './MainSkills';
import { Link, useLocation } from 'react-router-dom';

function SkillCategory({ category, index }) {
  const location = useLocation();

  return (
    <ElevateOnView className='border-2 border-secondary p-4 border-opacity-10 rounded-lg'>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
        <div className='sm:col-span-2 '>
          <h3 className="font-bold">{category.name}</h3>
          <p className="text-sm text-secondary text-opacity-60 pt-0.5">{category.description}</p>
          <Link 
            to={"/skills/" + category.id}
            className="text-accent hover:text-accent-dark hover:underline cursor-pointer text-sm"
            state={{ background: location }}
          >
            {category.linkName}
          </Link>
        </div>

        <div className='flex justify-center items-center'>
          <MainSkills topSkills={category.topSkills} />
        </div>
      </div>
    </ElevateOnView>
  );
}

export default SkillCategory;
