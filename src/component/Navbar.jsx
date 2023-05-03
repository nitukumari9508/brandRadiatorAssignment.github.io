import React from 'react'
import '../component/Navbar.css'
import {BsLinkedin,BsGithub} from 'react-icons/bs'
const Navbar = () => {
  return (
    <>
      <nav className='main-nav'>
{/*     ist logo part   */}
        <div className='logo'>
<h2>
<span>N</span>itu
<span>T</span>echnical
</h2>
        </div>

<div className='menu-link'>
    <ul>
        <li><a href ="#">Home</a></li>
        <li><a href ="#">about</a></li>
        <li><a href ="#">contact Us</a></li>
        <li><a href ="#">Admin</a></li>
    </ul>
</div>
{/*social media links   */}
<div className='social-media'>
    <ul className='social-media-desktop'>
        <li><a href ="linkedin.com/in/nitu-kumari-a64391242/" target ="_self"><BsLinkedin/></a></li>
        <li><a href ="https://github.com/nitukumari9508" target ="_top"><BsGithub/></a></li>
    </ul>
</div>
      </nav>
      <section className='hero-section'>
        <p>hello,</p>
        <p>welcome to Nitu technical </p>
<h2>website</h2>
      </section>

    </>
  )
}

export default Navbar
