import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/pageData/projectData';
import BackgroundWrapper from '../../wrappers/BackgroundWrapper';
import SectionHeader from '../../components/uiElements/SectionHeader';

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
    <BackgroundWrapper 
      className='relative' 
      src={process.env.PUBLIC_URL + "/png-backgrounds/detailed/range-b&w2-trim.png"}
      lowResSrc={process.env.PUBLIC_URL + "/png-backgrounds/detailed/range-b&w2-trim-small.png"}
      bgOpacity={20}
    >
      <motion.section
        ref={ref}
        className='min-h-section-height container mx-auto'
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
        >

        <SectionHeader title='Projects' subtitle="When I'm coding" />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6'>
          {projects.map((project) => (
            <motion.div key={project.id} variants={projectVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </BackgroundWrapper>
  );
}

export default ProjectSection;
