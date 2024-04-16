import "./navbar.css";
import icon from "../../assets/logo.svg";

export default function NavBar() {
  return (
    <>
      <div className="nav">
        <div className="navbar">
          <div className="logo_cont">
            <img src={icon} />
            <span className="logo">
              Sehat<span className="lasthalf">Sync</span>
            </span>
          </div>

          <div className="mid-container">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Blog</a>
          </div>
        </div>
      </div>
    </>
  );
}
