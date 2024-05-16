import React from "react";
import "./contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import github_icon from "../../assets/github-mark-white.svg"
import linkedin_icon from "../../assets/LinkedIn_icon.svg"
import AnchorLink from "react-anchor-link-smooth-scroll";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "adf85659-2985-46bc-bc1d-9af4a1023620");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert(data.message);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="contact">
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
          <div className="social-media">
            <a href="https://github.com/danielqum123" target="_blank">
              <img src={github_icon} alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/danial-qumsieh" target="_blank">
              <img src={linkedin_icon} alt="LinkedIn" />
            </a>

          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label>Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label>Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label>Write your message here</label>
          <textarea name="message" id="" rows="10" placeholder="Enter your message here"></textarea>
          <button type="submit" className="contact-submit">Contact now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
