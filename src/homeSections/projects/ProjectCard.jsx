import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ImageComponent from '../../wrappers/ImageComponent';

function ProjectCard({ project }) {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      className="relative"
      to={"/project/" + project.id}
      state={{ background: location }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative group border-2 border-gray-300 rounded-md overflow-hidden shadow-md">
        <div className="relative cursor-pointer w-full h-72 sm:h-80 md:h-64 lg:h-60 2xl:h-56">
          <motion.div
            className="w-full h-full"
            initial={{ filter: 'blur(4px)' }}
            animate={{ filter: isHovered ? 'blur(0px)' : 'blur(4px)' }}
            transition={{ duration: 0.3 }}
          >
            <ImageComponent
              src={`${process.env.PUBLIC_URL}/projects/${project.id}/${project.images[0].src}`}
              blurHash="LYEEK4o$t7od_6e.X7W=-_aJkBWr"
              alt={project.name}
              className="w-full h-full object-contain"
            />
          </motion.div>
          <AnimatePresence>
            {!isHovered && (
              <motion.div
                className="absolute bottom-0 left-0 w-full p-2 text-white flex flex-col"
                initial={{ y: 0 }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0" />
                <h3 className="relative z-10">{project.name}</h3>
                <p className="relative z-10">{project.blurb}</p>
                <div className="relative z-10">{project.techStack.join(', ')}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute top-0 right-0 p-2 text-white bg-black bg-opacity-50 rounded-bl-2xl"
                initial={{ y: '-100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-100%' }}
                transition={{ duration: 0.3 }}
              >
                <div className='hover:text-accent'>Learn More</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
