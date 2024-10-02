import { useState } from 'react';
import ProgressBar from '@widgets/project/ui/projectProgressBar'
import Step1 from '@widgets/project/ui/projectCreateStep1'
import Step2 from '@widgets/project/ui/projectCreateStep2'
import Step3 from '@widgets/project/ui/projectCreateStep3'
import Step4 from '@widgets/project/ui/projectCreateStep4'
import Step5 from '@widgets/project/ui/projectCreateStep5'
import StepNavigation from '@widgets/project/ui/stepNavigation'
import '@pages/createProject.css'
import Divider from '@components/project/ui/divider'

const CreateProjectPage = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 5;

  const [projectData, setProjectData] = useState({
    title: '',
    description: '',
    participants: []
  });

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const updateProjectData = (key, value) => {
    setProjectData(prevData => ({ ...prevData, [key]: value }));
  };

  return (
    <div className="create-project">
      <h1>프로젝트 만들기</h1>
      <Divider />
      <ProgressBar step={step} />
      {step === 1 && <Step1 data={projectData} updateProjectData={updateProjectData} nextStep={nextStep} />}
      {step === 2 && <Step2 data={projectData} updateProjectData={updateProjectData} nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <Step3 data={projectData} updateProjectData={updateProjectData} nextStep={nextStep} prevStep={prevStep} />}
      {step === 4 && <Step4 data={projectData} updateProjectData={updateProjectData} nextStep={nextStep} prevStep={prevStep} />}
      {step === 5 && <Step5 data={projectData} updateProjectData={updateProjectData} prevStep={prevStep} />}
      <StepNavigation 
        currentStep={step} 
        totalSteps={totalSteps} 
        prevStep={prevStep} 
        nextStep={nextStep} 
      />
    </div>
  );
};

export default CreateProjectPage;