import React from 'react';
import '../../css/home-style.css';
function Footer(){


    return(


<div className="about-container">
 <div className="footer">
      <div className="inner-footer">

          <div className="footer-items">
              <h1>HARDhack</h1>
              <p>We are a team of designers and devlopers that create high quality webpages for Mirror</p>
              <div data-aos="flip-right" className="social">
                  <a href="#"><i className="fa fa-facebook"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                  <a href="#"><i className="fa fa-instagram"></i></a>
              </div>
          </div>

          <div className="footer-items">
              <h2>MENU</h2>
              <div className="border1"></div>
                  <ul>
                      <a href="#">Shop</a>
                      <a href="#">About</a>
                      <a href="#">Blogs</a>
                      <a href="#">Features</a>
                  </ul>
            </div>

             <div className="footer-items">
              <h2>HELP</h2>
              <div className="border1"></div>
                  <ul>
                      <a href="#">Shipping Information</a>
                      <a href="#">Returns &amp; Exchange</a>
                      <a href="#">Terms &amp; Conditions</a>
                      <a href="#">Privacy Policy</a>
                  </ul>
            </div>

             <div className="footer-items">
              <h2>CONTACT</h2>
              <div className="border1"></div>
                  <ul>
                    <li><i className="fa fa-map-marker"></i>60-90 Road 11378 New York</li>
                    
                    <li><i className="fa fa-phone"></i><a href="">+65 11 88 888</a></li>
                    
                    <li><i className="fa fa-envelope"></i><a href="">mirror@gmail.com</a></li>
                  </ul>
            </div>

      </div>
      <hr className="hr" />
      <div className="footer-bottom">
          Copyright ©2020 All rights reserved | This website is made with Mirror
      </div>
  </div>
 
</div>


    );
}
export default Footer;