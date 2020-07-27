import React, { Component } from "react";
import "./DraggableUploader.css";
import { AnchorButton, Intent } from "@blueprintjs/core";
import UploadedImagePreview from "./UploadedImagePreview";
import Dropzone from "react-dropzone";

export default class DraggableUploader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFile: null,
      files: [],
    };

    this.onDrop = (files) => {
      this.setState({ files });
    };
  }

  /*
  onFileLoad = (e) => {
    const file = e.currentTarget.files[0];

    let fileReader = new FileReader();
    fileReader.onload = () => {
        console.log("IMAGE LOADED: ", fileReader.result);
    }

    fileReader.onabort = () => {
        alert("Reading Aborted!")
    }

    fileReader.onerror = () => {
        alert("Reading ERROR!")
    } 

    fileReader.readAsDataURL(file);
  }
  */
  fileSelectedHandler = (event) => {
    if (this.state.selectedFile == null) {
      console.log("Null");
      this.setState({
        selectedFile: URL.createObjectURL(event.target.files[0]),
      });
    } else {
      console.log("not null");
      URL.revokeObjectURL(this.state.selectedFile);
      this.setState({
        selectedFile: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  removeImage = () => {
    this.setState({
      selectedFile: null,
    });
  };

  render() {
    const files = this.state.files.map((file) => (
      <li key={file.name}>
        {file.name} - {file.size} bytes
      </li>
    ));

    return (
      <div
        className="inner-container"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Dropzone>
          {(dropzoneProps) => {
            return (
              <div>
                <p>Drop some files here</p>
              </div>
            );
          }}
        </Dropzone>
        <div className="sub-header">
          <h1>Drag an Image</h1>
        </div>
        {this.state.selectedFile === null ? (
          <div className="draggable-container">
            <input
              type="file"
              id="file-browser-input"
              name="file-browser-input"
              ref={(input) => (this.fileInput = input)}
              onDragOver={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              onDrop={this.fileSelectedHandler}
              onChange={this.fileSelectedHandler}
            />
            <div className="helper-text">Drag and Drop Images Here</div>
            <div className="file-browser-container">
              <AnchorButton
                text="Browse"
                intent={Intent.PRIMARY}
                minimal={true}
                onClick={() => this.fileInput.click()}
              />
            </div>
          </div>
        ) : (
          <UploadedImagePreview
            image={this.state.selectedFile}
            removeButtonHandler={this.removeImage}
          />
        )}

        <AnchorButton
          text="Submit"
          intent={Intent.SUCCESS}
          onClick={this.props.onClick}
        />
      </div>
    );
  }
}

/**
 * <div className="draggable-container">
            <input
              type="file"
              id="file-browser-input"
              name="file-browser-input"
              ref={(input) => (this.fileInput = input)}
              onDragOver={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              onDrop={this.fileSelectedHandler}
              onChange={this.fileSelectedHandler}
            />
            <div className="helper-text">Drag and Drop Images Here</div>
            <div className="file-browser-container">
              <AnchorButton
                text="Browse"
                intent={Intent.PRIMARY}
                minimal={true}
                onClick={() => this.fileInput.click()}
              />
            </div>
          </div>
 */
