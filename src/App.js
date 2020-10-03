import React, { Component } from "react";
import Home from "./Home/Home";
import NavBar from "./NavBar/NavBar/NavBar";
import SideDrawer from "./NavBar/SideDrawer/SideDrawer";
import BackDrop from "./NavBar/BackDrop/BackDrop";
import OrbitWIKI from "./OrbitWIKI/OrbitWIKI";
import Footer from "./Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import GetStarted from "./GetStarted/GetStarted";



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sideDrawerOpen: false,
    };
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backDrop;

    if (this.state.sideDrawerOpen) {
      backDrop = <BackDrop click={this.backdropClickHandler} />;
    }

    return (
      <Router>
        <ScrollToTop />
        <div style={{ height: "100%", fontFamily: "'Montserrat', sans-serif" }}>
          <NavBar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backDrop}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/orbitWIKI" component={OrbitWIKI} />
            <Route path="/getStarted" component={GetStarted} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
