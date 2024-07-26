import React from 'react';
import { globals } from '../../data/globals';
import { Link as ScrollLink } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa';

function ReturnToTop() {
  return (
    <div className="absolute bottom-4 right-4 z-50">
      <ScrollLink
        className="hover:cursor-pointer"
        to={"Home"}
        spy={true}
        smooth={true}
        offset={globals.ScrollLink.offset}
        duration={globals.ScrollLink.duration}
      >
        <div className="w-10 h-10 p-2 bg-secondary rounded-full opacity-80 hover:opacity-100 flex items-center justify-center">
          <FaArrowUp className="text-primary" />
        </div>
      </ScrollLink>
    </div>
  );
}

export default ReturnToTop;
