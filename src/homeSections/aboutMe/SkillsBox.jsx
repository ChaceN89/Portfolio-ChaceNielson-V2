import React from 'react'
import Tooltip from '../common/uiElements/Tooltip';

function SkillsBox({ category }) {
  const size = 60;

  return (
    <div className="grid  grid-cols-2 md:grid-cols-4 gap-2">
      {category.topSkills.map((topSkill, idx) => (
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
                src={process.env.PUBLIC_URL + '/svg-icons/' + topSkill.SVG_path}
                alt={topSkill.name}
              />
            )}
          </Tooltip>
        </div>
      ))}
      
    </div>
  )
}

export default SkillsBox;
