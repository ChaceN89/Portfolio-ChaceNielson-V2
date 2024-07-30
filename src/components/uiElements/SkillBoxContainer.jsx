import React from 'react'
import SkillBox from './SkillBox'

function SkillBoxContainer({stack}) {
  return (
    <div className="p-4">
    {stack && stack.length > 0 && (
      <div className="grid text-sm md:text-base grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
        {stack.map((skill, index) => (
          <SkillBox key={index} skill={skill} />
        ))}
      </div>
    )}
  </div>
  )
}

export default SkillBoxContainer