import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import '@app/App.css'
import LoginPage from '@pages/login'
import SignupPage from '@pages/signup'
import ProjectPage from '@pages/project';
import CreateProjectPage from '@pages/createProject';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/project" element={<ProjectPage />}></Route>
        <Route path="/create-project" element={<CreateProjectPage />}></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
