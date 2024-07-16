import React from 'react'
import { Link, useLocation } from 'react-router-dom';

function ProjectCard({name, description, image, link}) {
  const location = useLocation();

  return (
    <div>
      <div className='flex flex-col items-center'>
        <img src={image} alt={name} className=' object-cover'/>
        <div className='text-2xl font-bold'>{name}</div>
        <div className='text-base'>{description}</div>
        <a href={link} className='text-blue-500'> Project Link</a>
        <Link className='hover:text-red-700 hover:underline' to={"/project/"+name} state={{ background: location }}>Learn more</Link>

      </div>
    </div>
  )
}

export default ProjectCard