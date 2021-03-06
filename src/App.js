import React , { Component} from 'react';
import Navigation from "./components/Navigations/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import Rank from "./components/Rank/Rank";
import './App.css'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
    apiKey:'d543133d951447ef8883845c239ef167'
})

const particlesOptions = {
    particles: {
                number: {
                    value: 40,
                    density: {
                        enable : true,
                        value_area : 800
                    }
                }
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            }
        }
    }
}

class App extends Component {
    constructor(){
        super()
        this.state = {
            input: '',
            imageUrl: '',
            box: {},
            route: 'sign-in',
            isSignedIn: false
        }
    }

    calculateFaceLocation = (data) => {
        const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
        const image = document.getElementById('inputimage')
        const width = Number(image.width)
        const height = Number(image.height)
        return {
            leftCol: clarifaiFace.left_col * width,
            topRow: clarifaiFace.top_row * height,
            rightCol: width - (clarifaiFace.right_col * width),
            bottomRow: height - (clarifaiFace.bottom_row * height)
        }
    }

    displayFaceBox = (box) => {
        this.setState({box: box})
    }

    onInputChange = (e) => {
        this.setState({input : e.target.value})
    }

    onSubmit = () => {
        console.log('click');
        this.setState({imageUrl : this.state.input})   
        app.models
        .predict(
        Clarifai.FACE_DETECT_MODEL ,
        this.state.input)
        .then( response => this.displayFaceBox(this.calculateFaceLocation(response)))

        .catch(err => console.log('there isn\'t any face in this image',err))
    }

    onRouteChange = (route) => {
        if (route === 'sign-out') {
          this.setState({isSignedIn: false}) 
        }
        else if(route === 'home'){
          this.setState({isSignedIn: true}) 
        }
        this.setState({route: route})
    }

    render(){
        const {isSignedIn,imageUrl,box,route} = this.state
        return(
            <div className='App' >
            <Particles className='particles'
              params={particlesOptions}
            />
                <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
                { route === 'home' 
                ?<div>
                <Logo />
                <Rank />
                <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
                <FaceRecognition box={box} imageUrl={imageUrl} />
            </div>
                : (
                    route === 'sign-in'  
                    ?<Signin onRouteChange={this.onRouteChange} />
                    :<Register onRouteChange={this.onRouteChange} />
                )

                }
            </div>
        )
    }
}

export default App