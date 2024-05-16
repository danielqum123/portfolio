import React from 'react'
import './about.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.jpeg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt=''/>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Hello, I'm Daniel Qumsieh, a dedicated software engineer with a strong professional experience in the field. I graduated with honors and am currently work as a backend developer, specializing in .NET as back-end and ReactJS as front-end.</p>
                    <p>My passion for web development is reflected in the quality of work that I bring to each project I work on</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>ReactJS</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>.NET</p><hr style={{width:"80%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>1.5+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>5+</h1>
                <p>CERTIFICATIONS ACHIEVED</p>
            </div>
        </div>
    </div>
  )
}

export default About