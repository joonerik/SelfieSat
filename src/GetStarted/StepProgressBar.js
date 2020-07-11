import React, { Component } from "react";
import styled, { css } from "styled-components";
import { FaClipboardList } from "react-icons/fa";
import { FaFileImage } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { FaTimes } from "react-icons/fa";
import { TiRefresh } from "react-icons/ti";
import { FaCheck } from "react-icons/fa";

export default class StepProgressBar extends Component {


  render() {
    return (
      <IconContext.Provider value={{ size: "60px" }}>
        <StepProgressBarContainer>
          <ul>
            <li>
              <FaClipboardList />
              <br></br>
              <IconContext.Provider value={{ size: "20px" }}>
                <br></br>
                <div className="fa">
                    <FaCheck />
                </div>
              </IconContext.Provider>
              <p>Fill form</p>
            </li>
            <li>
              <FaFileImage />
              <br></br>
              <IconContext.Provider value={{ size: "20px" }}>
                <br></br>
                <div className="fa">
                    <FaCheck />
                </div>
              </IconContext.Provider>
              <p>Upload image</p>
            </li>
          </ul>
        </StepProgressBarContainer>
      </IconContext.Provider>
    );
  }
}

const StepProgressBarContainer = styled.div`
  color: #01ab97;

  ul {
    align-items: center;
    justify-content: center;
    display: flex;
  }

  ul li {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 200px;
    position: relative;
    
  }

  ul li .fa {
    background: #ccc;
    width: 16px;
    height: 16px;
    color: #fff;
    border-radius: 50%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ul li .fa::after{
      content: '';
      background: #ccc;
      height: 5px;
      width: 200px;
      display: block;
      position: absolute;
      left: 0;
      top: 115px;
      z-index: -1;
  }

  ul li:first-child .fa::after{
      width: 100px;
      left: 100px;
  }
  ul li:nth-child(2) .fa::after{
      width: 100px;
  }

  
`;
