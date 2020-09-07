import React from "react";
import "./SideDrawer.css";
import { Link } from "react-router-dom";


const sideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <Link to="/">
          <li>
            <a>Home</a>
          </li>
        </Link>
        <Link to="/orbitWiki">
          <li>
            <a>OrbitWiki</a>
          </li>
        </Link>
        <Link to="/getStarted">
          <li>
            <a>Get Started</a>
          </li>
        </Link>
        <Link to="/contact-us">
          <li>
            <a>Contact Us</a>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default sideDrawer;
