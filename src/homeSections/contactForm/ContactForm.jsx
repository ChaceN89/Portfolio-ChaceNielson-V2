import React from 'react';
import { contactPageData } from '../../data/pageData/contactPageData';
import BackgroundWrapper from '../../wrappers/BackgroundWrapper'
import SectionWrapper from '../../components/uiElements/SectionWrapper'
import Form from './Form';
import ImageComponent from '../../wrappers/ImageComponent';
import './ContactForm.css'

function Contact() {
  return(
    <BackgroundWrapper 
      id="AboutMe" 
      className='min-h-section-height'
      src={process.env.PUBLIC_URL + "/png-backgrounds/detailed/range-b&w3-trim.png"}
      bgOpacity={10}
    >
      <SectionWrapper
        title = {contactPageData.title}
        subtitle = {contactPageData.description}
      >
        <div className='flex flex-wrap md:flex-nowrap space-x-4'>
          <div className="w-full md:w-3/5">
            <Form />
          </div>
          <div className="w-full md:w-2/5 flex justify-center items-center">
            <ImageComponent
              src={`${process.env.PUBLIC_URL}/png-portraits/chace-1.png`}
              alt="Contact Photo"
              className='object-cover  w-full'
            />
          </div>
        </div>
      </SectionWrapper>
    </BackgroundWrapper>
  )
}

export default Contact;
