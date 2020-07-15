import React from "react";
import styled, { css } from "styled-components";
import { FaTimes } from "react-icons/fa";


function UploadedImagePreview(props) {
  const UploadedImagePreviewContainer = styled.div`
    min-width: 40em;
    max-width: 45em;
    min-height: 20em;
    max-height: 18em;
    padding: 6px;
    border-radius: 4px;
    background: url(${props.image});
    background-size: cover;
    border: 2px dashed rgba(95, 92, 92, 0.2);
    font-size: 14px;
    margin-bottom: 7px;
    position: relative;
    overflow: hidden;
  `;

  return (
    <UploadedImagePreviewContainer>
      <div><FaTimes /></div>
    </UploadedImagePreviewContainer>
  );
}

export default UploadedImagePreview;
