import React from 'react'
import './hero.css'
import profileImg from '../../assets/profile_img.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id="home" className='hero'>
        <img src={profileImg} alt=''/>
        <h1><span>I'm Daniel Qumsieh,</span> a full-stack developer based in Bethlehem</h1>
        <p>I am a full-stack developer from Bethlehem, with 2 years of experience from multiple companies like PCNC IT Solutions and Zeva International.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume"><a href="https://server192.web-hosting.com:2083/cpsess5535542449/frontend/jupiter/filemanager/showfile.html?file=my+cv.pdf&fileop=&dir=%2Fhome%2Fdaniohuy&dirop=&charset=&file_charset=&baseurl=&basedir=">My Resume</a></div>
        </div>
    </div>
  )
}

export default Hero