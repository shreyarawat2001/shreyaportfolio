
import React from 'react'
import './About.css'
import star from '../../assets/theme pattern.svg';
import shreya2 from '../../assets/shreya2.jpeg';




const About = () => {
  return ( 
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={star} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={shreya2} alt="Shreya" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I’m a Full Stack Web Developer with a strong passion for building seamless and efficient web applications. With hands-on experience in front-end technologies like HTML, CSS, JavaScript, and React, I focus on crafting clean, responsive, and user-friendly interfaces. I believe in creating intuitive designs that offer great user experiences across all devices.
            </p>
            <p>
              On the back end, I work with Node.js, Express, and MongoDB to develop scalable server-side applications and RESTful APIs. I enjoy solving real-world problems through code and continuously improving my skills by exploring new tools and frameworks. My goal is to deliver high-quality, full-stack solutions that are both functional and maintainable.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>REACT JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JAVASCRIPT</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>NEXT JS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>MERN STACK</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
          </div>
        <div className="about-achievements">
          <div className="about-achievement">
            <h1>1+</h1>
            <p>YEAR OF EXPERIENCE</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p> 
      </div>
      </div>
    </div>
  );
};

export default About;

