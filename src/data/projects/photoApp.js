import { BsYoutube, BsGithub } from "react-icons/bs";

const short = "Full-Stack Photo App using MongoDB, React, ExpressJS, and NodeJS.";
const long = (
  <div className='space-y-2'>
    <p>
      This is a full-stack photo application that allows users to upload and manage their photo collections. It is built using MongoDB, React, ExpressJS, and NodeJS.
    </p>
    <p>
      The application features user authentication, photo categorization, and sharing capabilities. It provides a responsive and user-friendly interface for managing photos.
    </p>
    <p>
      The project showcases the integration of a complete MERN stack to build a robust and scalable photo management system.
    </p>
  </div>
);

export const photoApp = {
  id: "photo-app",
  name: "Photo App",
  tag: "Full-Stack",
  blurb: short,
  description: long,
  blurhash: "",
  images: [
    { src: "photoApp1.jpg", blurhash: "" },
    { src: "photoApp2.jpg", blurhash: "" },
  ],
  mainStack:[
    "MongoDB",
    "React",
    "ExpressJS",
    "NodeJS",
  ],
  fullStack:[
    "Full-Stack",
    "Authentication",
    "MongoDB",
    "React",
    "ExpressJS",
    "NodeJS"
  ],
  externalLinks: [
    { name: "Overview", link: "https://www.youtube.com/watch?v=mktAIV4sjFQ", icon: BsYoutube },
    { name: "Code", link: "https://github.com/ChaceN89/Aviar", icon: BsGithub },
  ],
};
