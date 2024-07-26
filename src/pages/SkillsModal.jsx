import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { techSkills } from "../data/skillsData";

const SkillsModal = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Check if the skill exists based on the id
  const skill = techSkills.find(skill => skill.id.toLowerCase().replace(" ", "") === id.toLowerCase());

  useEffect(() => {
    // If the skill is not found, navigate to the home page
    if (!skill) {
      navigate('/');
    }
  }, [id, skill, navigate]);

  // If skill is not found, return null to prevent rendering
  if (!skill) {
    return null;
  }

  return (
    <div>
      <h1>{skill.name}</h1>
      <p>{skill.description}</p>
      <h2>Top Skills</h2>
      <div className="flex flex-wrap">
        {skill.topSkills.map((topSkill, index) => {
          const IconComponent = topSkill.icon;
          return (
            <div key={index} className="m-2 flex flex-col items-center">
              {IconComponent ? <IconComponent style={{ color: topSkill.color, fontSize: '2rem' }} /> : <img src={topSkill.SVG_path} alt={topSkill.name} style={{ width: '2rem', height: '2rem' }} />}
              <p>{topSkill.name}</p>
            </div>
          );
        })}
      </div>
      <h2>Minor Skills</h2>
      <ul>
        {skill.minorSkills.map((minorSkill, index) => (
          <li key={index}>{minorSkill}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsModal;
