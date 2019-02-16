import React from 'react';
import "./Contact.css"
import opentable from "../images/opentable.png"

const Contact = () => {
    return ( 
        <div className="contact-container">
            <h1 className="contact-heading">CONTACT</h1>
            <div className="contact-parent">
                <p> For inquiries, contact us at</p>
                <p>Email: <a href="mailto:info@peperossosocial.com" className="contact-links">info@peperossosocial.com</a> </p>
                <p>Tel: <a href="tel:2122190019" className="contact-links">212-219-0019</a></p>
            </div>
            <div className="contact-openTable">
                <p>Reserve A Table:</p>
                <a href="https://www.opentable.com/pepe-rosso-social-reservations-new-york?rtype=ism&restref=215212" className="contact-links"><img className="opentable-button" src={opentable} alt="opentable-logo"></img></a>
            </div>
        </div>
     );
}
 
export default Contact;