import React, { Component } from 'react';
import './App.css';
import Dessert from "./Dessert/Dessert"
import BrunchLunch from "./BrunchLunch/BrunchLunch"
import Drinks from "./Drinks/Drinks"
import DinnerMenu from "./DinnerMenu/DinnerMenu"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Router>
            <React.Fragment>
              <h1> Menu</h1>

               <Link to="/BrunchLunch">Brunch/Lunch</Link> 
               <Link to="/">Dinner</Link> 
               <Link to="/Dessert">Dessert</Link> 
               <Link to="/Drinks">Drinks</Link> 

              <Route exact path='/' component={ DinnerMenu } />
              <Route path='/Dessert' component={ Dessert } />
              <Route path='/BrunchLunch' component={ BrunchLunch } />
              <Route path='/Drinks' component={ Drinks } />

            </React.Fragment>
          </Router>
        
      </div>
    );
  }
}

export default App;
