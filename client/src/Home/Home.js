import React, { Component } from "react";
import "./Home.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import HowItWorks from "./Components/HowItWorks/HowItWorks";

import OrbitNTNULogo from "./resources/OrbitNTNULogo.png";
import OrbitNTNUSatellite from "./resources/orbitNTNUSatellite.png";
import AboutUsImage from "./resources/orbitAboutUsImage.jpg";


class Home extends Component {
  render() {
    return (
      <div>
        <header id="home-header">
          
          <div className="container">
            <h1>Selfie Sat</h1>
            <p>
              "Do not go gentle into that good night <br />
              Old age should burn and rave at close of day Rage, <br />
              rage against the dying of the light."
            </p>
          </div>
        </header>
        <main id="home-main">
          <div className="about-us-container">
            <AboutUs
              header="What is Selfie Sat?"
              image={OrbitNTNUSatellite}
              text="The SelfieSat, our first project, started out as a simple satellite project; we wanted to make an operational satellite that is able to communicate while it is orbiting earth. However, we wanted to make things a bit more interesting. While SelfieSat is in orbit it will be able to display a selfie of any person on earth, which will be uploaded from our ground station at NTNU. A robotic arm with a camera attached will photograph the screen with the earth in its background. Finally this picture will be sent back to the selfie-taking individual!"
              text2="Go to our wiki to read more about the Selfie Sat and Orbit NTNU!"
            />
          </div>
          <div className="how-it-works-container">
            <HowItWorks
              header="How it works and how to get started!"
              text1="You and other uses can fill out the form and upload the image that you want to be displayed on the Selfie Sat while the photo is taken. After that the we send it to the Selfie Sat and the Selfie Sat displays it on the screen and takes a photo of it with the earth in the backgrund. Awesome, right? At last the image is sent back to you."
              text2="Even though the Selfie Sat isen't launched up in space yet, you can already now start send in images, just press the button below to get started!"
            />
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
