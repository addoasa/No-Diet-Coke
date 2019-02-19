import React from "react"
import "./Cantina.css"
import Drinks from "./Drinks/Drinks.js"
import Events from "./Events/Events.js"

class Cantina extends React.Component {
  render(){
    return(
      <div className="Cantina-container">
        <Drinks />
        <Events />
      </div>
    )
  }
}

export default Cantina
