import React from "react";
import "./App.scss";
import Particles from "react-particles-js";
import Navigation from "../../components/Navigation/Navigation";
import Logo from "../../components/Logo/Logo";
import Rank from "../../components/Rank/Rank";
import ImageLinkForm from "../../components/ImageLinkForm/ImageLinkForm";

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

function App() {
  return (
    <div className="App container-fluid">
      <Particles className="Particles" params={particlesOptions} />
      <div className="d-flex justify-content-between mt-5">
        <Logo />
        <Navigation />
      </div>
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
