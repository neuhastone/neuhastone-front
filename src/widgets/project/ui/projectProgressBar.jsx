import '@widgets/project/ui/projectProgressBar.css'
const ProgressBar = ({ step }) => {
  return (
    <div className="step-indicator">
      <div className={step >= 1 ? 'active' : ''}></div>
      <div className={step >= 2 ? 'active' : ''}></div>
      <div className={step >= 3 ? 'active' : ''}></div>
      <div className={step >= 4 ? 'active' : ''}></div>
      <div className={step >= 5 ? 'active' : ''}></div>
    </div>
  );
};

export default ProgressBar