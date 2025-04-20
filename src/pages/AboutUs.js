import React from "react";
import "../App.css";
import "../pages/css/aboutus.css"
import imageabouti from "../assets/Frame8.png";
import imageaboutii from "../assets/Frame9.png";
import webdev from"../assets/webdev.png";
import androiddev from"../assets/androiddev.png";
import seo from"../assets/bullhorn.png";
import Hand from"../assets/hand.png";
import chooseImage from "../assets/Frame15.png"; 
import industryImage from"../assets/Frame16.png";
import linkedin from"../assets/linkedin.png";
import twitter from"../assets/twitter.png";
import logo from"../assets/creonoxb.png";
import emailicon from "../assets/Emailicon.png";
import abhijeet from"../assets/abhijeet.jpg";
import chetana from"../assets/person.png";
import manasi from"../assets/person.png";






const AboutUs = () => {
    return (
        <div className="about-page">
            <section className="about-hero">
                <div className="hero-text">
                    <h1>Transforming visions into Reality with <br />
                        <b>CREONOX</b>
                    </h1>
                    <p>We help businesses turn ideas into reality with tailored digital solutions, empowering startups and enterprises to thrive in the digital age.</p>
                    <button className="btn-hero">Start for free</button>
                </div>
                <div className="hero-image">
                    <img src={imageabouti} alt="image" /> </div>

            </section>
            <section className="abnout-ss">
                <div className="abnout-one">
                    <img src={imageaboutii} alt="imagei" />
                </div>
                <div className="abnout-two">
                    <h1>Who We Are ? </h1>
                    <p>At <b>Creonox</b> is a passionate team of developers, designers, and digital strategists dedicated to crafting innovative, user-centric solutions. We blend creativity with technology to empower businesses and startups with impactful digital experiences.</p>

                </div>
            </section>
            <section className="abnout-ssi">

                <div className="abnout-twoi">
                    <h1>What We Offer</h1>
                    <p>At <b>Creonox</b>, we offer cutting-edge solutions including custom software development, mobile apps, responsive websites, e-commerce platforms, AI-powered tools, and strategic SEO services — all designed to help businesses grow, innovate, and thrive in the digital age.</p>
                </div>
                <div className="abnout-onei">
                    <img src={imageaboutii} alt="imagei" />
                </div>
            </section>

<section className="our-services">
  <h2>Our Services</h2>
  <div className="underline"></div>

  <div className="service-grid">
    <div className="service-card">
      <div className="icon-title">
        <img src={webdev} alt="Website" />
        <h3>Website Development</h3>
      </div>
      <p>
        At Creonox, we build more than websites—we create digital experiences. Our team crafts
        visually stunning, user-friendly websites tailored to your brand and designed to captivate
        your audience.
      </p>
    </div>

    <div className="service-card">
      <div className="icon-title">
        <img src={androiddev} alt="Application" />
        <h3>Application Development</h3>
      </div>
      <p>
        At Creonox, we turn ideas into powerful applications. Whether it’s mobile, web, or
        cross-platform, we deliver scalable, intuitive apps that enhance operations and delight
        users.
      </p>
    </div>

    <div className="service-card">
      <div className="icon-title">
        <img src={seo} alt="SEO" />
        <h3>Digital Marketing & SEO</h3>
      </div>
      <p>
        At Creonox, we amplify your digital presence. With tailored SEO and marketing strategies,
        we help you attract the right audience, boost visibility, and achieve sustainable growth.
      </p>
    </div>

    <div className="service-card">
      <div className="icon-title">
        <img src={Hand} alt="Custom Software" />
        <h3>Custom Software Solutions</h3>
      </div>
      <p>
        At Creonox, we bring your unique vision to life. From AI-powered tools to bespoke platforms,
        we design software that drives efficiency and delivers exceptional results.
      </p>
    </div>
  </div>
</section>

<section className="why-industries">
      <div className="why-choose">
        <div className="choose-img">
          <img src={chooseImage} alt="Why Choose Us" />
        </div>
        <div className="choose-text">
          <h2>Why Choose <span className="highlight">Creonox?</span></h2>
          <ul>
            <li><strong>Client-First Approach:</strong> We prioritize your goals, ensuring every solution is aligned with your vision.</li>
            <li><strong>Expertise That Counts:</strong> Our team combines technical excellence with industry knowledge to deliver outstanding results.</li>
            <li><strong>Innovative Solutions:</strong> We leverage the latest technologies to stay ahead in a fast-changing digital world.</li>
            <li><strong>Commitment to Success:</strong> Your success is our mission, and we measure ours by the impact we create for your business.</li>
          </ul>
        </div>
      </div>

      <div className="industries-serve">
        <div className="industry-text">
          <h2>Industries We Serve</h2>
          <div className="underline" />
          <ul>
            <li>Technology Startups</li>
            <li>Healthcare & Wellness</li>
            <li>E-commerce & Retail</li>
            <li>Education & Training</li>
            <li>Real Estate</li>
            <li>Hospitality & Travel</li>
          </ul>
        </div>
        <div className="industry-img">
          <img src={industryImage} alt="Industries" />
        </div>
      </div>
    </section>

    <section className="team-footer">
      <div className="team-section">
        <h2 className="section-title">Meet Our Team</h2>
        <p className="team-desc">
          At Creonox, our greatest strength lies in our people. Our team is a collective of passionate
          professionals—developers, designers, strategists, and innovators—dedicated to delivering exceptional
          results. With a culture of collaboration and a commitment to excellence, we turn challenges into
          opportunities and ideas into success stories.
        </p>

        <div className="team-grid">
  {/* Chetana */}
  <div className="team-card">
    <img src={chetana} alt="Chetana Mahajan" className="team-img" />
    <div className="team-info">
      <h3>Chetana Mahajan</h3>
      <p className="team-role">Co-Founder</p>
      <div className="social-icons">
        <img src={linkedin} alt="LinkedIn" />
      </div>
    </div>
  </div>

  {/* Abhijeet */}
  <div className="team-card">
    <img src={abhijeet} alt="Abhijeet Kulkarni" className="team-img" />
    <div className="team-info">
      <h3>Abhijeet Kulkarni</h3>
      <p className="team-role">Co-Founder</p>
      <div className="social-icons">
        <img src={linkedin} alt="LinkedIn" onClick={() => window.open("https://www.linkedin.com/in/abhijeet-kulkarni-2a0892321/", "_blank")}
          style={{ cursor: "pointer" }} />
        <img src={twitter} alt="Twitter" />
      </div>
    </div>
  </div>

  {/* Manasi */}
  <div className="team-card">
    <img src={manasi} alt="Manasi Sonaje" className="team-img" />
    <div className="team-info">
      <h3>Manasi Sonaje</h3>
      <p className="team-role">Co-Founder</p>
      <div className="social-icons">
        <img src={twitter} alt="Twitter" />
      </div>
    </div>
  </div>
</div>

      </div>
    </section>
    <div className="scrollend">
        <div className="bdive">
          <h2>Subscribe to our newsletter to stay in touch with the latest.</h2>
          <div className="emaildiv">
            <input type="email" placeholder="Enter your email id" className="inputemail" />
            <img alt="emailicon" src={emailicon} />
          </div>
          <div className="terms-container">
            <input type="checkbox" className="terms-checkbox" />
            <label>I agree to the privacy policy and give my permission to process my email id for marketing perpose.</label>
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
          <li className="recon">contact.creonox@gmail.com</li>
          <li className="consmall" style={{ marginTop: "5%" }}>Call us</li>
          <li className="recon">+91 7498722304</li>
        </ul>
        <img alt="logo" src={logo} className="logoscroll" />
      </div>
      <div className="copytag">
       
        <p>© CREONOX. All rights reserved - 2025</p>
      </div>
        </div>
    );
};

export default AboutUs;
