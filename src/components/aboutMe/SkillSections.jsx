import React, { useState } from 'react';
import Tooltip from '../common/uiElements/Tooltip';

function SkillSections({ techSkills }) {
  const size = 40;

  return (
    <div className="space">
      {techSkills.map((skill, index) => (
        <div key={index} className="flex flex-col space-y-2">
          <div>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
          <div className="flex space-x-1">
            {skill.topSkills.map((topSkill, idx) => (
              <div key={idx}>
                {topSkill.icon ? (
                  <topSkill.icon size={size} color={topSkill.color} />
                ) : (
                  <img
                    width={size}
                    height={size}
                    src={process.env.PUBLIC_URL + '/svg-icons/' + topSkill.SVG_path}
                    alt={topSkill.name}
                  />
                )}
              </div>
            ))}
          </div>
          <Tooltip text={skill.extraSkills.join(", ")}>
            <button className="mt-2 p-1 bg-blue-500 text-white rounded">
              Learn more
            </button>
          </Tooltip>
        </div>
      ))}
    </div>
  );
}

export default SkillSections;
