import ProjectForm from '@widgets/project/ui/projectForm';
import { useEffect } from 'react';

const ProjectPage = () => {
  useEffect(()=>{console.log("test")},[])
  return (
    <ProjectForm />  
  );
};

export default ProjectPage;