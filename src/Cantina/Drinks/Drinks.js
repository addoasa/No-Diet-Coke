import React from "react"
import "./Drinks.css"

const Drinks = () => {
  return(
    <div className="Drinks-wrapper">
      <div className="Drinks-image-wrapper">
        <img className="Drinks-image" src="http://www.peperossosocial.com/wp-content/uploads/2014/09/51.jpg" alt=""/>
      </div>
      <div className="Drinks-menu-wrapper">
        <h1 className="Drinks-menu-header">CANTINA</h1>
        <h5 className="Drinks-location">Downstairs</h5>
        <h5 className="Drinks-availability">Thursday,Friday & Saturday</h5>
        <h3 className="Drinks-price">BEFORE DINNER DRINKS - $12</h3>
        <p className="Drinks-name">Aperol Spritz<span className="Drinks-description"> (aperol, prosecco, club soda)</span></p>
        <p className="Drinks-name">Negroni Sbagliato<span className="Drinks-description"> (Campari, vermouth, prosecco)</span></p>
        <p className="Drinks-name">Caipiroska<span className="Drinks-description"> (vodka, sour mix, club soda)</span></p>
        <p className="Drinks-name">Spicy Mojito<span className="Drinks-description"> (rum, jalapeño, mint, lime)</span></p>
        <p className="Drinks-name">Crodino Twist<span className="Drinks-description"> (gin, orange bitters, vermouth)</span></p>
        <p className="Drinks-name">Paradise<span className="Drinks-description"> (gin, apricot brandy, orange juice)</span></p>
        <br/>
        <br/>
        <h3 className="Drinks-price">AFTER DINNER DRINKS - $12</h3>
        <p className="Drinks-name">Sgroppino<span className="Drinks-description"> (lemon sorbet, vodka, prosecco)</span></p>
        <p className="Drinks-name">Sidecar<span className="Drinks-description"> (cognac, Cointreau, lemon juice)</span></p>
        <p className="Drinks-name">Godfather<span className="Drinks-description"> (Scotch, Amaretto di Saronno)</span></p>
        <p className="Drinks-name">After Supper<span className="Drinks-description"> (apricot brandy, Cointreau, lemon juice)</span></p>
        <p className="Drinks-name">Espresso Martini<span className="Drinks-description"> (Kahlua, vodka, espresso)</span></p>
      </div>
    </div>
  )
}
export default Drinks
