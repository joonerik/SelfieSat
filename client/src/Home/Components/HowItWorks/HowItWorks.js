import React from "react";
import "./HowItWorks.css";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";


function HowItWorks(props) {
  return (
    <div className="how-it-works">
      <Zoom>
        <div className="container">
          <div className="header">
            <h1>{props.header}</h1>
            <hr></hr>
          </div>
          <div className="how-it-works-text">
            <p>{props.text1}</p>
            <p>{props.text2}</p>
          </div>
          <div className="button-container">
            <Link to="/getStarted">
             <button class="btn btn1">Get Started!</button>
            </Link>
          </div>
        </div>
      </Zoom>
    </div>
  );
}

export default HowItWorks;
