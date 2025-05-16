import React from 'react'
 import './Contact.css'
import star from '../../assets/theme pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import phone_icon from '../../assets/phone_icon.svg';
import location_icon from '../../assets/location_icon.svg';


const Contact = () => {
   const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "269b23c3-8a04-43d0-b673-230388eca3f6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
    }
  };
  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={star} alt="" />
      </div>
      <div className="contact-section">
      <div className="contact-left">
        <h1>Let's talk</h1>
       <p>
  I'm currently looking for full-time opportunities as a Full Stack Web Developer.
  If you're hiring or know of any openings, I'd love to connect!
  Feel free to reach out for job opportunities, freelance work, or collaborations.
</p>

<div className="contact-details">
    <div className="contact-detail">
<img src={mail_icon} alt="" />
<p>rawatshreya9140@gmail.com</p>
    </div>
    <div className="contact-detail">
        <img src={phone_icon} alt="" />
        <p>9140774271</p>
    </div>
    <div className="contact-detail">
        <img src={location_icon} alt="" />
        <p>Greater Noida</p>
    </div>
</div>
      </div>
      <form onSubmit={onSubmit} className="contact-right">
        <label htmlFor="">Your Name</label>
        <input type="text" placeholder='Enter your name' name='name'/>
        <label htmlFor="">Your Email</label>
        <input type="email" placeholder='Enter your email' name='email' />
        <label htmlFor="">Write your message here</label>
        <textarea name="message" rows= "8" placeholder='Enter your message'></textarea>
        <button type='submit' className='contact-submit'>Submit Now</button>
      </form>
      </div>
    </div>
  )
}

export default Contact
