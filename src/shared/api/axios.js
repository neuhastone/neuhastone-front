// src/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000', // API의 기본 URL을 설정합니다.
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터 추가 (필요 시)
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // 요청 전에 수행할 작업 (예: 토큰 추가)
//     const token = localStorage.getItem('token'); // 예시로 로컬 스토리지에서 토큰을 가져옵니다.
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // 응답 인터셉터 추가 (필요 시)
// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     // 에러 처리 (예: 로그아웃 처리 등)
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;