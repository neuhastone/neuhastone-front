import '@pages/signup.css';
import SignupForm from '@widgets/user/ui/signupForm'
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {  
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
    <div className="container">
      <div onClick={handleClick} className="back-arrow">←</div>
      <h1 className="logo">Neuhastone</h1>
      <h2 className="title">회원 가입</h2>
      <SignupForm></SignupForm>
    </div>
  );
};

export default SignupPage;