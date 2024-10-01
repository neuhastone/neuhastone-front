import axiosInstance from '@shared/api/axios';


const requestLogin = async (body) => {
  const res = await axiosInstance.post('/token',body); // API 엔드포인트 호출

  return {status: res.status, data:res.data}
}


export default requestLogin
        