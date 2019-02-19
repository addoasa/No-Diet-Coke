import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import './App.css';
import Header from "./Header/Header"
import TopImage from "./TopImage/TopImage"
import MainMenu from "./MainMenu/MainMenu"
import Cantina from "./Cantina/Cantina.js"
import BottomImage from "./BottomImage/BottomImage"
import Footer from './Footer/Footer';
import HoursLocations from './HoursLocation/HoursLocation'
import Arrow from './Arrow/Arrow';
import Contact from './Contact/Contact'

class App extends Component {
  render() {
    return (
      <div className="main-container">
        
        <Header />
        <TopImage />
        <Arrow />

        <ScrollableAnchor id={'menus'}>
          <MainMenu />
        </ScrollableAnchor>

        <ScrollableAnchor id={'events'}>
          <Cantina />  
        </ScrollableAnchor>

        <ScrollableAnchor id={"hours_locations"}>
          <HoursLocations />
        </ScrollableAnchor>
        
        <ScrollableAnchor id={"contact"}>
          <Contact />
        </ScrollableAnchor>
        
        <BottomImage />
        <Footer />

      </div>
    );
  }
}

export default App;
