const ProjectStep2 = ({ data, updateProjectData, onNext, onPrev }) => {
  return (
    <div>
      <label>예상 프로젝트</label>
      <input
        type="text"
        value={data.description}
        onChange={(e) => updateProjectData('description', e.target.value)}
        placeholder="프로젝트 설명을 입력하세요"
      />
      <button onClick={onPrev}>이전</button>
      <button onClick={onNext}>다음</button>
    </div>
  );
};

export default ProjectStep2;