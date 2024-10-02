import './login.css'
import LoginForm from '@widgets/user/ui/loginForm'

const LoginPage = () => {

  return (
    <div className="container">
      <h1 className="logo">Neuhastone</h1>
      <LoginForm></LoginForm>
      <div className="links">
        <a href="#">회원가입</a>
        <a href="#">개인정보처리방침</a>
      </div>
      <footer>ⓒ 2024neuhas+개발자님</footer>
    </div>
  );
};

export default LoginPage;