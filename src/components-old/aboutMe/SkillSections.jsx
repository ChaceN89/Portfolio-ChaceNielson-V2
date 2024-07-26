import React from 'react';
import Tooltip from '../common/uiElements/Tooltip';
import SkillsBox from './SkillsBox';

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
            <Tooltip 
              openDuration={100} 
              className=""
              text={category.minorSkills.join(", ")}
            >
                <p className="text-sm text-accent hover:text-accent-dark cursor-pointer">
                  More technologies I've worked with
                </p>
            </Tooltip>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillSections;
