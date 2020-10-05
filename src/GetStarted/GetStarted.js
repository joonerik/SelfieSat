import React, { useState, useCallback, useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import testFormBackground5 from "./resources/testFormBackground5.jpg";

import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import useForm from "./components/useForm";
import validate from "./components/Validate";

import { AnchorButton, Intent } from "@blueprintjs/core";

import "./GetStarted.css";

import firebase from "../firebase";
import { storage } from "../firebase";

import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import {
  extractImageFileExtensionFromBase64,
  base64StringtoFile,
} from "../ReusableUtils";

// Increase pixel density for crop preview quality on retina screens.
const pixelRatio = window.devicePixelRatio || 1;

function GetStarted() {
  const [uploadImage, setUploadImage] = useState();
  const inputFile = useRef(null);

  const { handleFormChange, values, setValues, errors, setErrors } = useForm();

  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [crop, setCrop] = useState({ unit: "%", width: 30, aspect: 3 / 4 });
  const [completedCrop, setCompletedCrop] = useState(null);

  const handleFireBaseUpload = (e) => {
    e.preventDefault();

    if (errors) {
      setErrors(validate(values));
    }
    if (uploadImage == null) {
      console.log("Image is required!");
    }

    /*
    // get crop goes here...
    const fileExtension = extractImageFileExtensionFromBase64(uploadImage);
    const myFileName = values.phone + "." + fileExtension;

    const imageData64 = previewCanvasRef.current.toDataURL(
      "image/" + fileExtension
    );

    const myNewCroppedFile = base64StringtoFile(imageData64, myFileName);

    // async magic goes here...
    if (myNewCroppedFile === "") {
      console.error(
        `not an image, the image file is a ${typeof myNewCroppedFile}`
      );
    }

    const uploadTask = storage
      .ref(`/images/${myNewCroppedFile.name}`)
      .put(myNewCroppedFile);

    uploadTask.on(
      "state_changed",
      (snapShot) => {
        console.log(snapShot);
      },
      (err) => {
        console.log(err);
      },
      () => {
        storage
          .ref("images")
          .child(myNewCroppedFile.name)
          .getDownloadURL()
          .then((fireBaseUrl) => {
            firebase
              .firestore()
              .collection("personals")
              .add({
                values,
                fireBaseUrl,
              })
              .then(() => {
                setValues({ fullName: "", email: "", phone: "" })
                setUploadImage(null);
              });
          });
      }
    );*/
  };

  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setUploadImage(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onBrowseButtonClicked = () => {
    inputFile.current.click();
  };

  const handleResetButtonClicked = () => {
    setUploadImage(null);
  };

  //--------------------------------- ALL METHODS FOR REACT CROP ---------------------------------//

  const handleImageLoaded = useCallback((img) => {
    imgRef.current = img;
  }, []);

  const handleCropChange = (crop) => {
    setCrop(crop);
  };

  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return;
    }

    const image = imgRef.current;
    const canvas = previewCanvasRef.current;
    const crop = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext("2d");

    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );
  }, [completedCrop]);

  return (
    <GetStartedContainer>
      {/*<Form />*/}
      <FormContainer>
        <form onSubmit={handleFireBaseUpload} noValidate>
          <h2>Send in your picture!</h2>
          <div className="form">
            <TextField
              id="outlined-basic"
              name="fullName"
              label="Full Name*"
              variant="outlined"
              value={values.fullName}
              onChange={handleFormChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle color="primary" />
                  </InputAdornment>
                ),
              }}
              error={errors.fullName}
              helperText={errors.fullName}
            />
          </div>
          <div className="form">
            <TextField
              id="outlined-basic"
              name="email"
              label="Email*"
              variant="outlined"
              value={values.email}
              onChange={handleFormChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon color="primary" />
                  </InputAdornment>
                ),
              }}
              error={errors.email}
              helperText={errors.email}
            />
          </div>
          <div className="form">
            <TextField
              id="outlined-basic"
              name="phone"
              label="Phone*"
              variant="outlined"
              value={values.phone}
              onChange={handleFormChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <PhoneIcon color="primary" />
                  </InputAdornment>
                ),
              }}
              error={errors.phone}
              helperText={errors.phone}
            />
          </div>

          {uploadImage == null ? (
            <div className="inner-container">
              <h3>Drag an image</h3>
              <div className="draggable-container">
                <input
                  type="file"
                  id="file-browser-input"
                  name="file-browser-input"
                  ref={inputFile}
                  onChange={onSelectFile}
                />
                <div className="files-preview-container"></div>
                <div className="helper-text">Drag and Drop Images Here</div>
                <div className="file-browser-container">
                  <AnchorButton
                    text="Browse"
                    intent={Intent.PRIMARY}
                    minimal={true}
                    onClick={onBrowseButtonClicked}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="cropping-image-view">
              <ReactCrop
                src={uploadImage}
                crop={crop}
                onImageLoaded={handleImageLoaded}
                onComplete={(c) => setCompletedCrop(c)}
                onChange={handleCropChange}
              />
              <canvas
                style={{ display: "none" }}
                ref={previewCanvasRef}
              ></canvas>

              <AnchorButton
                icon="refresh"
                intent="danger"
                text="Reset"
                style={{
                  width: "15%",
                  margin: "10px 0 10px 10px",
                  alignSelf: "flex-end",
                }}
                onClick={handleResetButtonClicked}
              />
            </div>
          )}
          {/* Error message goes here */}
          <div className="form">
            <Button
              className="form-button"
              variant="contained"
              color="primary"
              endIcon={<SendIcon />}
              type="submit"
            >
              Send
            </Button>
          </div>
        </form>
      </FormContainer>
    </GetStartedContainer>
  );
}

const GetStartedContainer = styled.div`
  margin: auto;
  width: 100%;
  min-height: 130vh;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  background: url(${testFormBackground5}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: 100% 100%;
`;

const FormContainer = styled.div`
  width: 35%;
  min-height: 60vh;
  padding: 40px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;

  display: flex;
  flex-flow: column;
  align-items: center;

  form {
    display: flex;
    flex-flow: column;
    align-items: center;
  }
`;

export default GetStarted;
