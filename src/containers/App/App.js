import React from "react";
import "./App.scss";
import Particles from "react-particles-js";
import Navigation from "../../components/Navigation/Navigation";
import Logo from "../../components/Logo/Logo";
import Rank from "../../components/Rank/Rank";
import ImageLinkForm from "../../components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "../../components/FaceRecognition/FaceRecognition";
import Signin from "../../components/Signin/Signin";
import Register from "../../components/Register/Register";

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

const inititialState = {
    imageInput: "",
    imageUrl: "",
    box: {},
    route: "signin",
    user: {
        id: '',
        name: '',
        email: '',
        entries: '',
        joined: ''
    }
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = inititialState;
    }
    calculateFaceLocation = (data) => {
        const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
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
        fetch("http://localhost:3001/detectImage/", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ imgUrl: this.state.imageInput })
        })
            .then(res => res.json())
            .then((response) => {
                if (response) {
                    fetch("http://localhost:3001/image/", {
                        method: "put",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ imgUrl: this.state.user.id })
                    })
                        .then((res) => {
                            console.log(res);
                            this.viewFaceBox(this.calculateFaceLocation(response));
                        })
                        .catch(console.log)
                }
            })
            .catch((err) => console.log(err));
    };

    onRouteChange = (route) => {
        this.setState({ route });
    }

    loadUser = (user) => {
        this.setState({
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                entries: user.entries,
                joined: user.joined,
            }
        })
    }

    render() {
        const { onImageInputChange, onButtonSubmit, onRouteChange, loadUser } = this;
        const { imageInput, imageUrl, box, route, user } = this.state;

        const activeRoute = (route) => {
            switch (route) {
                case "home":
                    return (
                        <div>
                            <Rank name={user.name} entries={user.entries} />
                            <ImageLinkForm
                                onImageInputChange={onImageInputChange}
                                imageInputValue={imageInput}
                                onButtonSubmit={onButtonSubmit}
                            />
                            <FaceRecognition box={box} imageUrl={imageUrl} />
                        </div>
                    )
                case "register":
                    return <Register onRouteChange={onRouteChange} loadUser={loadUser} />
                default:
                    return <Signin onRouteChange={onRouteChange} loadUser={loadUser} />
            }
        }

        return (
            <div className="App container-fluid">
                <Particles className="Particles" params={particlesOptions} />
                <div className="d-flex justify-content-between mt-5">
                    <Logo />
                    <Navigation route={route} onRouteChange={onRouteChange} />
                </div>
                {activeRoute(route)}
            </div>
        );
    }
}

export default App;
