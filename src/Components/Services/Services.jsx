
import React from 'react';
import './Services.css';
import star from '../../assets/theme pattern.svg';
import { Services_Data } from '../../assets/services_data.js';
import arrow_icon from '../../assets/arow.svg'

const Services = () => {
  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1>My Services</h1>
        <img src={star} alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="services-readmore">
                <p>Read More</p>

               <img src={arrow_icon} alt="Arrow Icon" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
