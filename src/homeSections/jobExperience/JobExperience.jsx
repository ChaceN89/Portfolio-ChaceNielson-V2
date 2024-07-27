import React, {useState} from 'react'
import { experienceData } from '../../data/pageData/experienceData'
import JobDetails from './JobDetails'

function JobExperience() {

  const [experienceID, setExperienceID] = useState(0)

  return (
    <section className='min-h-section-height pb-10' >
      <hr />

      <h2 className='py-10'>Experience</h2>
      <div className='grid grid-cols-3 gap-2'>

        <div className='flex flex-col space-y-2'>
          {experienceData.map((experience, index) => (
            <button 
            key={index} 
            onClick={() => setExperienceID(index)}
            className={`p-4 rounded-lg border-2 transition-colors duration-300 ${experienceID === index ? 'bg-black text-white' : 'bg-white text-black hover:bg-black hover:text-white'}`}
            >
              {experience.name}
            </button>
          ))}
        </div>
        <div className='col-span-2'>
          <JobDetails experience={experienceData[experienceID]} />
        </div>
      </div>
    </section>
  )
}

export default JobExperience


