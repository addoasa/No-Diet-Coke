import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

//{/* ---------------------------------------------------------------------- */}
import './App.css';
// we can either work out of one css file (./App.css) and do as danny said ( label our classNames as className = "Dessert_navbar" or className = "Contact_image")  or we can do separate css files for each component. ¯\_(ツ)_/¯

// {/* ---------------------------------------------------------------------- */}

import Header from "./Header/Header"
import TopImage from "./TopImage/TopImage"
import MainMenu from "./MainMenu/MainMenu"
import Cantina from "./Cantina/Cantina.js"
import BottomImage from "./BottomImage/BottomImage"
import Footer from './Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Header />
        <TopImage />
        <MainMenu />
        <Cantina />  
        <BottomImage />
        <Footer />
      </div>
    );
  }
}

export default App;
