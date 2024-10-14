import { useState } from 'react';
import Input from '@shared/ui/InputText'
import requestSignup from  '@widgets/user/api/signup'
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate()  
  
  const [nickName, setNickName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setComfirmPassword] = useState('');
  
  const redirectHome=()=>{
    navigate("/");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 로그인 처리 로직 추가
    const {status, data} = await requestSignup({
      nickname:nickName, 
      name,
      email,
      password
    })
    console.log(status,data)

    redirectHome()
  };


  return (
    <form className="form" onSubmit = {handleSubmit}>
        <label className="label">닉네임</label>
        <Input
          type="text" 
          placeholder="무덤에서 돌아온 비밸리" 
          value={nickName} 
          onChange={(e) => setNickName(e.target.value)}
          className="input" 
          required
        />
        <label className="label">성함</label>
        <Input
          type="text" 
          placeholder="홍길동" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          className="input" 
          required
        />
        <label className="label">이메일</label>
        <Input
          type="email" 
          placeholder="abcd@gmail.com" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          className="input" 
          required
        />
        <label className="label">비밀번호</label>
        <Input
          type="password"
          placeholder="특수문자, 영문, 숫자를 섞은 12자 이내로 작성" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          className="input" 
          required
        />
        <label>특수문자, 영문, 숫자를 섞은 12자 이내로 작성</label>
        <Input
          type="password"
          placeholder="특수문자, 영문, 숫자를 섞은 12자 이내로 작성" 
          value={confirmPassword} 
          onChange={(e) => setComfirmPassword(e.target.value)}
          className="input" 
          required
        />
        <button type="submit" className="button">회원 가입</button>
      </form>
  )
}

export default SignupForm