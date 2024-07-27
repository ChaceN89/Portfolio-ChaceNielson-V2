import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion';
import ImageComponent from '../../wrappers/ImageComponent';

function ProjectCard({ project }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -200px 0px' });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      setTimeout(() => setIsInitialLoad(false), 1000); // Set initial load to false after the delay
    }
  }, [controls, inView]);

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
      ref={ref}
      className="relative group border-2 border-gray-300 rounded-md overflow-hidden shadow-md"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="relative w-full h-72 sm:h-80 md:h-64 lg:h-60 2xl:h-56 cursor-pointer ">
      <motion.div
          className="w-full h-full"
          initial={{ opacity: isInitialLoad ? 1 : 0.8, filter: 'blur(0px)' }} // Ensure the image is fully visible and unblurred initially
          animate={{ opacity: isHovered || isClicked ? 1 : 0.8, filter: isHovered || isClicked ? 'blur(0px)' : 'blur(0.5px)' }}
          transition={{ delay: isInitialLoad ? 1 : 0, duration: 0.3, ease: 'easeInOut' }}
        >
          <ImageComponent
            src={`${process.env.PUBLIC_URL}/projects/${project.id}/${project.images[0].src}`}
            blurHash={project.images[0].blurhash}
            alt={project.name}
            className="w-full h-full object-contain"
          />
        </motion.div>
              
        <AnimatePresence>
          {(!isHovered && !isClicked) && (
            <motion.div
              className="absolute bottom-0 left-0 w-full h-1/2 p-2 text-white bg-black bg-opacity-25 backdrop-blur-lg flex flex-col justify-between"
              initial={{ y: "100%" }}
              animate={inView ? { y: 0, transition: { delay: isInitialLoad ? 0.8 : 0, duration: 0.3 } } : {}}
              exit={{ y: '100%' }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <h3 className="relative z-10 underline">{project.name}</h3>
                <p className="text-sm relative z-10">{project.blurb}</p>
              </div>
              <div className="relative z-10 flex">
                {project.mainStack.map((stack, index) => (
                  <div key={index} className="flex items-center mr-2">
                    {stack.icon && (
                      <stack.icon 
                        className="inline-block mr-1" 
                        style={{ color: stack.color || 'inherit' }} 
                      />
                    )}
                    {stack.svg_path && (
                      <img 
                        src={`${process.env.PUBLIC_URL}/svg-icons/${stack.svg_path}`} 
                        alt={stack.name} 
                        className="inline-block mr-1 h-5" 
                      />
                    )}
                    {stack.name && <span>{stack.name}</span>}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {(isHovered || isClicked) && (
            <motion.div
              className="absolute top-0 right-0 px-2 py-1 text-white bg-black bg-opacity-50 rounded-bl-xl"
              initial={{ y: '-100%' }}
              animate={{ y: 0, transition: { delay: 0, duration: 0.3 } }}
              exit={{ y: '-100%', transition: { duration: 0.3 } }}
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
