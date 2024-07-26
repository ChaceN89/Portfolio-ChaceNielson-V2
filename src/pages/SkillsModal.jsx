import { useParams } from "react-router-dom";

const SkillsModal = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Skills: {id}</h1>
    </div>
  );
};

export default SkillsModal;