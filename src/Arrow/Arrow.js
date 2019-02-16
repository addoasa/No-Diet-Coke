import "./Arrow.css";
import React from 'react';
import arrow from "../images/arrow.png"

const Arrow =(props) => {
    return (
      <div className="arrow-div">
        <a href="#home">
            <img src={arrow} alt="Go to top" />
        </a>
      </div>
    );
}
export default Arrow;