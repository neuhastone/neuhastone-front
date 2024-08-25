import axiosInstance from '@shared/api/axios';


const requestLogin = async () => {
  return await axiosInstance.post('/login'); // API 엔드포인트 호출
}


export default requestLogin
        