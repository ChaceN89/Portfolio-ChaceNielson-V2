import React from 'react';
import { globals } from '../../data/globals';
import { Link as ScrollLink } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa';
import Tooltip from './Tooltip'

function ReturnToTop() {
  return (
    <div className="fixed bottom-2 right-2 z-10">
      <Tooltip text={"To Top"}>
        <ScrollLink
          className="hover:cursor-n-resize"
          to={"Home"}
          spy={true}
          smooth={true}
          offset={globals.ScrollLink.offset}
          duration={globals.ScrollLink.duration}
          >
          <div className="w-10 h-10 p-2 bg-secondary rounded-full opacity-20 hover:opacity-80 flex items-center justify-center">
            <FaArrowUp className="text-primary" />
          </div>
        </ScrollLink>
        </Tooltip>
    </div>
  );
}

export default ReturnToTop;
