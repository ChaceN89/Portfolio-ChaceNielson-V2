/**
 * @file glassGeckoGames.js
 * @module glassGeckoGames
 * @desc Contains portfolio data for the Glass Gecko Games studio website.
 *
 * @name Glass Gecko Games Website
 *
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2026-08-18
 * @since 2.1
 *
 * @notes
 * - Official website for Glass Gecko Games.
 * - Built with React and Tailwind CSS.
 * - Reaches 2,000+ monthly visitors.
 */

import IconLibrary from "../iconLibrary";
import { BoldSpan } from "../../components/uiElements/InLineText";

const short = (
  <>
    Official Glass Gecko Games website built with React and Tailwind CSS,
    reaching <strong>2,000+ monthly visitors</strong>.
  </>
);

const long = (
  <div className="space-y-2">
    <p>
      I designed and developed the official{" "}
      <BoldSpan>Glass Gecko Games</BoldSpan> website using{" "}
      <BoldSpan>React</BoldSpan> and <BoldSpan>Tailwind CSS</BoldSpan>. The site
      serves as the studio's main web presence, showcasing our games, team,
      company information, and ongoing development work.
    </p>

    <p>
      The application is built around{" "}
      <BoldSpan>reusable React components</BoldSpan> and responsive layouts,
      allowing content to adapt cleanly across desktop and mobile devices.
      Framer Motion provides interactive transitions and animations, while
      BlurHash-based image loading improves the experience when displaying
      image-heavy game content.
    </p>

    <p>
      I also implemented supporting web features including{" "}
      <BoldSpan>SEO, responsive design, EmailJS integration, PWA support</BoldSpan>,
      and continuous deployment. The site currently reaches more than{" "}
      <BoldSpan>2,000 monthly visitors</BoldSpan> and continues to evolve
      alongside the studio and its games.
    </p>
  </div>
);

export const glassGeckoGames = {
  id: "glass-gecko-games",
  name: "Glass Gecko Games Homepage",
  tags: ["Web App", "React", "Tailwind", "JavaScript", "Responsive Design"],
  badge: "",
  blurb: short,
  description: long,

  thumbnail: {
    src: "glassGecko5.jpg",
    blurhash: "LBCjFmd7MM9FsK55xH%M4,=zR$RP",
  },

  images: [
    { src: "glassGecko1.jpg", blurhash: "LBCjFmd7MM9FsK55xH%M4,=zR$RP" },
    { src: "glassGecko2.jpg", blurhash: "LBCjFmd7MM9FsK55xH%M4,=zR$RP" },
    { src: "glassGecko3.jpg", blurhash: "LBCjFmd7MM9FsK55xH%M4,=zR$RP" },
    { src: "glassGecko4.jpg", blurhash: "LBCjFmd7MM9FsK55xH%M4,=zR$RP" },
    { src: "glassGecko5.jpg", blurhash: "LBCjFmd7MM9FsK55xH%M4,=zR$RP" },
    { src: "glassGecko6.jpg", blurhash: "LBCjFmd7MM9FsK55xH%M4,=zR$RP" },
  ],

  mainStack: [
    IconLibrary.REACT,
    IconLibrary.TAILWIND,
    IconLibrary.FRAMER_MOTION,
  ],

  extendedStack: [
    IconLibrary.RESPONSIVE_DESIGN,
    IconLibrary.SEO,
    IconLibrary.CI_CD,
    IconLibrary.BLURHASH,
    IconLibrary.EMAIL_JS,
  ],

  externalLinks: [
    {
      name: "Visit Site",
      link: "https://glassgeckogames.com",
      icon: IconLibrary.WORLD.icon,
    },
    {
      name: "Code",
      link: "https://github.com/GlassGeckoGames/company-website",
      icon: IconLibrary.GITHUB.icon,
    },
  ],
};