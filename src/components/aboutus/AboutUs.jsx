import './about.css';
import NavBar from '../navbar/Navbar.jsx';
import Profile from './profile.jsx';
import fb from "../../assets/fb_social.svg";
import X from "../../assets/x_social.png";

const AboutUs = () => {
  return (
    <div className='background'>
      {/* <NavBar></NavBar> */}
      <div className="container">
        <div className='profile'>
          <Profile name="Tauqeer Ahson"></Profile>
          <p className='Social'>
            <a href=''><img src={fb} alt="Facebook Logo"/></a>
            <a href=''><img src={X} alt="X Logo"/></a>
          </p>
        </div>
        <div className='profile'>
          <Profile name="Karam Abbas"></Profile>
          <p className='Social'>
            <a href=''><img src={fb} alt="Facebook Logo"/></a>
            <a href=''><img src={X} alt="X Logo"/></a>
          </p>
        </div>
        <div className='profile'>
          <Profile name="Muhammad Tayyab"></Profile>
          <p className='Social'>
            <a href=''><img src={fb} alt="Facebook Logo"/></a>
            <a href=''><img src={X} alt="X Logo"/></a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
