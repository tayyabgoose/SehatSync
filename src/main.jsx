import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import LogInForm from "./components/login/LogInForm/LogInForm.jsx";
import SignUpForm from "./components/signup/SignUpForm/SignUpForm.jsx";
import NavBar from "./components/signup/Navbar.jsx";

const App = () => {
  const [showSignUp, setShowSignUp] = useState(true);

  const handleSwitchForm = () => {
    setShowSignUp((prevShowSignUp) => !prevShowSignUp);
  };

  return (
    <React.StrictMode>
      <NavBar />
      {showSignUp ? (
        <SignUpForm onSwitchForm={handleSwitchForm} />
      ) : (
        <LogInForm onSwitchForm={handleSwitchForm} />
      )}
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
