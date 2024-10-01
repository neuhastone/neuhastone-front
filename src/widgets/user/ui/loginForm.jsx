
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Input from '@shared/ui/input'
import requestLogin from  '@widgets/user/api/login'
import {setCookie} from  '@shared/cookie/cookie'
const LoginForm = () => {
  const navigate = useNavigate()  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const redirectSignup=()=>{
    navigate("/signup");
  }

  const redirectHome=()=>{
    navigate("/");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { data} = await requestLogin({
      email, password
    })
    const {accessToken} = data
    setCookie("accessToken", accessToken, {path: '/' });
    redirectHome()
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