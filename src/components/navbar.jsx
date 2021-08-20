import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <i className="fas fa-leaf navbar-logo"></i>
        Habit Tracker
        <span className="navbar-count">0</span>
      </nav>
    );
  }
}

export default Navbar;
