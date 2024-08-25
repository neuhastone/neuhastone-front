import '@pages/signup.css';
import SignupForm from '@widgets/user/ui/signupForm'
const SignupPage = () => {  

  return (
    <div className="container">
      <div className="back-arrow">←</div>
      <h1 className="logo">Neuhastone</h1>
      <h2 className="title">회원 가입</h2>
      <SignupForm></SignupForm>
    </div>
  );
};

export default SignupPage;