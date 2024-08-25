
import { useNavigate } from "react-router-dom";
// import axiosInstance from '@shared/api/axios';
import { useState } from 'react';
import Input from '@shared/ui/input'

const LoginForm = () => {
  const navigate = useNavigate()  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const redirectSignup=()=>{
      navigate("/signup");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // 로그인 처리 로직 추가
        console.log('이메일:', email);
        console.log('비밀번호:', password);

          // try {
        // const response = await axiosInstance.post('/endpoint'); // API 엔드포인트 호출
        // print(response.data);
          // } catch (err) {
            // setError(err);
          // } finally {
            // setLoading(false);
          // }    
    };
  return(
    <form className="login-form" onSubmit={handleSubmit}>
        <Input
            type="email"
            placeholder="이메일" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
        />
        <Input
            type="password" 
            placeholder="비밀번호" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
        />
        <button type="submit">로그인</button>
        <button onClick={() => redirectSignup()} className="btn">회원가입</button>
    </form>
  )
}

export default LoginForm