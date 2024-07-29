import React from 'react'
import ElevateOnView from '../../animations/ElevateOnView'
import SkillsBox from './SkillsBox'
import MyButton from '../../components/uiElements/MyButton'
import { Link } from 'react-router-dom'

function SkillCategory({ category, index }) {


  return (
    <ElevateOnView>
      <div key={index} className="grid grid-cols-5">
        <div className='col-span-2'>
          <h3 className="font-bold">{category.name}</h3>
          <p className="text-sm text-secondary text-opacity-60">
          {category.description} 
 
          </p>
        </div>
        <MyButton 
            to={"/skills/" + category.id}
            className="text-accent hover:text-accent-dark cursor-pointer"
          >
            {category.linkName}
          </MyButton>

        <div className='col-span-2'>
          <SkillsBox topSkills={category.topSkills} />
        </div>
      </div>
      
      
    </ElevateOnView>
  )
}

export default SkillCategory