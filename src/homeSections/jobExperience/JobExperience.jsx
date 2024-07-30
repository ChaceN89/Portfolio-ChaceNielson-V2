import React, {useState} from 'react'
import { workExperience, workExperiencePageData } from '../../data/pageData/workExperienceData'
import JobDetails from './JobDetails'
import BackgroundWrapper from '../../wrappers/BackgroundWrapper'
import SectionWrapper from '../../components/uiElements/SectionWrapper'
import JobButtons from './JobButtons'

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

      <SectionWrapper
        title = {workExperiencePageData.title}
        subtitle = {workExperiencePageData.description}
      >
        <div className='grid grid-cols-1 md:grid-cols-3 md:gap-4 h-full '>
          <div className='pb-4 md:pb-0'>
            <JobButtons 
              setExperienceID={setExperienceID}
              experienceID={experienceID}
              workExperience={workExperience}
            />
          </div>
          <div className='col-span-2 h-section-height-small min-h-102  bg-secondary rounded-lg p-2 overflow-auto'>
            <JobDetails experience={workExperience[experienceID]} />
          </div>
        </div>
      </SectionWrapper>
    
    </BackgroundWrapper>
  )
}

export default JobExperience


