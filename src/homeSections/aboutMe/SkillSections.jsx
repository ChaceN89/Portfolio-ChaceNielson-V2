import React from 'react';
import SkillsBox from './SkillsBox';
import Tooltip from '../../components/uiElements/Tooltip';
import { Link } from 'react-router-dom';
function SkillSections({ techSkills }) {

  return (
    <div className="space-y-8 px-10">
      {techSkills.map((category, index) => (
        <div key={index} className="grid grid-cols-5 gap-x-8">
          <div className='col-span-3'>
            <h3 className="font-bold">{category.name}</h3>
            <p className="text-sm text-secondary text-opacity-60">{category.description}</p>

          </div>
          <div className="col-span-2 lg:col-span-2">
            <SkillsBox category={category} />

          </div>
          <div className='col-span-5'>
            <Link 
            to={"/skills/"+category.id}
              className="text-sm text-accent hover:text-accent-dark cursor-pointer"
              >
              View all {category.name} skills
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillSections;
