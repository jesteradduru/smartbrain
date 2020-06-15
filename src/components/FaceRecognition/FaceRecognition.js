import React from "react";
import "./FaceRecognition.css";
const FaceRecognition = ({ imageUrl, box }) => {
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
};

export default FaceRecognition;
