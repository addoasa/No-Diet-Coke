import "./Arrow.css";
import React from 'react';
import { Link } from "react-router";

const Arrow =(props) => {
    return (
      <div className="arrow-div">
      <Link to="/">
        <i class="fas fa-arrow-up fa-4x" /> <br/> Top
      </Link>
        
      </div>
    );
}
export default Arrow;