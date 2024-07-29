/**
 * @file engineering.js
 * @module engineering
 * @desc Contains data for the Engineering skills section.
 * 
 * @name Engineering
 * 
 * @ChaceN89
 * @created 2024-07-28
 * @updated 2024-07-28
 */

import IconSkills from "../iconSkills";

export const engineering = { 
  // Engineering
  id: "engineering",
  name: "Engineering", 
  linkName: "View More skills", 

  description: (
    <span>
      I have been working on engineering projects for 2 years. My main engineering stack includes Git, GitHub, Java, and C++. 
    </span>
  ),
  topSkills: [
    IconSkills.GIT,
    IconSkills.GITHUB,
    IconSkills.JAVA,
    IconSkills.CPP,
  ],
  minorSkills: [
    IconSkills.JUPYTER,
    IconSkills.HADOOP,
    IconSkills.APACHE_SPARK,
    IconSkills.VS_CODE,
    IconSkills.CI_CD,
  ],
};
