import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/projectData';

const projectVariants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.15,
      ease: 'easeOut',
    },
  },
};

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function ProjectSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -200px 0px' });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      className='min-h-section-height p-4'
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
    >
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4'>
        {projects.map((project) => (
          <motion.div key={project.id} variants={projectVariants}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default ProjectSection;
