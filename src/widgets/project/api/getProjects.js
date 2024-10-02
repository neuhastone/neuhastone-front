import axiosInstance from '@shared/api/axios';
import {getCookie} from  '@shared/cookie/cookie'

const getProject = async () => {
  const accessToken = getCookie("accessToken");
  const res = await axiosInstance.get('/project',{
    headers:{
      'Authorization' : `Bearer ${accessToken}`
    }
  })
  console.log(res.data)
  return {status:res.status, data:res.data}
}

export default getProject