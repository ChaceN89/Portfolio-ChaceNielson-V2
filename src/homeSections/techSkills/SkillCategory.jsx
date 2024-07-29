import React from 'react'
import ElevateOnView from '../../animations/ElevateOnView'
import SkillsBox from './SkillsBox'
import MyButton from '../../components/uiElements/MyButton'
import { Link } from 'react-router-dom'

function SkillCategory({ category, index }) {


  return (
    <ElevateOnView marginY = '-75px'>
      <div key={index} className="grid grid-cols-5">
        <div className='col-span-2'>
          <div className='flex space-x-2 items-center'>
            <h3 className="font-bold">{category.name}</h3>
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
        <div className='col-span-3'>
          <SkillsBox topSkills={category.topSkills} />
        </div>
      </div>
    </ElevateOnView>
  )
}

export default SkillCategory