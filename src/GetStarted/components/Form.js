import React, { useState } from "react";
import styled, { css } from "styled-components";
import FirstForm from "./FirstForm";
import DraggableUploaderV2 from "./ImageUploader/DraggableUploaderV2";
import { Button, Intent } from "@blueprintjs/core";
import { useForm } from "react-hook-form";

import firebase from "../../firebase";


function Form() {
  const [showFirstForm, setFirstForm] = useState(true);
  const [showSecondForm, setSecondForm] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [image, setImage] = useState(null);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (e) => {
    e.preventDefault();

    firebase.firestore().collection("personals").add({
      firstName,
      lastName,
      email,
      phone
    }).then(() => {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
    })
  };

  //Handle inputs
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
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
    <form
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onSubmit={onSubmit} //egentlig onSubmit={handleSubmit(onSubmit)} men fikser preventDefault senere
    >
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
          register={register}
          required={true}
          errors={errors}
        />
        <DraggableUploaderV2 />

        <Button
          text="Submit"
          intent={Intent.PRIMARY}
          style={{ width: "70%", height: "40px" }}
          type="submit"
        />
      </FormContainer>
    </form>
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
