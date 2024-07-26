import { BsGithub } from "react-icons/bs";

const short = "Haptic Jenga game built using Unity and C#.";
const long = (
  <div className='space-y-2'>
    <p>
      This project involves creating a Haptic Jenga game using Unity and C#. The game leverages a haptic pen and OpenHaptics toolkit to provide a tactile feedback experience to the user.
    </p>
    <p>
      The game simulates the traditional Jenga game where users can interact with the blocks through the haptic pen, providing a realistic touch sensation.
    </p>
    <p>
      This project demonstrates the integration of haptic technology with game development to enhance user experience.
    </p>
  </div>
);

export const jenga = {
  id: "jenga",
  name: "Jenga",
  tag: "Game Development",
  Blurb: short,
  description: long,
  blurhash: "",
  images: [
    { src: "jenga1.jpg", blurhash: "" },
    { src: "jenga2.jpg", blurhash: "" },
  ],
  techStack: [
    "Unity",
    "C#",
    "Haptic Pen",
    "OpenHaptics"
  ],
  externalLinks: [
    { name: "Code", link: "https://github.com/ChaceN89/Haptic-Jenga", icon: BsGithub },
  ],
};
