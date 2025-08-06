/**
 * @file fruitJar.jsx
 * @module fruitJar
 * @desc Contains data for the Fruit Jar App project.
 * 
 * @name Fruit Jar App
 * 
 * @author Chace Nielson
 * @created Aug 08 2025
 * @updated Aug 08 2025
 */

import IconLibrary from "../iconLibrary";
import { BoldSpan } from "../../components/uiElements/InLineText";

// Short description (blurb) to be displayed on the project card
const short = "Frontend app for browsing, grouping, and collecting virtual fruits with nutritional analysis.";

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className="space-y-2">
    <p>
      The <BoldSpan>Fruit Jar App</BoldSpan> is a comprehensive web application built with <BoldSpan>React</BoldSpan> and <BoldSpan>TypeScript</BoldSpan> that allows users to explore, organize, and collect virtual fruits into a personalized "fruit jar" for detailed nutritional analysis and visualization.
    </p>
    <p>
      Key features include <BoldSpan>dynamic fruit grouping</BoldSpan> by Family, Order, or Genus, <BoldSpan>dual view modes</BoldSpan> (List and Table), and an interactive <BoldSpan>pie chart visualization</BoldSpan> powered by Recharts. Users can add individual fruits or entire groups to their collection and analyze calorie distribution with detailed nutrition breakdowns.
    </p>
    <p>
      Originally designed with a <BoldSpan>proxy server architecture</BoldSpan> to handle external API calls, the app has been simplified to use static JSON data to avoid AWS costs. The application features <BoldSpan>responsive design</BoldSpan>, <BoldSpan>dark mode support</BoldSpan>, and an animated splash screen for enhanced user experience.
    </p>
    <p>
      Deployed on <BoldSpan>AWS S3</BoldSpan> with static website hosting, this project demonstrates modern React development practices, effective state management with Context API, and clean, maintainable TypeScript code architecture.
    </p>
  </div>
);

export const fruitJar = {
  id: "fruit-jar",
  name: "Fruit Jar App",
  tags: ["Web App", "React", "TypeScript", "AWS", "Frontend"],
  blurb: short,
  description: long,
  thumbnail: {
    src: "fruitJar1.jpg",
    blurhash: "LGD+{?4n00%M~qRjM{%M%MRjofay",
  },
  images: [
    { src: "fruitJar1.jpg", blurhash: "LIQ,8q%O_4MvACIoRit8JoV?RjkX" },
    { src: "fruitJar2.jpg", blurhash: "LoG9BR~qx]r?IoIURjkB9tM{niR*" },
  ],
  mainStack: [
    IconLibrary.REACT,
    IconLibrary.TYPESCRIPT,
    IconLibrary.TAILWIND,
  ],
  extendedStack: [
    IconLibrary.S3,
    IconLibrary.DATA_VISUALIZATION,
    IconLibrary.STATEMANAGEMENT,
    IconLibrary.RESPONSIVE_DESIGN,
    IconLibrary.REST_API,
  ],
  externalLinks: [
    { name: "Live App", link: "http://fruit-jar-app.s3-website-us-east-1.amazonaws.com", icon: IconLibrary.WORLD.icon },
    { name: "Main Repo", link: "https://github.com/ChaceN89/fruit-jar-app", icon: IconLibrary.GITHUB.icon },
    { name: "Proxy Server", link: "https://github.com/ChaceN89/fruit-jar-app-proxy-server", icon: IconLibrary.GITHUB.icon },
  ],
};