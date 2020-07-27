import React, { useState } from "react";
import styled, { css } from "styled-components";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import StepProgressBar from "./StepProgressBar";
import DraggableUploaderV2 from "./ImageUploader/DraggableUploaderV2";

function Form() {
  const [showFirstForm, setFirstForm] = useState(true);
  const [showSecondForm, setSecondForm] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  //Handle inputs
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    console.log(firstName);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  return (
    <FormContainer>
          <FirstForm
            firstName={firstName}
            handleFirstName={handleFirstName}
            lastName={lastName}
            handleLastName={handleLastName}
            email={email}
            handleEmail={handleEmail}
            phone={phone}
            handlePhone={handlePhone}
          />
          <DraggableUploaderV2 />
    </FormContainer>
  );
}

export default Form;

const FormContainer = styled.div`
  box-sizing: border-box;
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  padding: 40px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
`;
