import React from 'react';
import '../../css/home-style.css';
import DraftsIcon from '@material-ui/icons/Drafts';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
function Footer(){


    return(


<div className="about-container">
 <div className="footer">
      <div className="inner-footer">

          <div className="footer-items">
              <h1>HARDhack</h1>
              <p>A all in one WFH application to look after your all requirements</p>
              <div data-aos="flip-right" className="social">
                  <a href="#"><FacebookIcon/>   </a>


                  <a href="#">   <TwitterIcon/></a>
                  <a href="#"><InstagramIcon /></a>
              </div>
          </div>

          <div className="footer-items">
              <h2>Services</h2>
              <div className="border1"></div>
                  <ul>
                      <a href="/todo">ToDo's</a>
                      <a href="chat">Chat</a>
                      <a href="/erercise">Personal Health</a>
                      <a href="/set-timer">Timer</a>
                      <a href="/calendar">Calendar</a>
                  </ul>
            </div>

             <div className="footer-items">
              <h2>About</h2>
              <div className="border1"></div>
                  <ul>
                      <a href="#">Our Vision</a>
                      <a href="#">Aims &amp; Goals</a>
                      <a href="#"> About Us</a>
                      <a href="#">Our Team</a>
                  </ul>
            </div>

             <div className="footer-items">
              <h2>CONTACT</h2>
              <hr/>
              <div className="border1"></div>
                  <ul>
                    <li><RoomIcon/>   60-90 Road 11378 New York</li>
                    <hr/>
                    
                    <li><PhoneIcon/>  +65 11 88 888</li>
                    <hr/>
                    <li><a href=""><EmailIcon/>  mirror@gmail.com</a></li>
                    
                  </ul>
            </div>

      </div>
      <hr className="hr" />
      <div className="footer-bottom">
          Copyright ©2020 All rights reserved | HARDhack
      </div>
  </div>
 
</div>


    );
}
export default Footer;