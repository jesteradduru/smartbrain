import React from "react";
import "./FaceRecognition.css";
const FaceRecognition = ({ imageUrl, box }) => {
  if (imageUrl) {
    return (
      <div className="d-flex justify-content-center">
        <div className="mb-5" style={{ position: "absolute", maxWidth: "90%" }}>
          <img id="picToDetect" className="img-fluid" src={imageUrl} alt="img" />
          <div
            className="bounding-box"
            style={{
              top: box.topRow,
              left: box.leftCol,
              bottom: box.bottomRow,
              right: box.rightCol,
            }}
          ></div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <p className="text-center text-secondary">Insert image URL in the form.</p>
      </div>
    )
  }
};

export default FaceRecognition;
