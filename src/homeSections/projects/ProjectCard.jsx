import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ImageComponent from '../../wrappers/ImageComponent';

function ProjectCard({ project }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseEnter = () => {
    if (window.innerWidth >= 640) { // 640px is the breakpoint for small screens in Tailwind CSS
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 640) {
      setIsHovered(false);
    }
  };

  const handleClick = () => {
    if (window.innerWidth < 640) {
      setIsClicked(!isClicked);
    } else {
      navigate(`/project/${project.id}`, { state: { background: location } });
    }
  };

  return (
    <div
      className="relative group border-2 border-gray-300 rounded-md overflow-hidden shadow-md"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="relative w-full h-72 sm:h-80 md:h-64 lg:h-60 2xl:h-56 cursor-pointer">
        <motion.div
          className="w-full h-full"
          initial={{ filter: 'blur(4px)' }}
          animate={{ filter: isHovered || isClicked ? 'blur(0px)' : 'blur(4px)' }}
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
          {(!isHovered && !isClicked) && (
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
              <div className="relative z-10">{project.mainStack.join(', ')}</div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {(isHovered || isClicked) && (
            <motion.div
              className="absolute top-0 right-0 p-2 text-white bg-black bg-opacity-50 rounded-bl-2xl"
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to={`/project/${project.id}`}
                state={{ background: location }}
                className='hover:text-accent'
                onClick={(e) => e.stopPropagation()} // Prevents the parent click event
              >
                Learn More
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ProjectCard;
