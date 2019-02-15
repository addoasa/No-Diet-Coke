import React, { Component } from 'react';
//{/* ---------------------------------------------------------------------- */}
import './App.css'; 
// we can either work out of one css file (./App.css) and do as danny said ( label our classNames as className = "Dessert_navbar" or className = "Contact_image")  or we can do separate css files for each component. ¯\_(ツ)_/¯

// {/* ---------------------------------------------------------------------- */}

import Header from "./Header/Header"
import TopImage from "./TopImage/TopImage"
import Dessert from "./Dessert/Dessert"
import BrunchLunch from "./BrunchLunch/BrunchLunch"
import Drinks from "./Drinks/Drinks"
import DinnerMenu from "./DinnerMenu/DinnerMenu"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="main-container">
      <Header />
      <TopImage />

{/* ---------------------------------------------------------------------- */}
        {/* This is where the header and main landing image components can go (ex: <Header />)  */}
{/* ---------------------------------------------------------------------- */}
       
       
        <Router>

            <React.Fragment>
              <div className="menu-colorful-bg">
                <div className= "menu-bg">
                  <h1 className= "menu-heading"> MENUS</h1>
                  <div className = "menu-navbar-container">
                    <Link to="/BrunchLunch" className="menu-navbar">Brunch & Lunch</Link> 
                    <Link to="/" className="menu-navbar">Dinner</Link> 
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


{/* ---------------------------------------------------------------------- */}
        {/* This is where everything beneath the menu (ex: <WeeklyEvents />, <HoursLocations />, <Contact />) can go */}
{/* ---------------------------------------------------------------------- */}


      </div>
    );
  }
}

export default App;
