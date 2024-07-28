import React, {useState} from 'react'
import { experienceData } from '../../data/pageData/experienceData'
import JobDetails from './JobDetails'

import BackgroundWrapper from '../../wrappers/BackgroundWrapper'
import SlideTransition from '../../routing/SlideTransition'

function JobExperience() {

  const [experienceID, setExperienceID] = useState(0)

  return (
    
    <BackgroundWrapper 
      id='WorkExperience'
      className='min-h-section-height' 
      src={process.env.PUBLIC_URL + "/png-backgrounds/detailed/range-b&w2-trim.png"}
      lowResSrc={process.env.PUBLIC_URL + "/png-backgrounds/detailed/range-b&w2-trim-small.png"}
      bgOpacity={40}
    >
      <SlideTransition >

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
      </SlideTransition>

    </BackgroundWrapper>
  )
}

export default JobExperience


