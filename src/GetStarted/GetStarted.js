import React, { Component } from "react";
import styled, { css } from "styled-components";
import Form from "./components/Form";
import formBackground from "./resources/form-background.jpg";
import formBackground2 from "./resources/form-background2.jpg";
import formBackground3 from "./resources/form-background3.jpg";
import formBackground4 from "./resources/form-background4.jpg";
import formBackground5 from "./resources/form-background5.jpg";
import formBackground6 from "./resources/form-background6.jpg";
import formBackground7 from "./resources/form-background7.jpg";
import formBackground8 from "./resources/form-background8.jpg";
import formBackground9 from "./resources/form-background9.jpg";
import formBackground10 from "./resources/form-background10.jpg";
import StepProgressBar from "./components/StepProgressBar";


export default class GetStarted extends Component {
  render() {
    return (
      <GetStartedContainer>
        <Form />
      </GetStartedContainer>
    );
  }
}

const GetStartedContainer = styled.div`
  margin: auto;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background:
    url(${formBackground10}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  
  
`;
