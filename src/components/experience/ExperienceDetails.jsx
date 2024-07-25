import React from 'react'

function ExperienceDetails({ experience }) {
  if (!experience) return null

  const {
    name,
    role,
    dates,
    img,
    description,
    technologies,
    achievements,
    responsibilities,
    softSkills,
    links
  } = experience

  return (
    <div className='p-6 bg-gray-100 rounded-lg shadow-lg'>
      <div className='flex items-center space-x-4'>
        <img src={img} alt={name} className='w-16 h-16 rounded-full object-cover' />
        <div>
          <h2 className='text-xl font-bold'>{name}</h2>
          <p className='text-gray-600'>{role}</p>
          <p className='text-gray-500'>{dates ? dates.join(' - ') : ''}</p>
        </div>
      </div>
      <p className='mt-4 text-gray-700'>{description}</p>
      
      {technologies && technologies.length > 0 && (
        <div className='mt-4'>
          <h3 className='text-lg font-semibold'>Technologies</h3>
          <ul className='list-disc list-inside'>
            {technologies.map((tech, index) => (
              <li key={index} className='text-gray-700'>{tech}</li>
            ))}
          </ul>
        </div>
      )}

      {achievements && achievements.length > 0 && (
        <div className='mt-4'>
          <h3 className='text-lg font-semibold'>Achievements</h3>
          <ul className='list-disc list-inside'>
            {achievements.map((achievement, index) => (
              <li key={index} className='text-gray-700'>{achievement}</li>
            ))}
          </ul>
        </div>
      )}

      {responsibilities && responsibilities.length > 0 && (
        <div className='mt-4'>
          <h3 className='text-lg font-semibold'>Responsibilities</h3>
          <ul className='list-disc list-inside'>
            {responsibilities.map((responsibility, index) => (
              <li key={index} className='text-gray-700'>{responsibility}</li>
            ))}
          </ul>
        </div>
      )}

      {softSkills && softSkills.length > 0 && (
        <div className='mt-4'>
          <h3 className='text-lg font-semibold'>Soft Skills</h3>
          <ul className='list-disc list-inside'>
            {softSkills.map((skill, index) => (
              <li key={index} className='text-gray-700'>{skill}</li>
            ))}
          </ul>
        </div>
      )}

      {links && links.length > 0 && (
        <div className='mt-4'>
          <h3 className='text-lg font-semibold'>Links</h3>
          <ul className='list-disc list-inside'>
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.link} className='text-blue-500 hover:underline'>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default ExperienceDetails
