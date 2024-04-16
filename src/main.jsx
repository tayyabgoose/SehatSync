import ReactDOM from "react-dom/client";
import LogInForm from "./components/login/LogInForm.jsx";
import SignUpForm from "./components/signup/SignUpForm.jsx";
import NavBar from "./components/navbar/Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/home.jsx';
import Blog from './components/Blog/blog.jsx';
import Aboutus from './components/aboutus/AboutUs.jsx';

const App = () => {
  return (
      <Router>
        <NavBar />
      <div>
        <Routes>
          <Route path="/login" element={<LogInForm />} />
          <Route path="/" element={< SignUpForm/>} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
