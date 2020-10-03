import React, { useState } from "react";
import styled, { css } from "styled-components";
import { FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";




function UploadedImagePreview(props) {

  const [crop, setCrop] = useState({ unit: "%", width: 30, aspect: 16 / 9 });


  const handleOnCropChange = (crop) => {
    console.log(crop);
    setCrop(crop);
    console.log(crop);
  }

  const UploadedImagePreviewContainer = styled.div`
    min-width: 40em;
    max-width: 45em;
    min-height: 20em;
    max-height: 18em;
    padding: 6px;
    border-radius: 4px;
    border: 2px dashed rgba(95, 92, 92, 0.2);
    font-size: 14px;
    margin-bottom: 7px;
    position: relative;
    overflow: hidden;

    button {
      position: absolute;
      top: 0;
      right: 0;
      background: transparent;
      border: none;
    }
    button:hover {
      cursor: pointer;
    }
  `;

  return (
    <UploadedImagePreviewContainer>
      {/*<IconContext.Provider value={{size: "20px" }}>
        <button onClick={props.removeButtonHandler}>
          <FaTimes />
        </button>
  </IconContext.Provider>*/}
      <ReactCrop
        src={props.image}
        crop={crop}
        style={{height: 400, width: 400}}
      />
      <ReactCrop />
    </UploadedImagePreviewContainer>
  );
}

export default UploadedImagePreview;
