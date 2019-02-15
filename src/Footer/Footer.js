import React from "react";
import "./Footer.css"
import logo from "../images/logo.png"
import { Link } from "react-router-dom";
const Footer = props => {
  return (
    <footer className="footer-div">
      <h3 className="footer-copyright-h3">
        Copyright © 2019 Pepe Rosso Social
      </h3>
      <Link to="/" ><img className="footer-logo-img" src={logo} alt="logo" /></Link>
      
      <div className="footer-social-media-div">
        <a href="https://www.facebook.com/PepeRossoSocial/">
            <i className="fab fa-facebook-square fa-2x" />
        </a>
        <a href="https://twitter.com/peperossosocial">
            <i className="fab fa-twitter fa-2x" />
        </a>
        <a href="https://www.instagram.com/explore/locations/157793329/">
            <i class="fab fa-instagram fa-2x" />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
