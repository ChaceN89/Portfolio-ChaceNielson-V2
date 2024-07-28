import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { globals } from '../globals';

export const callToActionData = {
  top: "Ready to Scale New Peaks?",
  bottom: (
    <div>
      <p>
        I'm always open to new opportunities. Let's <ScrollLink to="ContactMe" className="text-accent-light hover:underline hover:cursor-pointer" spy={true} smooth={true} offset={globals.ScrollLink.offset} duration={globals.ScrollLink.duration}>collaborate</ScrollLink> and create something amazing.
      </p>
      <p>
        Check out my portfolio to see how I can meet your needs.
      </p>
    </div>
  ),
  img: process.env.PUBLIC_URL + "/png-portraits/chace-5.png",
  lowResImg: process.env.PUBLIC_URL + "/png-portraits/chace-5-small.png",

  buttons: [
    {
      id: "ContactMe",
      name: "Let's Connect"
    },
  ]
}
