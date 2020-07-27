import React, {useState} from 'react';
import styled, { css } from "styled-components";
import { Button, Icon } from "@blueprintjs/core";
import DraggableUploaderV2 from './ImageUploader/DraggableUploaderV2';


function FirstForm(props) {
  /*
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  
  //Handle inputs
  const handleFirstName=(e)=>{
    setFirstName(e.target.value);
    console.log(firstName);
  }
  const handleLastName=(e)=>{
    setLastName(e.target.value);
  }
  const handleEmail=(e)=>{
    setEmail(e.target.value);
  }
  const handlePhone=(e)=>{
    setPhone(e.target.value);
  }

*/


  return (
    <form>
      <FirstFormContainer>
        <h2>Send in your picture!</h2>
        <div class="row100">
          <div class="col">
            <div class="inputBox">
              <input type="text" name="firstName" required="required" value={props.firstName} onChange={props.handleFirstName}></input>
              <span class="text">First Name</span>
              <span class="line"></span>
            </div>
          </div>
          <div class="col">
            <div class="inputBox">
              <input type="text" name="lastName" required="required" value={props.lastName} onChange={props.handleLastName}></input>
              <span class="text">Last Name</span>
              <span class="line"></span>
            </div>
          </div>
          <div class="col">
            <div class="inputBox">
              <input type="text" name="email" required="required" value={props.email} onChange={props.handleEmail}></input>
              <span class="text">Email</span>
              <span class="line"></span>
            </div>
          </div>
          <div class="col">
            <div class="inputBox">
              <input type="text" name="phone" required="required" value={props.phone} onChange={props.handlePhone}></input>
              <span class="text">Phone</span>
              <span class="line"></span>
            </div>
          </div>
        </div>
      </FirstFormContainer>
    </form>
  );
}

const FirstFormContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  

  h2 {
    width: 100%;
    color: #305d82;
    font-size: 36px;
    text-align: center;
    margin-bottom: 10px;
  }

  .row100 {
    position: relative;
    width: 90%;
    display: grid;
    grid-template-columns: repeat(autofit, minmax(300px, 1fr));
  }

  .row100 .col {
    position: relative;
    width: 100%;
    margin: 30px 0 10px;
    transition: 0.5s;
  }

  .row100 .inputBox {
    position: relative;
    width: 100%;
    height: 40px;
    color: #305d82;
  }

  .row100 .inputBox input {
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

  .row100 .inputBox .text {
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
  .row100 .inputBox input:valid + .text {
    top: -35px;
  }

  .row100 .inputBox .line {
    position: absolute;
    bottom: 0;
    display: block;
    width: 100%;
    height: 2px;
    background: #305d82;
    transition: 0.5s;
    border-radius: 2px;
    pointer-events: none;
  }

  .row100 .col .button {
    display: flex;
    justify-content: flex-end;
  }
`;

export default FirstForm;
