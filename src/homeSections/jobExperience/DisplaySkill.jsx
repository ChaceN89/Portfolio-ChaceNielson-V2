import React from 'react'
import ShowIcon from '../../components/uiElements/ShowIcon'

function DisplaySkill({skillList}) {
  return (
    <div className='flex flex-wrap space-x-2 justify-start  w-full p-1 items-center'>

      {skillList.map((skill, index) => (
      <React.Fragment key={index}>
        <ShowIcon 
          skill={skill}
          size="1.5rem"
        />
        <div>{skill.name}</div>
        {index < skillList.length - 1 && (
          <div className='h-0.5 rounded-full border-accent border-2'/>
        )}
      </React.Fragment>
    ))}
    </div>
  )
}

export default DisplaySkill