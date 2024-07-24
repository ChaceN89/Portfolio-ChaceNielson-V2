import React, { useState, useEffect } from 'react';
import { BsYoutube, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';


const Tooltip = ({ text }) => (
  <div className="absolute z-10 p-1 text-sm text-primary bg-secondary rounded  bottom-full mb-2">
    {text}
  </div>
);

function MediaLinks() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (hoveredLink) {
      const timer = setTimeout(() => setShowTooltip(true), 1500);
      return () => clearTimeout(timer);
    }
    setShowTooltip(false);
  }, [hoveredLink]);

  const mediaLinks = [
    { name: "GitHub", icon: BsGithub, link: "https://github.com/ChaceN89" },
    { name: "YouTube", icon: BsYoutube, link: "https://www.youtube.com/@chacenielson5413" },
    { name: "Instagram", icon: BsInstagram, link: "https://www.instagram.com/chacenielson" },
    { name: "LinkedIn", icon: BsLinkedin, link: "https://www.linkedin.com/in/chace-nielson" }
  ];

  return (
    <div className="grid grid-cols-2 gap-0.5 sm:flex justify-center space-x-0.5 relative">
      {mediaLinks.map((link) => (
        <a
          key={link.name}
          href={link.link}
          className= "relative"
          aria-label={link.name}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredLink(link.name)}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <div className="flex items-center justify-center 
            w-10 h-10 rounded-full 
            bg-primary  hover:bg-accent text-secondary hover:text-primary 
            transition duration-300"
          >
            <link.icon size={28} className="" />
          </div>
          {showTooltip && hoveredLink === link.name && (
            <Tooltip text={link.name} />
          )}
        </a>
      ))}
    </div>
  );
}

export default MediaLinks;
