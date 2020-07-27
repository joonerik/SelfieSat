import React from 'react'
import styled, { css } from "styled-components";
import DraggableUploader from './ImageUploader/DraggableUploader';
import DraggableUploaderV2 from './ImageUploader/DraggableUploaderV2';


function SecondForm(props) {
    return (
        <SecondFormContainer>
            <DraggableUploaderV2 onClickBack={props.onClickBack}/>
        </SecondFormContainer>
    )
}


const SecondFormContainer = styled.div`
box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  padding: 40px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
`

export default SecondForm
