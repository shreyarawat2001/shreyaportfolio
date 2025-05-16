import React from 'react'
import './Hero.css'
import shreya_photo from '../../../assets/shreya-photo.jpeg';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Hero = () => {
  return (
    <div id='home' className='hero'>
        <div className="circle-photo">
            <img src={shreya_photo} alt="" />
            </div>
      
      <h1><span>I'm Shreya,</span> Full Stack web Developer</h1>
      <p>I’m a Full Stack Web Developer passionate about building responsive, user-friendly web applications with modern technologies.</p>
     <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
     </div>
    </div>
  )
}

export default Hero
