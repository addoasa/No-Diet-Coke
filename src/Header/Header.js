import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

class Header extends React.Component {
    render(){
        return(
            <div className="Header-container" id="home">
            <Link className="logo-link" to="/"><img className="Header-logo" src="http://www.peperossosocial.com/wp-content/themes/pepe/images/logo.png" alt="PepeRossoSoCial"/></Link>
        <header>
          <nav>
            <ul className="Header-nav">
              <li className="Header-nav-item"><Link className="Header-nav-link" to="/">Home</Link></li>
              <li className="Header-nav-item"><Link className="Header-nav-link" to="/menus">Menus</Link></li>
              <li className="Header-nav-item"><Link className="Header-nav-link" to="/events">Events</Link></li>
              <li className="Header-nav-item"><Link className="Header-nav-link" to="/hours-location">Hours & Location</Link></li>
              <li className="Header-nav-item"><Link className="Header-nav-link" to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
      </div>
        )
    }
}
export default Header