import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assests'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img  src={assets.logoz} alt="" />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure delectus modi possimus quam tempora labore quae doloremque, nulla laudantium expedita voluptates qui repellendus dicta, enim excepturi accusantium voluptatum temporibus ratione.</p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon}  />
          </div>

        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>

        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>987654321</li>
            <li>zomato@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 Zomato
      </p>
    </div>
    
  )
}

export default Footer