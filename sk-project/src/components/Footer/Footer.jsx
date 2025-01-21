import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
          <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt earum quidem porro? Dicta fugiat unde doloremque deleniti doloribus, animi repellendus dolorem corporis sed architecto, id cum nemo ducimus cupiditate tempora.</p>
            <div className="footer-social-icons">
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
            </div>
          </div>
          <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
            {/* <Link to='/navbar'>home</Link> */}

              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
              <li><a href="https://wa.me/+919173228399">+919725704642</a></li>
              <li><a href="mailto:sanjaychilgani@gmail.com">laxmiknatdudam735@gmail.com</a></li>
            </ul>
          </div>
        </div>
        {/* <hr /> */}
        {/* <p className='footer-copyright'>Copyright 2024 @ skcart.com - All Right Reserved.</p> */}
    </div>
  )
}

export default Footer