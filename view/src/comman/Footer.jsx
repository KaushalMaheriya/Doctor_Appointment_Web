import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="premium-footer">
      <div className="container">
        <div className="row gy-4">

          <div className="col-lg-4 col-md-6">
            <h5 className="footer-logo">Hospital</h5>
            <p className="footer-text">
              For helthy life,any problems , helth career ,any advice book appointment and come to hospital
            </p>
          </div>

          <div className="col-lg-2 col-md-6">
            <h6 className="footer-title">Hospital</h6>
            <ul className="footer-links">
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h6 className="footer-title">Resources</h6>
            <ul className="footer-links">
              <li><a href="#">Doctors</a></li>
              <li><a href="#">servicies</a></li>
              
            </ul>
          </div>

          <div className="col-lg-2 col-md-6">
            <h6 className="footer-title">Contact us</h6>
            <ul className="footer-links">
              <li><a href="#">hello@gmail.com</a></li>
              <li><a href="#">+1 234 567 890</a></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <span>© 2026 LuxBrand. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
