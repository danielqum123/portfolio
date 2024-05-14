import React from 'react'
import './hero.css'
import profileImg from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profileImg} alt=''/>
        <h1><span>I'm Daniel Qumsieh,</span> a full-stack developer based in Bethlehem</h1>
        <p>I am a full-stack developer from Bethlehem, with 2 years of experience from multiple companies like PCNC IT Solutions and Zeva International.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero