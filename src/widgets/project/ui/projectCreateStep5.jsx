import DatePicker from 'react-datepicker';
import { useEffect, useState } from 'react';

function Step5({ data, updateProjectData}) {
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    updateProjectData('startDate', startDate);
  }, [startDate])

  const handleSubmit = () => {
    console.log(data)
  }

  return (
    <div>
      <h2>시작 날짜</h2>
      <DatePicker 
        selected={startDate} 
        onChange={(date) => setStartDate(date)}
      />
      <button onClick={handleSubmit}>프로젝트 생성</button>
    </div>
  );
}

export default Step5;