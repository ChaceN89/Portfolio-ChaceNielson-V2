import React from 'react';
import { Link } from 'react-router-dom';

export const heroData = {
  top: "Hi, my name is",
  name: "CHACE NIELSON",
  description: (
    <div>
      I am a <Link to='/skills/engineering' className="text-accent-light hover:underline">Software Engineer</Link> with a passion for music and the outdoors. I have worked on a variety of projects from <Link to='/skills/web-design' className="text-accent-light hover:underline">Web Design</Link> to <Link to='/skills/game-design' className="text-accent-light hover:underline">Unity Games</Link>.
    </div>
  ),
  
  buttons: [
    {
      pdf: "Chace Nielson - Resume.pdf",
      name: "Resume"
    },
    {
      id: "Projects",
      name: "Projects"
    },
    {
      id: "AboutMe",
      name: "Skills"
    }
  ]
};
