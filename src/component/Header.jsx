import React,{useState} from 'react';
import {BsLinkedin,BsGithub} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import './Navbar.css'
function Header() {
    
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  }
    return (
        <header>

            <div className='logo'>
                <h2>
                    <span>N</span>itu
                    <span>T</span>echnical
                </h2>
            </div>

            
      <button className="hamburger" onClick={toggleNav}>&#9776;</button>
      <nav className={showNav ? 'show' : ''}>
                <ul>
                <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/admin">Admin</Link></li>
                </ul>


                {/*social media links   */}
                <div className='social-media'>
                    <ul className='social-media-desktop'>
                        <li><a href="linkedin.com/in/nitu-kumari-a64391242/" target="_self"><BsLinkedin /></a></li>
                        <li><a href="https://github.com/nitukumari9508" target="_top"><BsGithub /></a></li>
                    </ul>
                </div>
            </nav>

        </header>
        
    );
}

export default Header;
