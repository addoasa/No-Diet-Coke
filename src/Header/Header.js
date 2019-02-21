import React from 'react'
import './Header.css'
import {Navbar, Nav, NavDropdown, Form, FormControl, Dropdown,SplitButton,ButtonToolbar,DropdownButton } from 'react-bootstrap'


class Header extends React.Component {
    render(){
        return(
            <div className="Header-container" id="home">
            <img className="Header-logo" src="http://www.peperossosocial.com/wp-content/themes/pepe/images/logo.png" alt="PepeRossoSoCial"/>
              <header className="Header-nav">
              <Navbar className="cool-nav " expand="lg" sticky='top'>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />      
              <Navbar.Collapse id="basic-navbar-nav main-nav">
              <Nav className="ml-auto "> 
                <ul className="Head-nav">
                      <li className="Header-nav-item"><a className="Header-nav-link" href="/">Home</a></li>
                      <li className="Header-nav-item"><a className="Header-nav-link" href="#menus">Menus</a></li>
                      <li className="Header-nav-item"><a className="Header-nav-link" href="#events">Events</a></li>
                      <li className="Header-nav-item"><a className="Header-nav-link" href="#hours_locations">Hours & Location</a></li>
                      <li className="Header-nav-item" id="nav-contact"><a className="Header-nav-link" href="#contact">Contact</a></li>
                </ul>
              </Nav> 
              </Navbar.Collapse>
              </Navbar>
              </header>
            </div>
        )
    }
}
export default Header