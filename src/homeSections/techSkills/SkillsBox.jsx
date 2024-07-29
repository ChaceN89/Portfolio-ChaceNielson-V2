import React from 'react'
import Tooltip from '../../components/uiElements/Tooltip';
function SkillsBox({ topSkills }) {
  const size = 60;

  return (
    <div className="flex space-x-10 justify-start">
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
  )
}

export default SkillsBox;
