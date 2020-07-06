import React, { Component } from "react";
import "./OrbitWIKI.css";
import WIKIMains from "./WIKIMains/WIKIMains";
import TableOfContents from "./TableOfContents/TableOfContents";

import satelliteRest from "./resources/satellite-test.png";
import test2 from "./resources/test2.png";
import test3 from "./resources/test3.png";
import test4 from "./resources/test4.png";
import test5 from "./resources/test5.png";
import test62 from "./resources/test6.2.png";
import test7 from "./resources/test7.png";
import test8 from "./resources/test8.png";

export default class OrbitWIKI extends Component {
  render() {
    return (
      <div>
        <header className="OrbitWIKI-header">
          <div className="text-box">
            <div className="container">
              <h1>OrbitWIKI</h1>
              <p>
                Each year, Revolve NTNU gets bigger and better. One of the
                reasons we grow each year is because of our sponsors. Let’s not
                forget that they are a part of our team, as well as the students
                who build the car. Without our sponsors, we would not have had
                the opportunity to produce high-quality parts for the different
                systems on our car. We have several different types of sponsors,
                ranging from everything from software to mechanical parts to
                autonomous systems. We are so grateful for all of the help we
                get from them. They are always there if we need help exploring
                new concepts or improve our designs. We can always count on them
                to help us if we are in need. To all of our sponsors, thank you
                for being a part of Revolve NTNU Team 2020!
              </p>
            </div>
          </div>
          {/*<div className="header-down-arrow">asd</div>*/}
        </header>
        {/*<TableOfContents />*/}
        <WIKIMains
          image={test3}
          header="MECHANICAL"
          info="The mechanical team is responsible for creating the physical requirements 
            of the other subsystems. Aswell we are designing and manufacturing a camera boom 
            in house. The simulation and testing will also be planned by this team."
          buttonText="Read More"
          boolean={false}
        />
        <WIKIMains
          image={test2}
          header="ELECTRONICS"
          info="The electronics team (ES – Electronic systems) are responsible for
            the development and production of the electrical systems on the
            satellite. Other teams are responsible for their systems, but can
            hire the electronics team for development of hardware. The team
            makes sure that all the systems of the satellite interfaces
            correctly according to the EICD (Electrical Interface Control
            Document). The EPS (Electronic Power System) is currently ES
            responsibilit"
          buttonText="Read More"
          boolean={true}
        />
        <WIKIMains
          image={test4}
          header="PAYLOAD"
          info="The payload team are responsible for making the camera system and ensuring that 
          it is integrated with the mechanical- and other electrical systems. This includes software 
          development for taking the pictures as well as facilitating communications with the OBC."
          buttonText="Read More"
          boolean={false}
        />
        <WIKIMains
          image={test5}
          header="SUB-ORBITAL"
          info="Sub-Orbital is responsible for the planning and execution of a balloon mission – 
          during which the other teams get a chance to test their systems and the overall integration 
          between them – in addition to carrying out several of our own objectives. This provides valuable 
          insight to the teams for when the time comes to launch Orbit’s satellite."
          buttonText="Read More"
          boolean={true}
        />
        <WIKIMains
          image={test62}
          header="SATELLITE COMMUNCATIONS"
          info="The Satellite Radio team is responsible for implementing the space segment of the communication 
          system. The team works closely with the Ground Station team and the OBC team to implement routing of commands 
          from the ground station to the satellite, and telemetry and data from the satellite to the ground station. The 
          satellite radios are essential to ensure mission success, and a lot of effort is being put into making sure we 
          have a reliable communication link with high bandwidth."
          buttonText="Read More"
          boolean={false}
        />
        <WIKIMains
          image={test7}
          header="ON-BOARD-COMPUTER"
          info="OBC is short for On-Board Computer. The OBC team is responsible for programming our satellite’s main computer 
          and giving assistance in programming to the ADCS team. The main computer handles commands from the ground, monitor 
          the system and change its operating modes. It is the satellites functional center and a key part to make the satellite 
          operational."
          buttonText="Read More"
          boolean={true}
        />
        <WIKIMains
          image={test8}
          header="THE ATTITUDE DETERMINATION AND CONTROL SYSTEM"
          info="The Attitude determination and control system (ADCS) is 
          responsible for developing a system that can control the attitude 
          of the satellite. The attitude needs to be controlled so the Earth 
          is in the background for the selfies, so the antennas point to Earth 
          for radio transmission and so that the solar cells are pointing towards 
          the Sun for charging.   "
          buttonText="Read More"
          boolean={false}
        />
      </div>
    );
  }
}
