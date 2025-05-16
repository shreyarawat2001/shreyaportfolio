import React from 'react'
import './MyWork.css'
import star from '../../assets/theme pattern.svg';
import {mywork_data} from '../../assets/mywork_data.js';
import arrow_icon from '../../assets/arow.svg'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={star} alt="" />
      </div>
      <div className="mywork-container">
{mywork_data.map((work,index)=>{
    return <img key= {index} src={work.w_img} alt=""/>
})}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  )
}

export default MyWork
