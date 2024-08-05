/**
 * @file JobDetails.js
 * @module JobDetails
 * @desc Displays detailed information about a specific job, including role, dates, description, skills, soft skills, achievements, and responsibilities. 
 * Provides a link to an external resource if available.
 * 
 * @requires react
 * @requires DisplaySkill from './DisplaySkill'
 * @requires DisplayList from './DisplayList'
 * @requires FaExternalLinkAlt from 'react-icons/fa'
 * 
 * @example
 * // Example usage of JobDetails in a component
 * import JobDetails from './JobDetails';
 * 
 * function App() {
 *   const job = {
 *     name: 'Job Name',
 *     role: 'Job Role',
 *     dates: ['Start Date', 'End Date'],
 *     img: 'Image URL',
 *     description: 'Job Description',
 *     skills: ['Skill 1', 'Skill 2'],
 *     softSkills: ['Soft Skill 1', 'Soft Skill 2'],
 *     link: 'External Link',
 *     achievements: ['Achievement 1', 'Achievement 2'],
 *     responsibilities: ['Responsibility 1', 'Responsibility 2'],
 *   };
 * 
 *   return <JobDetails job={job} />;
 * }
 * 
 * @exports JobDetails
 * 
 * @author Chace Nielson
 * @created 2024-07-30
 * @updated 2024-07-30
 */

import React from 'react';
import DisplaySkill from './DisplaySkill';
import DisplayList from './DisplayList';
import { FaExternalLinkAlt } from 'react-icons/fa';

function JobDetails({ job }) {
  if (!job) return null;

  const {
    name,
    role,
    dates,
    img,
    description,
    skills,
    softSkills,
    link,
    achievements,
    responsibilities,
  } = job;

  const goToLink = () => {
    if (link) window.open(link, '_blank');
  };

  return (
    <div className='text-primary p-2 px-4'>
      <div className='flex justify-between'>
        <div className='flex items-start space-x-4'>
          <img src={img} alt={name} className='w-16 h-16 rounded-full object-cover' />
          <div>
            <h4 className='font-bold text-lg'>{name}</h4>
            <p className='opacity-60 text-base'>{role}</p>
            <p className='opacity-60 text-base'>{dates ? dates.join(' - ') : ''}</p>
          </div>
        </div>
        <span className='hover:text-accent pl-1 cursor-pointer space-x-1 whitespace-nowrap' onClick={goToLink}>
          <span>Visit</span>
          <FaExternalLinkAlt size={24} className='inline-block align-text-bottom' />
        </span>
      </div>

      <p className='py-2'>{description}</p>

      <div className='flex-shrink pt-2'>
        <DisplaySkill skillList={skills.concat(softSkills)} />
      </div>

      <DisplayList title='Achievements' list={achievements} />
      <DisplayList title='Responsibilities' list={responsibilities} />
    </div>
  );
}

export default JobDetails;
