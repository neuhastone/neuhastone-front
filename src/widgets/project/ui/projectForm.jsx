import { useEffect, useState } from 'react';

import CardList from '@components/project/ui/cardList'
import getProjects from '@widgets/project/api/getProjects';

import '@widgets/project/ui/project.css'
import { useNavigate } from 'react-router-dom';

const ProjectForm = () => {
  const [project, setProject] = useState()
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/create-project');
  };

  useEffect(()=>{
    const fetchData = async () => {
      const { data} = await getProjects()
      setIsLoading(false)
      console.log(data)
      setProject(data)
    };
    
    fetchData()
    
  },[])

  return(
    <div className="project-form">
      <h1>프로젝트 둘러보기</h1>
      {isLoading ? <>로딩중</> :<CardList cards = {project.projects}/>}
      <button className="create-button" onClick={()=> handleClick()}>프로젝트 생성</button>
    </div>
  )
}

export default ProjectForm