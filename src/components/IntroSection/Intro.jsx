import React from 'react'
import IntroImages from './IntroImages'
import IntroText from './IntroText'

function Intro() {
  return (
    <div className='border-2 border-white p-4 m-10'>
      <IntroImages />
      <IntroText />
    </div>
  )
}

export default Intro