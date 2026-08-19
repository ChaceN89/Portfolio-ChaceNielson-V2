/**
 * @file gameDesign.js
 * @desc Contains data for the game Design skills section.
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated Aug 6, 2025
 */

import IconLibrary from "../iconLibrary";

export const gameDesign = {
  id: "game-development",
  name: "Game Development",
  description: "I create games that feel great to play, responsive, immersive, and thoughtfully designed from code to controls.",

  modalDescription: "This section highlights the tools, frameworks, and design patterns I use to create games from prototype to polish. From scripting and physics systems to shaders, animations, and editor tooling, each category below breaks down the core components of my game development workflow.",

  commonTools: [
    IconLibrary.UNITY,             // Core engine
    IconLibrary.CSHARP,           // Primary scripting language
    IconLibrary.BLENDER,          // 3D modeling & animation
    IconLibrary.INSPECTOR_TOOLS,  // Advanced Unity editor tooling
    IconLibrary.SHADER_GRAPH,     // Technical art & VFX
    IconLibrary.GIMP,             // Pixel art and sprite animations
    IconLibrary.PLASTIC_SCM,      // Version control for Unity workflows
    IconLibrary.FMOD,             // Pro-level audio integration
  ],
  allTools: [
    {
      category: "Gameplay & Design",
      skills: [
        IconLibrary.GAMEPLAY_PROGRAMMING,
        IconLibrary.GAME_DESIGN,
        IconLibrary.NARRATIVE_DESIGN,
        IconLibrary.LEVEL_DESIGN,
        IconLibrary.SAVE_SYSTEMS,
        IconLibrary.UNITY_PHYSICS,
        IconLibrary.PATHFINDING,
      ],
    },
    {
      category: "Development & Tooling",
      skills: [
        IconLibrary.UNITY,
        IconLibrary.CSHARP,
        IconLibrary.INSPECTOR_TOOLS,
        IconLibrary.PLASTIC_SCM,
        IconLibrary.GITHUB,
      ],
    },
    {
      category: "Technical Art & Audio",
      skills: [
        IconLibrary.SHADER_GRAPH,
        IconLibrary.ANIMATION,
        IconLibrary.FMOD,
        IconLibrary.BLENDER,
        IconLibrary.GIMP,
      ],
    },
    {
      category: "Production & Collaboration",
      skills: [
        IconLibrary.TEAM_COLLABORATION,
        IconLibrary.PROBLEM_SOLVING,
        IconLibrary.CREATIVITY,
        IconLibrary.DOCUMENTATION,
      ],
    },
  ]
};
