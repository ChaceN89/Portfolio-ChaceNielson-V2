import React from 'react'
import SectionHeader from '../resuableComponents/SectionHeader'

function AboutMe() {
  return (
    <div className='border-2 border-white p-4 m-10'>
      <SectionHeader title='About Me'  />
      <div>
        about me parallax section 
      </div>
      <ol>
        <li>- Glass gecko games </li>
        <li>- Alberta Tomorrow </li>
        <li>- Web design </li>
        <li>- Engineering</li>
        <li>- Unity games </li>
        <li>- basketball</li>
        <li>- hiking/backpacking</li>
        <li>- Guitar/music</li>
        <li>- Snowboarding</li>
        <li>- Climbing rock and ice</li>
      </ol>
    </div>
  )
}

export default AboutMe