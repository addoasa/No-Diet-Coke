import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './MainMenu.css';
import Dessert from "./Dessert/Dessert"
import BrunchLunch from "./BrunchLunch/BrunchLunch"
import Drinks from "./Drinks/Drinks"
import DinnerMenu from "./DinnerMenu/DinnerMenu"

class MainMenu extends Component {
    render() {
      return (


        <Router>

            <React.Fragment>
              <div className="menu-colorful-bg">
                <div className= "menu-bg">
                  <h1 className= "menu-heading"> MENUS</h1>
                  <div className = "menu-navbar-container">
                    <Link to="/BrunchLunch" className="menu-navbar">Brunch & Lunch</Link> 
                    <Link to="/" className="menu-navbar" id="dinner-heading">Dinner</Link> 
                    <Link to="/Dessert" className="menu-navbar">Dessert</Link> 
                    <Link to="/Drinks" className="menu-navbar">Drinks</Link> 
                  </div>


                  <Route exact path='/' component={ DinnerMenu } />
                  <Route path='/Dessert' component={ Dessert } />
                  <Route path='/BrunchLunch' component={ BrunchLunch } />
                  <Route path='/Drinks' component={ Drinks } />
                </div>
            </div>
            </React.Fragment>


        </Router>

      );
    }
  }

  export default MainMenu