import ProjectForm from '@widgets/project/ui/projectForm';
import {getCookie} from  '@shared/cookie/cookie'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ProjectPage = () => {
  const accessToken = getCookie("accessToken");

  const navigate = useNavigate();

  useEffect(()=>{
    console.log(accessToken)
    if (accessToken===undefined){
      navigate("/")
    }
  },[])

  return (
    <ProjectForm />  
  );
};

export default ProjectPage;