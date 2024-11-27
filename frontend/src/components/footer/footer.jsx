import React from 'react'
import './footer.css'
import {assets} from '../../assets/frontend_assets/assets'

const footer = () => {
  return (
    <div className="footer" id="footer">
       <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt=""/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div classname="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
               <h2>COMPANY</h2>
               <ul>
                     <li>Home</li>
                     <li>About us</li>
                     <li>Delivery</li>
                     <li>Privacy policy</li>
               </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+254-722-870-770</li>
                <li>contact@eskapade.com</li>
            </ul>
        </div>
       </div>
       <hr />
       <p className="footer-copyright">Copyright 2024 &copy; Eskapade.com - All Rights Reserved.</p>

    </div>
  )
}

export default footer