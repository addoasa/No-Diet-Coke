import React from "react"
import "./Events.css"

const Events = () => {
  return(
    <div className="Events-container">
      <div className="Events-info-container">
        <h1 className="Events-title">WEEKLY EVENTS</h1>
        <br/>
        <br/>
        <h2 className="Events-section">HAPPY HOUR</h2>
        <br/>
        <p className="Events-info">Monday to Friday, 5:00pm-7:00pm</p>
        <p className="Events-info">Imported Beer $4</p>
        <p className="Events-info">House Wine $4/glass</p>
        <br/>
        <p className="Events-section">SPARKLING BRUNCH</p>
        <br/>
        <p className="Events-info">Saturday and Sunday</p>
        <br/>
        <p className="Events-section">PREMIER LEAGUE ACTION</p>
        <br/>
        <p className="Events-info">Every Saturday</p>
      </div>
      <div className="Events-image-wrapper">
        <img className="Events-image" src="http://www.peperossosocial.com/wp-content/uploads/2014/09/81.jpg" alt=""/>
      </div>
    </div>
  )
}
export default Events
