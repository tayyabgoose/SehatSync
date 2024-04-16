import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import LogInForm from "./components/login/LogInForm.jsx";
import SignUpForm from "./components/signup/SignUpForm.jsx";
import NavBar from "./components/navbar/Navbar.jsx";
import AboutUs from "./components/aboutus/AboutUs.jsx";

const App = () => {
  const [showSignUp, setShowSignUp] = useState(true);

  const handleSwitchForm = () => {
    setShowSignUp((prevShowSignUp) => !prevShowSignUp);
  };

  return (
    <React.StrictMode>
      <NavBar />
      {/* <AboutUs/> */}
      {showSignUp ? (
        <SignUpForm onSwitchForm={handleSwitchForm} />
      ) : (
        <LogInForm onSwitchForm={handleSwitchForm} />
      )}
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
