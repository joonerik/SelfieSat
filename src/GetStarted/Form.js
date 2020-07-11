import React, { Component } from "react";
import styled, { css } from "styled-components";

export default class Form extends Component {
  render() {
    return (
      <FormContainer>
        <h2>Send in your picture!</h2>
        <div class="row100">
          <div class="col">
            <div class="inputBox">
              <input type="text" name="" required="required"></input>
              <span class="text">First Name</span>
              <span class="line"></span>
            </div>
          </div>
          <div class="col">
            <div class="inputBox">
              <input type="text" name="" required="required"></input>
              <span class="text">Last Name</span>
              <span class="line"></span>
            </div>
          </div>
          <div class="col">
            <div class="inputBox">
              <input type="text" name="" required="required"></input>
              <span class="text">Email</span>
              <span class="line"></span>
            </div>
          </div>
          <div class="col">
            <div class="inputBox">
              <input type="text" name="" required="required"></input>
              <span class="text">Phone</span>
              <span class="line"></span>
            </div>
          </div>
        </div>
        
        <div class="row100">
          <div class="col">
            <input type="submit" value="next" />
          </div>
        </div>
      </FormContainer>
    );
  }
}

const FormContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  width: 30%;
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 15px;

  h2{
    width: 100%;
    color: #305D82;
    font-size: 36px;
    text-align: center;
    margin-bottom: 10px;
  }

  .row100{
    position: relative;
    width: 70%;
    display: grid;
    grid-template-columns: repeat(autofit, minmax(300px, 1fr));
  }

  .row100 .col{
    position: relative;
    width: 100%;
    padding: 0 10px;
    margin: 30px 0 10px;
    transition: 0.5s;
  }

  .row100 .inputBox{
    position: relative;
    width: 100%;
    height: 40px;
    color: #305D82;
  }

  .row100 .inputBox input,
  .row100 .inputBox.textarea textarea{
    position: absolute;
    width: 100%;
    height: 100%;
    background: transparent;
    box-shadow: none;
    border: none;
    outline: none;
    font-size: 18px;
    font-family: "Montserrat", sans-serif;
    color: black;
    z-index: 1;
  }

  .row100 .inputBox .text{
    position: absolute;
    top: 0;
    left: 0;
    line-height: 40px;
    font-size: 18px;
    font-weight: bold;
    display: block;
    transition: 0.5s;
    pointer-events: none;
  }

  .row100 .inputBox input:focus + .text,
  .row100 .inputBox input:valid + .text{
    top: -35px;
  }

  .row100 .inputBox .line{
    position: absolute;
    bottom: 0;
    display: block;
    width: 100%;
    height: 2px;
    background: #305D82;
    transition: 0.5s;
    border-radius: 2px;
    pointer-events: none;
  }

`;
