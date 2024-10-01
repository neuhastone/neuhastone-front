import { useEffect, useState } from 'react';


import CardList from '@components/project/ui/cardList'
import getProjects from '@widgets/project/api/getProjects';

import '@widgets/project/ui/project.css'

const ProjectForm = () => {
  const [project, setProject] = useState()
  const [isLoading, setIsLoading] = useState(true);

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
    
    <div className="app">
      <h1>프로젝트 둘러보기</h1>
      {isLoading ? <>로딩중</> :<CardList cards = {project.projects}/>}
      <button className="create-button">프로젝트 만들기</button>
    </div>
  )
}

export default ProjectForm