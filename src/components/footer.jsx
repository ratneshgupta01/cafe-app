import React from 'react'
import {Fade} from 'react-reveal'

function Footer(){
    return (
        <>
        <script src="temp.js"></script>
        <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Art<span>Of</span>Beans</h1>
        <p className="footer__description">
          The best place to work <br />
          and be more productive.
        </p>

        <div className="footer__content grid">
          <div className="footer__data">
            <h2 className="footer__subtitle">Address</h2>
            <p className="footer__information">
              Opp. Rangoli Gardens <br />
              Vaishali Nagar, jaipur
            </p>
          </div>
          <div className="footer__data">
            <h2 className="footer__subtitle">Contact</h2>
            <p className="footer__information">
              +91 7597575966 <br />
              guptaratnesh75975@gmail.com
            </p>
          </div>
          <div className="footer__data">
            <h2 className="footer__subtitle">Timings</h2>
            <p className="footer__information">
              Monday - Sunday <br />
              9AM - 10PM
            </p>
          </div>
          <div className="footer__data">
           
          </div>
        </div>

        <div className="footer__group">
          <ul className="footer__social">
            <a href="facebook.com" target="_blank" className="footer__social-link">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="instagram.com" target="_blank" className="footer__social-link">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="twitter.com" target="_blank" className="footer__social-link">
              <i className="bx bxl-twitter"></i>
            </a>
          </ul>

          <span className="footer__copy"> &#169; Ratnesh Gupta,  All rigths reserved </span>
        </div>
      </div>
    </footer>
    </>
  
    );
}

export default Footer;