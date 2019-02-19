import React from 'react'
import './Header.css'

class Header extends React.Component {
    render(){
        return(
            <div className="Header-container" id="home">
            <img className="Header-logo" src="http://www.peperossosocial.com/wp-content/themes/pepe/images/logo.png" alt="PepeRossoSoCial"/>
        <header>
          <nav>
            <ul className="Header-nav">
              <li className="Header-nav-item"><a className="Header-nav-link" href="/">Home</a></li>
              <li className="Header-nav-item"><a className="Header-nav-link" href="#menus">Menus</a></li>
              <li className="Header-nav-item"><a className="Header-nav-link" href="#events">Events</a></li>
              <li className="Header-nav-item"><a className="Header-nav-link" href="#hours_locations">Hours & Location</a></li>
              <li className="Header-nav-item"><a className="Header-nav-link" href="#contact">Contact</a></li>
            </ul>
          </nav>
        </header>
      </div>
        )
    }
}
export default Header