import React from "react";
import Slide from 'react-reveal/Slide';
import { Link } from "react-router-dom";


import "./AboutUs.css";

function AboutUs(props) {
  return (
    <div className="about-us">
      <div className="container">
        <Slide bottom>
        <div className="about-us-text">
          <div className="container">
            <h1>{props.header}</h1>
            <p>{props.text}</p>
            <p>{props.text2}</p>
            <div className="button-container">
            <Link to="/orbitWiki">
              <button class="btn btn1">OrbitNTNU WIKI</button>
              </Link>
            </div>
          </div>
        </div>
        </Slide>
        <Slide bottom>
        <div className="about-us-image">
            <img src={props.image} />
          </div>
          </Slide>
      </div>
    </div>
  );
}

export default AboutUs;
