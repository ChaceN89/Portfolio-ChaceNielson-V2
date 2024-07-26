import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/projectData';


function ProjectSection() {
  return (
    <section className='min-h-section-height p-4 '>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4'>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;
