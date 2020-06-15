import React from "react";
import "./App.scss";
import Particles from "react-particles-js";
import Navigation from "../../components/Navigation/Navigation";
import Logo from "../../components/Logo/Logo";
import Rank from "../../components/Rank/Rank";
import ImageLinkForm from "../../components/ImageLinkForm/ImageLinkForm";
import Clarifai from "clarifai";
import FaceRecognition from "../../components/FaceRecognition/FaceRecognition";

const app = new Clarifai.App({ apiKey: "578e6186d27545c8811531b2df88be9f" });

const particlesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
    },
  },
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageInput: "",
      imageUrl: "",
      box: {},
    };
  }
  calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("picToDetect");
    const height = Number(image.height);
    const width = Number(image.width);

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };
  viewFaceBox = (box) => {
    this.setState({ box: box });
    console.log(box);
  };
  onImageInputChange = (event) => {
    this.setState({ imageInput: event.target.value, box: {}, imageUrl: "" });
  };
  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.imageInput });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.imageInput)
      .then((response) => {
        this.viewFaceBox(this.calculateFaceLocation(response));
      })
      .catch((err) => console.log(err));
  };
  render() {
    const { onImageInputChange, onButtonSubmit } = this;
    const { imageInput, imageUrl, box } = this.state;
    return (
      <div className="App container-fluid">
        <Particles className="Particles" params={particlesOptions} />
        <div className="d-flex justify-content-between mt-5">
          <Logo />
          <Navigation />
        </div>
        <Rank />
        <ImageLinkForm
          onImageInputChange={onImageInputChange}
          imageInputValue={imageInput}
          onButtonSubmit={onButtonSubmit}
        />
        <FaceRecognition box={box} imageUrl={imageUrl} />
      </div>
    );
  }
}

export default App;
