/**
 * @file theCountIsDown.jsx
 * @module theCountIsDown
 * @desc Contains portfolio data for The Count is Down game jam project.
 *
 * @name The Count is Down
 *
 * @author Chace Nielson
 * @created 2026-08-18
 * @updated 2026-08-18
 * @since 2.1
 *
 * @notes
 * - Created for the 2026 GMTK Game Jam.
 * - Narrative-focused murder mystery built in Unity.
 * - Features dialogue progression, clues, inventory, game-state flags,
 *   exploration, combat, and player transformation.
 */

import IconLibrary from "../iconLibrary";
import { BoldSpan } from "../../components/uiElements/InLineText";

const short = (
  <>
    A narrative-driven vampire murder mystery built in Unity for the 2026 GMTK
    Game Jam.
  </>
);

const long = (
  <div className="space-y-2">
    <p>
      <BoldSpan>The Count is Down</BoldSpan> is a narrative-driven murder
      mystery created for the <BoldSpan>2026 GMTK Game Jam</BoldSpan>. Dracula
      has been murdered during a gathering at his castle, and one of his eight
      guests is responsible. Playing as Dracula's fledgling vampire, the player
      must explore the estate, question suspects, uncover evidence, and identify
      the killer.
    </p>

    <p>
      I worked on the game's <BoldSpan>programming and narrative design</BoldSpan>,
      developing systems that connect exploration, dialogue, clues, and player
      progression. Characters respond differently as the player discovers new
      evidence, allowing conversations to evolve based on what the player has
      learned.
    </p>

    <p>
      The progression system uses persistent{" "}
      <BoldSpan>game-state flags</BoldSpan> to track discoveries, events, and
      dialogue outcomes. These flags interact with a clue and inventory system,
      allowing dialogue options and character responses to unlock dynamically
      as the mystery develops.
    </p>

    <p>
      Gameplay also includes combat and a{" "}
      <BoldSpan>human-to-bat transformation system</BoldSpan>. Bat form allows
      the player to fly, avoid hazards, and reach areas inaccessible in human
      form, combining traversal mechanics with the game's investigation and
      level design.
    </p>
  </div>
);

export const theCountIsDown = {
  id: "the-count-is-down",
  name: "The Count is Down",
  tags: [
    "Game",
    "Unity",
    "C#",
    "Narrative Design",
    "Game Design",
    "Writting"
  ],
  badge: "GMTK Game Jam 2026",
  blurb: short,
  description: long,

  thumbnail: {
    src: "theCountIsDown-1.jpg",
    blurhash: "L19i6;tP00kYy@W=%gNF00RQ~qj;",
  },

  images: [
    { src: "theCountIsDown-2.jpg", blurhash: "L58z+I9zXo^gp{kDxvjY02=^xZ9c" },
    { src: "theCountIsDown-3.jpg", blurhash: "L9AAglverqH??^s9aKRP8{TLS5xu" },
    { src: "theCountIsDown-4.jpg", blurhash: "LDBMoYM_0O%1tmWUkDbI0Nt6~9R." },
    { src: "theCountIsDown-5.jpg", blurhash: "LCBLbakB1Jn-r?j[OEW=10jH}XS}" },
    { src: "theCountIsDown-6.jpg", blurhash: "LTA-xE%$DODj.mx]MdMyngj[WBae" },
  ],

  mainStack: [
    IconLibrary.UNITY,
    IconLibrary.CSHARP,
  ],

  extendedStack: [
    IconLibrary.GAME_DESIGN,
    IconLibrary.TEAM_COLLABORATION,
  ],

  externalLinks: [
    {
      name: "Play",
      link: "https://kar2fast.itch.io/the-count-is-down",
      icon: IconLibrary.ITCHIO.icon
    },
  ],
};