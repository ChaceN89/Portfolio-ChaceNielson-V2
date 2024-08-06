/**
 * @file photoApp.js
 * @module photoApp
 * @desc Contains data for the Photo App project.
 * 
 * @name Photo App
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-28
 * @since 2.1
 */

import IconSkills from "../iconSkills";

// Short description (blurb) to be displayed on the project card
const short = "Full-Stack photo gallery application with user authentication.";

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className='space-y-2'>
    <p>
      This full-stack photo gallery app (called Aviar) enables users to upload, organize, and manage their photo collections. Built with the MERN stack (MongoDB, ExpressJS, React, and NodeJS), it offers a robust and scalable solution for photo management. Key features include user authentication, photo categorization, and sharing capabilities.
    </p>
    <p>
      The app provides a responsive and user-friendly interface for seamless photo management. This project highlights the effective integration of the MERN stack to deliver a comprehensive photo gallery application.
    </p>
  </div>
);

export const photoApp = {
  id: "photo-app",
  name: "Photo App",
  tag: "Full-Stack",
  blurb: short,
  description: long,
  images: [
    { src: "photo2.jpg", blurhash: "LID9xL$$01OGcbx^s8i^%fsmozbw" },
    { src: "photo6.jpg", blurhash: "LG9@uBj[4nR..At8ogkC%Lt8xuad" },
    { src: "photo5.jpg", blurhash: "LGB;C8-n01IV?wtSs+t7gjjX-=xs" },
    { src: "photo4.jpg", blurhash: "LN9tisoI9Ft6?wofIot7tRogt7oz" },
    { src: "photo3.jpg", blurhash: "LGAdcs%L00NI?wxvoJkBx]o#-;$%" },
    { src: "photo1.jpg", blurhash: "LCAKgzxu00Sjx]xu.AWC_2t8Rks+" },
  ],
  youtubeEmbed:"https://www.youtube.com/watch?v=mktAIV4sjFQ",
  mainStack: [
    IconSkills.REACT,
    IconSkills.MONGODB,
    IconSkills.EXPRESSJS,
  ],
  extendedStack: [
    IconSkills.FULL_STACK,
    IconSkills.AUTHENTICATION,
    IconSkills.NODE_JS,
    IconSkills.CSS,
    IconSkills.HTML
  ],
  externalLinks: [
    { name: "Overview", link: "https://www.youtube.com/watch?v=mktAIV4sjFQ", icon: IconSkills.YOUTUBE.icon },
    { name: "Code", link: "https://github.com/ChaceN89/Aviar", icon: IconSkills.GITHUB.icon },
  ],
};
