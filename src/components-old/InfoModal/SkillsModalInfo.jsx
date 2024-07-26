import React from 'react';

const SkillsModalInfo = ({ skills }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold">Skill: {skills.id}</h3>
      <p className="mt-2">Skills: {skills.skills.join(', ')}</p>
    </div>
  );
};

export default SkillsModalInfo;
