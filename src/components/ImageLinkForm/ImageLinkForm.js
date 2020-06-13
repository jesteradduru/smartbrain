import React from "react";

const ImageLinkForm = () => {
  return (
    <div className="text-secondary text-center mt-5">
      <h3>
        this magic brain will detect faces in your pictures. give it a try
      </h3>
      <div
        className="input-group mb-3 mx-auto m-5"
        style={{ maxWidth: "700px" }}
      >
        <input
          type="text"
          className="form-control bg-dark border border-secondary"
          placeholder="image url"
        />
        <div className="input-group-append">
          <button className="btn btn-info px-md-5 border border-secondary">
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
