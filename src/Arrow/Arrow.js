import "./Arrow.css";
import React from 'react';
import { Link } from "react-router-dom";

const Arrow =(props) => {
    return (
      <div className="arrow-div">
      <a href="#home">
        <i class="fas fa-arrow-up fa-4x" /> <br/> Top
      </a>
        
      </div>
    );
}
export default Arrow;