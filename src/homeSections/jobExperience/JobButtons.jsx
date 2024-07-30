import React from 'react'

function JobButtons({ workExperience, setExperienceID, experienceID }) {
  return (
    <div className='flex flex-col space-y-2'>
      {workExperience.map((experience, index) => (
        <button 
        key={index} 
        onClick={() => setExperienceID(index)}
        className={`p-4 rounded-lg border-2 transition-colors duration-300 ${experienceID === index ? 'bg-accent text-primary' : 'bg-white text-primary hover:bg-primary hover:text-white'}`}
        >
          {experience.name}
        </button>
      ))}
    </div>
  )
}

export default JobButtons