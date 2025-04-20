import { useEffect, useState } from "react";
import object from "../assets/shape.png";
import spnasimg from "../assets/Group-25.png";
import fimg from "../assets/Group-27.png";
import emailicon from "../assets/Emailicon.png";
import logo from "../assets/creonoxb.png";
import "../App.css";

function Home() {
  const words = ["Mobile App", "Website", "Web App", "Software", "E-Commerce", "AI-Powered"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>We Build</h1>
          <h1 className="highlight">
            <span className="changing-text">{words[index]}</span>
          </h1>
          <p>
            At Creonox, we build high-performance, user-friendly apps for iOS and Android.
            With modern UI/UX and powerful backend integration, we turn your ideas into seamless digital solutions.
          </p>
          <button className="btn-build">Build</button>
        </div>
        <div className="hero-image">
          <img alt="object" src={object} />
        </div>
      </section>

      {/* About / Card Section */}
      <div className="card-sec">
        <div className="spanss">
          <img alt="img" src={spnasimg} className="spansimage" />
          <span className="spanii">
            <h1>CREONOX</h1>
            <p>We bring your ideas to life with cutting-edge technology and innovative solutions...</p>
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="mainfcon">
          <img alt="fimg" src={fimg} />
          <div className="mainfcstt">
            <h1 className="outtl">Start Your</h1>
            <h3>Digital Journey <br /> Today</h3>
            <p>Partner with <b>CREONOX</b> to turn your vision into reality...</p>
            <h4 className="iiis">Let’s build the future together.</h4>
          </div>
        </div>
      </div>

      <div className="scrollend">
        <div className="bdive">
          <h2>Subscribe to our newsletter to stay in touch with the latest.</h2>
          <div className="emaildiv">
            <input type="email" placeholder="Enter your email id" className="inputemail" />
            <img alt="emailicon" src={emailicon} />
          </div>
          <div className="terms-container">
            <input type="checkbox" className="terms-checkbox" />
            <label>I agree to the privacy policy and give my permission...</label>
          </div>
          <button className="subscribe-btn">Submit</button>
        </div>
        <div className="list-container">
          <h3 className="list-header">SERVICES</h3>
          <ul className="service-list">
            <li>Web Development</li>
            <li>SEO Optimization</li>
            <li>App Development</li>
            <li>UI/UX Design</li>
            <li>Mobile App</li>
            <li>Web App</li>
            <li>Billing System</li>
          </ul>
        </div>
        <ul className="contact">
          <li className="consmall">Drop us a line</li>
          <li className="recon">devwithabhijeet@gmail.com</li>
          <li className="consmall" style={{ marginTop: "5%" }}>Call us</li>
          <li className="recon">+91 7498722304</li>
        </ul>
        <img alt="logo" src={logo} className="logoscroll" />
      </div>
      <div className="copytag">
        <br />
        <p>© CREONOX. All rights reserved - 2025</p>
      </div>
    </>
  );
}

export default Home;
