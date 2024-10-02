import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';

function Step4({ data, updateProjectData}) {
  const [showBudgetInput, setShowBudgetInput] = useState(false);
  

  const handleBudgetChange = (e) => {
    updateProjectData('budget', e.target.value);
  };

  return (
    <div className="budget-section">
        <h3>예산</h3>
        <button onClick={() => setShowBudgetInput(false)}>예산 없음</button>
        <button onClick={() => setShowBudgetInput(true)}>예산 있음</button>
        {showBudgetInput && (
          <input
            type="number"
            placeholder="예산을 입력하세요"
            value={data.budget || ''}
            onChange={handleBudgetChange}
          />
        )}
      </div>
   
  );
}

export default Step4;
