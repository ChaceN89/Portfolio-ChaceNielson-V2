import React from 'react'
import IntroImages from './IntroImages'
import IntroText from './IntroText'
import MediaLinks from '../resuableComponents/MediaLinks'

function Intro() {
  return (
    <div 
      id="Home"
      className='border-2 border-white p-4 m-10'
    >
      <IntroText />

      <div className='flex justify-between '>
        <MediaLinks/>
      </div>

      <IntroImages />
    </div>
  )
}

export default Intro