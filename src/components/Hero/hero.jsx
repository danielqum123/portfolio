import React from 'react'
import './hero.css'
import profileImg from '../../assets/profile_img.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import myCv from '../../assets/my_cv.pdf'

const Hero = () => {
  return (
    <div id="home" className='hero'>
        <img src={profileImg} alt=''/>
        <h1><span>I'm Daniel Qumsieh,</span> a full-stack developer based in Bethlehem</h1>
        <p>I am a full-stack developer from Bethlehem, with 2 years of experience from multiple companies like PCNC IT Solutions and Zeva International.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume"><a href={myCv} target="_blank" rel="noopener noreferrer">My Resume</a></div>
        </div>
    </div>
  )
}

export default Hero