// import React from 'react';

const ProjectStep1 = ({ data, updateProjectData, onNext }) => {
  return (
    <div>
      <label>프로젝트 제목</label>
      <input
        type="text"
        value={data.title}
        onChange={(e) => updateProjectData('title', e.target.value)}
        placeholder="프로젝트 제목을 입력하세요"
      />
      <button onClick={onNext}>다음</button>
    </div>
  );
};

export default ProjectStep1;