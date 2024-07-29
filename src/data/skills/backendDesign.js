/**
 * @file backendDesign.js
 * @module backendDesign
 * @desc Contains data for the Backend Design skills section.
 * 
 * @name Backend Design
 * 
 * @ChaceN89
 * @created 2024-07-28
 * @updated 2024-07-28
 */

import IconSkills from "../iconSkills";

export const backendDesign = { 
  id: "backend-design",
  name: "Backend Design", 
  linkName: "See More of My Backend Tools", 
  description: (
    <span>
      It might not be as flashy, but the backend drives my frontend development.
    </span>
  ),
  topSkills: [
    IconSkills.PYTHON,
    IconSkills.EXPRESS_JS,
    IconSkills.FASTAPI,
    IconSkills.POSTGRESQL,
  ],
  minorSkills: [
    IconSkills.PLOTLY_DASH,
    IconSkills.STREAMLIT,
    IconSkills.DJANGO,
    IconSkills.MONGODB,
    IconSkills.MYSQL,
    IconSkills.SQLITE,
    IconSkills.DOCKER,
    IconSkills.REST_API,
  ],
};
