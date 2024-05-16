import React from 'react'
import './footer.css'
import footer_logo from '../../assets/final-logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div id='footer' className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className='footer-bottom-left'>Copyright © 2024 Daniel Qumsieh. All rights reserved</p>
            <div className="footer-bottom-right">
                <a href="https://github.com/danielqum123" target='_blank'><p>GitHub</p></a>
                <a href="https://www.linkedin.com/in/danial-qumsieh" target='_blank'><p>LinkedIn</p></a>
            </div>
        </div>
    </div>
  )
}

export default Footer