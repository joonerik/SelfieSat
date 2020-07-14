import React from "react";
import styled, { css } from "styled-components";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import StepProgressBar from "./StepProgressBar";

function Form() {
  const [showFirstForm, setFirstForm] = React.useState(true);
  const [showSecondForm, setSecondForm] = React.useState(false);

  const onClickNext = () => {
    setFirstForm(false)
    setSecondForm(true)
  };
  const onClickBack = () => {
    setFirstForm(true)
    setSecondForm(false)
  };

  return (
    <FormContainer>
        <div>
          {showFirstForm ? <FirstForm onClickNext={onClickNext} /> : null}
          {showSecondForm ? <SecondForm onClickBack={onClickBack} /> : null}
        </div>
      </FormContainer>
  )
}

export default Form


const FormContainer = styled.div`
  width: 35%;
`;
