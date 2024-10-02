import MemberInput from '@components/project/memberInput';
import { useState } from 'react';

const ProjectStep3 = ({ data, updateProjectData }) => {
  const [participant, setParticipant] = useState([]);

  const handleAddParticipant = () => {
    updateProjectData('participants', [...data.participants, participant]);
    setParticipant('');
  };

  return (
    <div>
      <label>참여자</label>
      <MemberInput></MemberInput>
      <button onClick={handleAddParticipant}>참여자 추가</button>
    </div>
  );
};

export default ProjectStep3;
