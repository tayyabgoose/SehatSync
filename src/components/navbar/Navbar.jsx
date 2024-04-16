import "./navbar.css";
import icon from "../../assets/logo.svg";
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <div className="nav">
        <div className="navbar">
          <div className="logo_cont">
            <img src={icon} />
            <Link to='/'>
            <span className="logo">
              Sehat<span className="lasthalf">Sync</span>
            </span>
            </Link>
          </div>

          <div className="mid-container">
          <Link to='/aboutus'>AboutUs</Link>
          <Link to='/blog'>Blog</Link>
          <Link to='home'>Home</Link>
          </div>
        </div>
      </div>
    </>
  );
}
