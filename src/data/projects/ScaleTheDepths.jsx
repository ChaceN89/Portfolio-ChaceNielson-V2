/**
 * @file scaleTheDepths.js
 * @module scaleTheDepths
 * @desc Contains portfolio data for the Scale the Depths commercial game project.
 *
 * @name Scale the Depths
 *
 * @author Chace Nielson
 * @created 2024-08-21
 * @updated 2026-08-18
 * @since 2.1
 *
 * @notes
 * - Originally created for GMTK Game Jam 2024.
 * - Expanded into a commercially released title with 200,000+ units sold worldwide.
 */

import IconLibrary from "../iconLibrary";
import { BoldSpan } from "../../components/uiElements/InLineText";
import { FaSteam } from "react-icons/fa";

const short = (
  <>
    Winner of the 2024 GMTK Game Jam, now a full commercial release with <strong>200,000+ units sold worldwide</strong>.
  </>
);

const long = (
  <div className="space-y-2">
    <p>
      <BoldSpan>Scale the Depths</BoldSpan> is a relaxing fish-scaling game that
      began as our entry for the <BoldSpan>2024 GMTK Game Jam</BoldSpan>. Built
      around the theme <BoldSpan>Built to Scale</BoldSpan>, the game places the
      player in the role of a robot chef catching and scaling unusual fish for
      underwater customers. The original jam version placed{" "}
      <BoldSpan>1st out of 7,000+ submissions</BoldSpan>.
    </p>

    <p>
      Following the game jam, our team expanded the project into a full
      commercial release. <BoldSpan>Scale the Depths</BoldSpan> has since sold
      more than <BoldSpan>200,000 units worldwide</BoldSpan>, with continued
      development supporting upcoming releases on{" "}
      <BoldSpan>Nintendo Switch, Xbox, PlayStation, and mobile</BoldSpan>.
    </p>

    <p>
      As a software engineer and game developer on the project, I designed and
      implemented <BoldSpan>procedural fish-generation systems</BoldSpan>,{" "}
      <BoldSpan>save and persistence systems</BoldSpan>, and gameplay systems
      supporting progression and game-state management. I also contributed to{" "}
      <BoldSpan>game design, level design, narrative design, worldbuilding</BoldSpan>,
      and environmental storytelling.
    </p>

    <p>
      Narrative work included researching and writing{" "}
      <BoldSpan>fish facts and location-based content</BoldSpan> used throughout
      the game. I continue to work alongside artists, designers, and developers
      on new content, platform releases, balancing, optimization, and
      post-launch development.
    </p>
  </div>
);

export const scaleTheDepths = {
  id: "scale-the-depths",
  name: "Scale the Depths",
  tags: ["Game", "Unity", "C#", "Game Design", "Narrative Design", "Writting"],
  badge: "Commercial Release",
  blurb: short,
  description: long,

  thumbnail: {
    src: "scaleTheDepths-0.jpg",
    blurhash: "LfHz9MVaShM{_4RkbIazRQWCoJtR",
  },

  images: [
    { src: "scaleTheDepths-20.jpg", blurhash: "LMCkDKR.cDtQ~CR.g3skSCW?n5rq" },
    { src: "scaleTheDepths-21.jpg", blurhash: "L77yIdn4HXVEMIo4tSt9L}n,yXo~" },
    { src: "scaleTheDepths-22.jpg", blurhash: "LHJkP}yWtm$gwh-;RNob0=VZMbXR" },
    { src: "scaleTheDepths-23.jpg", blurhash: "LUF$nkoz01bH-;azRjfR9FWB%2a#" },
    { src: "scaleTheDepths-24.jpg", blurhash: "LFCPxB%2MxMx~BjFoJoe9EIU%M%g" },
    { src: "scaleTheDepths-25.jpg", blurhash: "LWEzfntRIVW.~XkDMyjEVvNHVts8" },
    { src: "scaleTheDepths-26.jpg", blurhash: "LVJa.gt8_NozadRjxtoJWraKMxV@" },

    { src: "scaleTheDepths-18.jpg", blurhash: "L14L:ryGU|%h?^%ixwtm8~Sk%$kX" },
    { src: "scaleTheDepths-9.jpg", blurhash: "LNB=FrBsFh%M~nIVMxwaQkn3nhkX" },
    { src: "scaleTheDepths-7.jpg", blurhash: "L8Ac[B=yic9Z~Ar=%MNa4TIU.8%N" },
    { src: "scaleTheDepths-3.jpg", blurhash: "LCC?l-~q9GRj,,rqIotRDOVXxtS$" },
    { src: "scaleTheDepths-4.jpg", blurhash: "LHB:T-?a9Z9GVrr=xuT001IV%M%L" },
    { src: "scaleTheDepths-17.jpg", blurhash: "LLDTFr0LxDxuM_xtogRkIA-oWBWA" },
    { src: "scaleTheDepths-12.jpg", blurhash: "LVIhW]oz_NozV@RjxtoJkDemIUV@" },
    { src: "scaleTheDepths-11.jpg", blurhash: "LTI#cKtR_MkVaiRjxos,R:i_MwV@" },
    { src: "scaleTheDepths-15.jpg", blurhash: "LSIEw#%f_No#M{n$t6t6R.aKIAaK" },
    { src: "scaleTheDepths-5.jpg", blurhash: "LF3KmirSrUnLpynLn2fotPp1nMnM" },
    { src: "scaleTheDepths-10.jpg", blurhash: "LP3K]YobkCi]oXkZo#nhm$kYkEkD" },
    { src: "scaleTheDepths-14.jpg", blurhash: "LjJRU3WA00xus.jaa#fi9Ft7xuRj" },
    { src: "scaleTheDepths-16.jpg", blurhash: "LnJ[Fsoc00a$s:WBa}of8{j[%Max" },
    { src: "scaleTheDepths-19.jpg", blurhash: "LzJ7:Uj[0Lj[Rkayofj[E2j[xtay" },
    { src: "scaleTheDepths-1.jpg", blurhash: "LmJ*huof00aeofaef8of8{fkx]f6" },
    { src: "scaleTheDepths-2.jpg", blurhash: "LpKK+pae00t7oeayfRkB9FoM%MWB" },
    { src: "scaleTheDepths-6.jpg", blurhash: "L56u6b-1ESo$%jt7WEWFMaby%Osk" },
    { src: "scaleTheDepths-8.jpg", blurhash: "LE9@L?V?4no#00of?vRjxuf*M{jZ" },
    { src: "scaleTheDepths-13.jpg", blurhash: "LL3vaon#m~kYoboJj^kEocofkEj]" },

  ],

  youtubeID: "wM1fmFgYscU",

  mainStack: [
    IconLibrary.UNITY,
    IconLibrary.CSHARP,
    IconLibrary.NARRATIVE_DESIGN,
    IconLibrary.GAME_DESIGN,
  ],

  extendedStack: [
    IconLibrary.GAMEPLAY_PROGRAMMING,
    IconLibrary.LEVEL_DESIGN,
    IconLibrary.SAVE_SYSTEMS,
    IconLibrary.FMOD,
    IconLibrary.SHADER_GRAPH,
    IconLibrary.INSPECTOR_TOOLS,
    IconLibrary.PLASTIC_SCM,
    IconLibrary.TEAM_COLLABORATION,
  ],

  externalLinks: [
    {
      name: "Play on Steam",
      link: "https://store.steampowered.com/app/3198890/Scale_the_Depths/",
      icon: FaSteam,
    },
    {
      name: "Game Jam Version",
      link: "https://serpexnessie.itch.io/scale-the-depths",
      icon: IconLibrary.ITCHIO.icon,
    },
    {
      name: "GMTK Results",
      link: "https://youtu.be/gqCAeFjB8Uo?si=Wxp0ATxZGN4vtOGH&t=1133",
      icon: IconLibrary.YOUTUBE.icon,
    },
  ],
};