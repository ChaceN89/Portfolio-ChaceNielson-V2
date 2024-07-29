import React from 'react'
import ElevateOnView from '../../animations/ElevateOnView'
import SkillsBox from './SkillsBox'
import MyButton from '../../components/uiElements/MyButton'
import { Link } from 'react-router-dom'

function SkillCategory({ category, index }) {


  return (
    <ElevateOnView marginY = '-75px'>
      <div key={index} className="grid grid-cols-2 gap-6">
        <div >
          <div className='flex space-x-4 items-center'>
            <h3 className="font-bold pb-2">{category.name}</h3>
            <Link 
              to={"/skills/" + category.id}
              className="text-accent hover:text-accent-dark hover:underline cursor-pointer text-sm"
            >
              {category.linkName}
            </Link>
          </div>
          <p className="text-sm text-secondary text-opacity-60">
            {category.description} 
          </p>
        </div>
        <div >
          <SkillsBox topSkills={category.topSkills} />
        </div>
      </div>
    </ElevateOnView>
  )
}

export default SkillCategory