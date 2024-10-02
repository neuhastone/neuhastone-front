const StepNavigation = ({ currentStep, totalSteps, prevStep, nextStep }) => {
  return (
    <div className="step-navigation">
      { currentStep > 1 && (
        <button 
          onClick={prevStep} 
          disabled={currentStep === 1}
          className="nav-button prev"
        >
          ←
        </button>
      )}
      { currentStep < totalSteps && (
        <button 
          onClick={nextStep} 
          disabled={currentStep === totalSteps}
          className="nav-button next"
        >
          →
        </button>
      )}
    </div>
  );
};

export default StepNavigation;