import React from "react";
import "./contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's chat</h1>
          <p>
            I am available for any inquiries about new projects, feel free to
            contact me!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>daniel_qum@hotmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+970595068265</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Bethlehem</p>
            </div>
          </div>
        </div>
        <form action="" className="contact-right">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Enter your name" name="name"/>
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Enter your email" name="email"/>
            <label htmlFor="">Write your message here</label>
            <textarea name="message" id="" rows="10" placeholder="Enter your message here"></textarea>
            <button type="submit" className="contact-submit">Contact now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
