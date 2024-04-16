import './about.css';
import NavBar from '../navbar/Navbar.jsx';
import Profile from './profile.jsx';
const AboutUs = () => {
  return (
    <div className='background'>
      {/* <NavBar></NavBar> */}
        <div className="container">
          <div className='profile'>
          <Profile name="Tauqeer Ahson" ></Profile>
          <p className='Social'><a href=''><img src="../public/images/facebook_social.png"></img></a>
            <a href=''><img src="../public/images/x_social.png"></img></a><a href=''> 
            <img src="../public/images/g_social.png"></img>
            </a></p>
          </div>
          <div className='profile'>
          <Profile name="Karam Abbas">
          </Profile>
          <p className='Social'><a href=''><img src="../public/images/facebook_social.png"></img></a>
            <a href=''><img src="../public/images/x_social.png"></img></a></p>
          </div>
          <div className='profile'>
          <Profile name="Muhammad Tayyab">
          </Profile>
          <p className='Social'><a href=''><img src="../public/images/facebook_social.png"></img></a>
            <a href=''><img src="../public/images/x_social.png"></img></a></p>
            </div>
            </div>
    </div>
  )
};

export default AboutUs;