import "./NavBar.css";
import logo from "../../Home/resources/Logo.png";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { Link } from "react-router-dom";

import React, { Component } from "react";

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < window.innerHeight;
      if (isTop !== true) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  render() {
    return (
      <header className={this.state.scrolled ? "toolbar-scrolled" : "toolbar"}>
        <nav className="toolbar-navigation">
          <div className="toolbar-logo">
            <img src={logo}></img>
          </div>
          <div className="toolbar-navigation-items">
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
          </div>
          <div className="drawer-toggle-button">
            <DrawerToggleButton click={this.props.drawerClickHandler} />
          </div>
        </nav>
      </header>
    );
  }
}
