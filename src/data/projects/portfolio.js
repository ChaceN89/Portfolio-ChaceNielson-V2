import { BsGithub } from "react-icons/bs";

const short = "My personal portfolio website.";
const long = (
  <div className='space-y-2'>
    <p>
      This is my personal portfolio website, showcasing my projects, skills, and experiences. It is built using React and Tailwind CSS.
    </p>
    <p>
      The portfolio features a clean and modern design, providing an overview of my work and contact information.
    </p>
    <p>
      The project is deployed using Vercel, demonstrating the use of modern web technologies to create a personal branding website.
    </p>
  </div>
);

export const portfolio = {
  starred: true,
  id: "portfolio",
  name: "My Portfolio",
  tag: "Frontend",
  Blurb: short,
  description: long,
  blurhash: "",
  images: [
    { src: "portfolio1.jpg", blurhash: "" },
    { src: "portfolio2.jpg", blurhash: "" },
  ],
  techStack: [
    "React",
    "Tailwind",
    "CSS",
    "Vercel"
  ],
  externalLinks: [
    { name: "Code", link: "https://github.com/ChaceN89/Portfolio-ChaceNielson", icon: BsGithub },
  ],
};
