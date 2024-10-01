import axiosInstance from '@shared/api/axios';


const requestSignup = async (body) => {
  const res = await axiosInstance.post('/users', body); // API 엔드포인트 호출
  return {status : res.status, data:res.data}
}


export default requestSignup
        