import React from 'react'
import { Link, useLocation } from 'react-router-dom';



function ProjectSection() {


  const location = useLocation();


  return (
    <div className='border-2 border-white p-4 m-10'>
    projects
    <ul>
      <li>
        <Link className='hover:text-red-700 hover:underline' to="/project/testProject" state={{ background: location }}>Test Project</Link>
      </li>
      {/* Add more project links here */}
    </ul>
  </div>
  )
}

export default ProjectSection