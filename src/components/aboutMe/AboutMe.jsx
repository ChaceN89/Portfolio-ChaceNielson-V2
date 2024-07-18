import React from 'react'
import SectionHeader from '../resuableComponents/SectionHeader'
import { FaGuitar } from 'react-icons/fa'

function AboutMe() {
  return (
    <section 
      id="AboutMe"
      className='section-wrapper  border-white p-4'>
      <SectionHeader title='About Me' />
      <div>
        about me parallax section - very simple just showing the buttlet points 
      </div>
      <ol>
        <li className='flex gap-2'>- 
          <div className=''>
             <span className='font-bold'>Design</span> 
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, placeat?</p>
          </div>  
          <FaGuitar/>
        </li>
        <li className='flex gap-2'>-  <FaGuitar/> React</li>
        <li className='flex gap-2'>-  <FaGuitar/> Unity</li>
        <li className='flex gap-2'>-  <FaGuitar/> Python</li>
        <li className='flex gap-2'>- Engineering <FaGuitar/></li>
        <li className='flex gap-2'>- Web design  <FaGuitar/></li>
        <li className='flex gap-2'>- Unity games  <FaGuitar/></li>
        <li className='flex gap-2'>- 3D modeling Blender  <FaGuitar/></li>
        <li className='flex gap-2'>- <FaGuitar/> Guitar/music</li>
        <li className='flex gap-2'>- <FaGuitar/> Snowboarding</li>
        <li className='flex gap-2'>- <FaGuitar/> basketball</li>
        <li className='flex gap-2'>- <FaGuitar/> hiking/backpacking</li>
        <li className='flex gap-2'>- <FaGuitar/> Climbing rock and ice</li>
      </ol>
    </section>
  )
}

export default AboutMe