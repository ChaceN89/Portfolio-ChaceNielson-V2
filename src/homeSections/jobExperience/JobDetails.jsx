import React from 'react'
import DisplaySkill from './DisplaySkill'

function JobDetails({ job }) {
  if (!job) return null

  const {
    name,
    role,
    dates,
    img,
    description,
    skills,
    softSkills,
    link,
    achievements,
    responsibilities,
  } = job

  

  return(
    <div className='text-primary '>
      <div className='flex items-center space-x-4 '>
        <img src={img} alt={name} className='w-16 h-16 rounded-full object-cover' />
        <div className=''>
          <h2 className='text-xl font-bold text-primary'>{name}</h2>
          <p className='text-gray-600'>{role}</p>
          <p className='text-gray-500'>{dates ? dates.join(' - ') : ''}</p>
        </div>
      </div>
 

      <p className='mt-4 text-gray-700'>{description}</p>
      <div className='flex-shrink'>

        <DisplaySkill skillList={skills} />
        <DisplaySkill skillList={softSkills} />
    </div>

    

      {achievements && achievements.length > 0 && (
        <div className='mt-4'>
          <h3 className='text-lg font-semibold text-primary'>Achievements</h3>
          <ul className='list-disc list-inside'>
            {achievements.map((achievement, index) => (
              <li key={index} className='text-gray-700'>{achievement}</li>
            ))}
          </ul>
        </div>
      )}

      {responsibilities && responsibilities.length > 0 && (
        <div className='mt-4'>
          <h3 className='text-lg font-semibold text-primary'>Responsibilities</h3>
          <ul className='list-disc list-inside'>
            {responsibilities.map((responsibility, index) => (
              <li key={index} className='text-gray-700'>{responsibility}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )

  }

export default JobDetails
