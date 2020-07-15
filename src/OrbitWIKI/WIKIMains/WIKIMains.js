import React from "react";
import "./WIKIMains.css";
import Slide from "react-reveal/Slide";

function WIKIMains(props) {
  var order;
  var color;
  var border;
  var background;
  if (props.boolean) {
    order = {
      flexFlow: "row-reverse",
    };
    color = {
      color: "#3498db",
    };
    border = {
      border: "1px solid #3498db",
    };
    background = {
      background: "#3498db",
    };
  } else {
    order = {
      flexFlow: "row",
    };
    color = {
      color: "#e3a935",
    };
    border = {
      border: "1px solid #e3a935",
    };
    background = {
      background: "#e3a935",
    };
  }

  let image = (
    <div className="WIKIMains-left">
      <img src={props.image} />
    </div>
  );

  let info = (
    <div className="WIKIMains-right">
      <div className="container">
        <h1 style={color}>{props.header}</h1>
        <p>{props.info}</p>
        <div className="WIKIMains-button">
          <a>
            <p>
              <span class="bg" style={background}></span>
              <span class="base" style={border}></span>
              <span class="text">{props.buttonText}</span>
            </p>
          </a>
        </div>
      </div>
    </div>
  );

  if (props.boolean) {
    return (
      <div className="WIKIMains-body" style={order}>
        <Slide right>{info}</Slide>
        <Slide left>{image}</Slide>
      </div>
    );
  } else {
    return (
      <div className="WIKIMains-body" style={order}>
        <Slide left>{info}</Slide>
        <Slide right>{image}</Slide>
      </div>
    );
  }
}

export default WIKIMains;
