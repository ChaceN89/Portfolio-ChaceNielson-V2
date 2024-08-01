import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import emailjs from 'emailjs-com';
import ContactToast from './ContactToast';
import ImageComponent from '../../wrappers/ImageComponent';
import SlideTransition from '../../animations/SlideTransition';
import BackgroundWrapper from '../../wrappers/BackgroundWrapper';
import SectionWrapper from '../../components/uiElements/SectionWrapper';
import { contactPageData } from '../../data/pageData/contactPageData';
import { handleSubmit } from './handleSubmit';

import GlowButton from '../../components/buttons/GlowButton';
import ThinButton from '../../components/buttons/ThinButton';
import SlideButton from '../../components/buttons/SlideButton';
import GeneralButton from '../../components/buttons/GeneralButton';
import MyButton from '../../components/buttons/MyButton';

import DownloadCV from './DownloadCV';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');




  return (
    <BackgroundWrapper
      className='min-h-section-height'
      src={process.env.PUBLIC_URL + "/png-backgrounds/detailed/range-b&w2-trim.png"}
      lowResSrc={process.env.PUBLIC_URL + "/png-backgrounds/detailed/range-b&w2-trim-small.png"}
      bgOpacity={20}
    >
      <SectionWrapper
        title={contactPageData.title}
        subtitle={contactPageData.description}
      >
              {/* <DownloadCV/> */}

     <div className='space-y-4 flex flex-col'>

        <GlowButton>GlowButton</GlowButton>
        <ThinButton>ThinButton</ThinButton>
        <ThinButton buttonType={2}>ThinButton 2</ThinButton>
        <GeneralButton>DownloadButton</GeneralButton>
        <MyButton>MyButton</MyButton>

        <div className='flex w-1/2'>

          <SlideButton className="w-full" buttonType="accent" onClick={() => alert('Accent Button Clicked')}>Accent Button</SlideButton>
        </div>

     </div>


   


      </SectionWrapper>
    </BackgroundWrapper>
  );
}

export default ContactForm;
