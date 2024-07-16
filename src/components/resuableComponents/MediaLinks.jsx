import React from 'react';
import { BsGithub, BsLinkedin, BsInstagram, BsYoutube } from 'react-icons/bs';

function MediaLinks({ size = 25 }) {
  return (
    <div className='flex justify-between items-center' >
      <MediaLink link={"https://github.com/ChaceN89"}><BsGithub size={size} /></MediaLink>
      <MediaLink link={"https://www.linkedin.com/in/chace-nielson"}><BsLinkedin size={size} /></MediaLink>
      <MediaLink link={"https://www.instagram.com/chacenielson/"}><BsInstagram size={size} /></MediaLink>
      <MediaLink link={"https://www.youtube.com/channel/UCXcMrM3Vk3TpXu3crQ6Yakg/videos"}><BsYoutube size={size+4} /></MediaLink>
      <MediaLink link={"https://glassgeckogames.netlify.app/"}>
        <img
          style={{ width: size+6, height: size+6 }}
          src={process.env.PUBLIC_URL + '/logos/Glass_Gecko_Games_Icon_clear.png'}
          alt="Logo"
        />
      </MediaLink>
    </div>
  );
}

function MediaLink({ link, children }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className='text-2xl text-white p-1'>
      {children}
    </a>
  );
}

export default MediaLinks;
