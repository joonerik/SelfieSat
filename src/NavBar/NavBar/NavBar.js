import React from "react";
import "./NavBar.css";
import logo from "../../Home/resources/Logo.png"
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton"

const navbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar-navigation">
      <div className="toolbar-logo">
        <img src={logo}></img>
      </div>
      <div className="toolbar-navigation-items">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">OrbitWiki</a>
          </li>
          <li>
            <a href="#">Get Started</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="drawer-toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler}/>
      </div>
    </nav>
  </header>
);

export default navbar;
